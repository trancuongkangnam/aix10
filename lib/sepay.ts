// SePay payment integration
// Docs: https://sepay.vn/tai-lieu-api.html

const SEPAY_BASE_URL = 'https://my.sepay.vn/userapi'

export type SepayOrderPayload = {
  orderId: string
  amount: number
  description: string
  customerName: string
  customerEmail: string
  customerPhone: string
  returnUrl: string
  cancelUrl: string
}

export type SepayOrderResponse = {
  success: boolean
  message: string
  data?: {
    qr_code: string
    qr_code_url: string
    payment_url: string
    bank_account_number: string
    bank_code: string
    transfer_content: string
    amount: number
    order_id: string
  }
}

// Create QR payment via SePay
export async function createSepayOrder(payload: SepayOrderPayload): Promise<SepayOrderResponse> {
  const transferContent = `AUTOBIZAI ${payload.orderId}`

  const response = await fetch(`${SEPAY_BASE_URL}/transactions/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SEPAY_API_KEY}`,
    },
    body: JSON.stringify({
      account_number: process.env.SEPAY_ACCOUNT_NUMBER,
      amount: payload.amount,
      content: transferContent,
      reference_code: payload.orderId,
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`SePay API error: ${err}`)
  }

  const data = await response.json()

  return {
    success: true,
    message: 'Tạo đơn hàng thành công',
    data: {
      qr_code: buildVietQR(payload.amount, transferContent),
      qr_code_url: buildVietQR(payload.amount, transferContent),
      payment_url: `https://qr.sepay.vn/img?bank=${process.env.SEPAY_BANK_CODE}&acc=${process.env.SEPAY_ACCOUNT_NUMBER}&template=compact&amount=${payload.amount}&des=${encodeURIComponent(transferContent)}`,
      bank_account_number: process.env.SEPAY_ACCOUNT_NUMBER ?? '',
      bank_code: process.env.SEPAY_BANK_CODE ?? '',
      transfer_content: transferContent,
      amount: payload.amount,
      order_id: payload.orderId,
    },
  }
}

// Build VietQR URL for display
function buildVietQR(amount: number, content: string): string {
  const bankCode = process.env.SEPAY_BANK_CODE ?? 'MB'
  const accountNumber = process.env.SEPAY_ACCOUNT_NUMBER ?? ''
  return `https://qr.sepay.vn/img?bank=${bankCode}&acc=${accountNumber}&template=compact&amount=${amount}&des=${encodeURIComponent(content)}`
}

// Verify SePay webhook signature
export function verifySepayWebhook(body: string, signature: string): boolean {
  const crypto = require('crypto')
  const secret = process.env.SEPAY_WEBHOOK_SECRET ?? ''
  const hmac = crypto.createHmac('sha256', secret).update(body).digest('hex')
  return hmac === signature
}

export const PLAN_PRICES = {
  starter: { monthly: 2990000, yearly: 2390000 },
  business: { monthly: 6990000, yearly: 5590000 },
  enterprise: { monthly: 0, yearly: 0 },
}

export function getPlanPrice(plan: string, billingCycle: string): number {
  const prices = PLAN_PRICES[plan as keyof typeof PLAN_PRICES]
  if (!prices) return 0
  return billingCycle === 'yearly' ? prices.yearly : prices.monthly
}

export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
}
