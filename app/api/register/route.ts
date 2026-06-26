import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { full_name, email, phone, company_name, plan, billing_cycle } = body

    if (!full_name || !email || !phone || !company_name || !plan) {
      return NextResponse.json({ error: 'Vui lòng điền đầy đủ thông tin' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email không hợp lệ' }, { status: 400 })
    }

    // Check existing user
    const { data: existing } = await supabaseAdmin
      .from('registrations')
      .select('id, payment_status')
      .eq('email', email)
      .single()

    if (existing) {
      if (existing.payment_status === 'paid') {
        return NextResponse.json({ error: 'Email này đã có tài khoản. Vui lòng đăng nhập.' }, { status: 409 })
      }
    }

    const trialEndsAt = new Date()
    trialEndsAt.setDate(trialEndsAt.getDate() + 14)

    const registrationData = {
      full_name,
      email,
      phone,
      company_name,
      plan: plan || 'starter',
      billing_cycle: billing_cycle || 'monthly',
      payment_status: plan === 'enterprise' ? 'pending' : 'free_trial',
      trial_ends_at: trialEndsAt.toISOString(),
    }

    const { data, error } = await supabaseAdmin
      .from('registrations')
      .upsert(registrationData, { onConflict: 'email' })
      .select()
      .single()

    if (error) throw error

    // Send welcome email (fire-and-forget)
    sendWelcomeEmail(email, full_name, plan).catch(console.error)

    return NextResponse.json({
      success: true,
      message: 'Đăng ký thành công! Kiểm tra email để xác nhận.',
      data: { id: data.id, plan: data.plan, trial_ends_at: data.trial_ends_at },
    })
  } catch (err: unknown) {
    console.error('Register error:', err)
    return NextResponse.json({ error: 'Có lỗi xảy ra. Vui lòng thử lại.' }, { status: 500 })
  }
}

async function sendWelcomeEmail(email: string, name: string, plan: string) {
  if (!process.env.SMTP_HOST) return

  const nodemailer = await import('nodemailer')
  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  await transporter.sendMail({
    from: `"AutoBiz AI" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Chào mừng ${name} đến với AutoBiz AI! 🎉`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A2D6E; color: white; padding: 40px; border-radius: 12px;">
        <h1 style="color: #FCA5A5;">Chào mừng ${name}!</h1>
        <p>Bạn đã đăng ký thành công gói <strong>${plan.toUpperCase()}</strong>.</p>
        <p>Dùng thử miễn phí <strong>14 ngày</strong> của bạn đã bắt đầu.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="display: inline-block; background: #EF4444; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin-top: 20px;">Bắt đầu ngay →</a>
        <p style="color: #CBD5E1; margin-top: 30px; font-size: 14px;">Cần hỗ trợ? Liên hệ chúng tôi qua Zalo hoặc email.</p>
      </div>
    `,
  })
}
