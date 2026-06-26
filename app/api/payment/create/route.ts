import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { createSepayOrder, getPlanPrice, formatVND } from '@/lib/sepay'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, plan, billing_cycle } = body

    if (!email || !plan || !billing_cycle) {
      return NextResponse.json({ error: 'Thiếu thông tin thanh toán' }, { status: 400 })
    }

    if (plan === 'enterprise') {
      return NextResponse.json({ error: 'Vui lòng liên hệ tư vấn cho gói Enterprise' }, { status: 400 })
    }

    const amount = getPlanPrice(plan, billing_cycle)
    if (amount <= 0) {
      return NextResponse.json({ error: 'Gói không hợp lệ' }, { status: 400 })
    }

    // Get user registration
    const { data: user, error: userErr } = await supabaseAdmin
      .from('registrations')
      .select('id, full_name, phone')
      .eq('email', email)
      .single()

    if (userErr || !user) {
      return NextResponse.json({ error: 'Vui lòng đăng ký trước khi thanh toán' }, { status: 404 })
    }

    const orderId = `AUTOBIZ-${user.id}-${Date.now()}`

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

    const sepayResult = await createSepayOrder({
      orderId,
      amount,
      description: `AutoBiz AI - Gói ${plan.toUpperCase()} - ${billing_cycle === 'yearly' ? 'Năm' : 'Tháng'} - ${formatVND(amount)}`,
      customerName: user.full_name,
      customerEmail: email,
      customerPhone: user.phone,
      returnUrl: `${appUrl}/payment/success?order=${orderId}`,
      cancelUrl: `${appUrl}/payment/cancel?order=${orderId}`,
    })

    // Update registration with order info
    await supabaseAdmin
      .from('registrations')
      .update({
        sepay_order_id: orderId,
        payment_status: 'pending',
        plan,
        billing_cycle,
      })
      .eq('email', email)

    // Save payment record
    await supabaseAdmin.from('payments').insert({
      user_email: email,
      order_id: orderId,
      amount,
      plan,
      billing_cycle,
      status: 'pending',
    })

    return NextResponse.json({
      success: true,
      data: sepayResult.data,
    })
  } catch (err: unknown) {
    console.error('Payment create error:', err)
    return NextResponse.json({ error: 'Không thể tạo đơn hàng. Vui lòng thử lại.' }, { status: 500 })
  }
}
