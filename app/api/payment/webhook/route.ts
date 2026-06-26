import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { verifySepayWebhook } from '@/lib/sepay'

// SePay sends POST to this endpoint when payment confirmed
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text()
    const signature = req.headers.get('x-sepay-signature') ?? ''

    // Verify webhook authenticity
    if (process.env.SEPAY_WEBHOOK_SECRET && !verifySepayWebhook(rawBody, signature)) {
      console.error('Invalid SePay webhook signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const payload = JSON.parse(rawBody)

    // SePay webhook payload structure:
    // { id, gateway, transactionDate, accountNumber, code, content, transferType, transferAmount, accumulated, referenceCode, description, subAccount, referenceNumber }

    const { content, transferAmount, referenceCode } = payload

    if (!content || !transferAmount) {
      return NextResponse.json({ received: true })
    }

    // Extract order ID from transfer content (format: "AUTOBIZAI ORDER_ID")
    const orderMatch = content.match(/AUTOBIZAI\s+(AUTOBIZ-[\w-]+)/i)
    const orderId = orderMatch ? orderMatch[1] : referenceCode

    if (!orderId) {
      console.log('No order ID found in webhook:', content)
      return NextResponse.json({ received: true })
    }

    // Find payment record
    const { data: payment } = await supabaseAdmin
      .from('payments')
      .select('*')
      .eq('order_id', orderId)
      .single()

    if (!payment) {
      console.log('Payment not found for order:', orderId)
      return NextResponse.json({ received: true })
    }

    // Verify amount matches
    if (Number(transferAmount) < payment.amount) {
      console.warn(`Amount mismatch: expected ${payment.amount}, got ${transferAmount}`)
      await supabaseAdmin
        .from('payments')
        .update({ status: 'amount_mismatch', webhook_payload: payload })
        .eq('order_id', orderId)
      return NextResponse.json({ received: true })
    }

    // Mark payment as paid
    await supabaseAdmin
      .from('payments')
      .update({ status: 'paid', paid_at: new Date().toISOString(), webhook_payload: payload })
      .eq('order_id', orderId)

    // Activate user subscription
    const subscriptionEndsAt = new Date()
    if (payment.billing_cycle === 'yearly') {
      subscriptionEndsAt.setFullYear(subscriptionEndsAt.getFullYear() + 1)
    } else {
      subscriptionEndsAt.setMonth(subscriptionEndsAt.getMonth() + 1)
    }

    await supabaseAdmin
      .from('registrations')
      .update({
        payment_status: 'paid',
        trial_ends_at: subscriptionEndsAt.toISOString(),
      })
      .eq('email', payment.user_email)

    console.log(`✅ Payment confirmed: ${orderId} — ${payment.user_email} — ${payment.plan}`)

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
