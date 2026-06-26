'use client'
import { useState, useEffect } from 'react'

type Step = 'form' | 'payment' | 'success'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  defaultPlan?: string
}

interface PaymentData {
  qr_code_url: string
  bank_account_number: string
  bank_code: string
  transfer_content: string
  amount: number
  order_id: string
}

export default function RegisterModal({ isOpen, onClose, defaultPlan = 'business' }: RegisterModalProps) {
  const [step, setStep] = useState<Step>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan)
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
  })

  useEffect(() => {
    setSelectedPlan(defaultPlan)
  }, [defaultPlan])

  useEffect(() => {
    if (!isOpen) {
      setStep('form')
      setError('')
      setPaymentData(null)
      setLoading(false)
    }
  }, [isOpen])

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const planNames: Record<string, string> = {
    starter: 'Starter',
    business: 'Business',
    enterprise: 'Enterprise',
  }

  const planPrices: Record<string, { monthly: string; yearly: string }> = {
    starter: { monthly: '2.990.000 ₫', yearly: '2.390.000 ₫' },
    business: { monthly: '6.990.000 ₫', yearly: '5.590.000 ₫' },
    enterprise: { monthly: 'Liên hệ', yearly: 'Liên hệ' },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, plan: selectedPlan, billing_cycle: billingCycle }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Đã có lỗi xảy ra')

      if (selectedPlan === 'enterprise') {
        setStep('success')
        return
      }

      // Create payment order
      const payRes = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, plan: selectedPlan, billing_cycle: billingCycle }),
      })

      const payData = await payRes.json()
      if (!payRes.ok) throw new Error(payData.error || 'Không thể tạo đơn thanh toán')

      setPaymentData(payData.data)
      setStep('payment')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Đã có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
        style={{ background: '#061A45', border: '1px solid rgba(255,255,255,0.15)', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div className="px-7 pt-7 pb-5 flex items-start justify-between"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <h2 className="font-extrabold text-white text-xl">
              {step === 'form' && 'Đăng ký dùng thử miễn phí'}
              {step === 'payment' && 'Thanh toán qua SePay'}
              {step === 'success' && 'Đăng ký thành công!'}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {step === 'form' && '14 ngày miễn phí · Không cần thẻ tín dụng'}
              {step === 'payment' && 'Chuyển khoản ngân hàng qua mã QR'}
              {step === 'success' && 'Kiểm tra email để nhận thông tin kích hoạt'}
            </p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors ml-4 mt-1">
            <i className="ti ti-x text-xl" />
          </button>
        </div>

        <div className="p-7">
          {/* Step: Form */}
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Plan selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Chọn gói</label>
                <div className="grid grid-cols-3 gap-2">
                  {['starter', 'business', 'enterprise'].map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => setSelectedPlan(plan)}
                      className="py-2.5 rounded-lg text-sm font-semibold transition-all"
                      style={{
                        background: selectedPlan === plan ? '#2563EB' : 'rgba(255,255,255,0.06)',
                        color: selectedPlan === plan ? '#fff' : '#94A3B8',
                        border: selectedPlan === plan ? '1px solid #2563EB' : '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {planNames[plan]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Billing cycle */}
              {selectedPlan !== 'enterprise' && (
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Chu kỳ thanh toán</label>
                  <div className="grid grid-cols-2 gap-2">
                    {([['monthly', 'Hàng tháng'], ['yearly', 'Hàng năm (Tiết kiệm 20%)']] as const).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setBillingCycle(key)}
                        className="py-2.5 rounded-lg text-sm font-medium transition-all text-left px-3"
                        style={{
                          background: billingCycle === key ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.04)',
                          color: billingCycle === key ? '#93C5FD' : '#94A3B8',
                          border: billingCycle === key ? '1px solid #2563EB' : '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <div>{label}</div>
                        <div className="font-bold text-white mt-0.5"
                          style={{ fontSize: '0.9rem' }}>
                          {planPrices[selectedPlan][key]}
                          {planPrices[selectedPlan][key] !== 'Liên hệ' && <span className="text-slate-400 font-normal text-xs">/tháng</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Form fields */}
              {[
                { name: 'full_name', label: 'Họ và tên', placeholder: 'Nguyễn Văn A', type: 'text' },
                { name: 'email', label: 'Email', placeholder: 'email@congty.com', type: 'email' },
                { name: 'phone', label: 'Số điện thoại', placeholder: '0912 345 678', type: 'tel' },
                { name: 'company_name', label: 'Tên công ty', placeholder: 'Công ty TNHH ABC', type: 'text' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-slate-300 mb-1.5">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#2563EB')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
              ))}

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-400 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <i className="ti ti-alert-circle" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white transition-all mt-2"
                style={{ background: loading ? '#6B7280' : '#EF4444', fontSize: '1rem' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="ti ti-loader-2 animate-spin" /> Đang xử lý...
                  </span>
                ) : selectedPlan === 'enterprise' ? (
                  'Gửi yêu cầu tư vấn'
                ) : (
                  'Tiếp tục thanh toán →'
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                Bằng cách đăng ký, bạn đồng ý với{' '}
                <a href="#" className="text-blue-400 hover:underline">Điều khoản sử dụng</a>{' '}
                và{' '}
                <a href="#" className="text-blue-400 hover:underline">Chính sách bảo mật</a>
              </p>
            </form>
          )}

          {/* Step: Payment */}
          {step === 'payment' && paymentData && (
            <div className="space-y-5">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-4"
                  style={{ background: 'rgba(37,99,235,0.15)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.3)' }}>
                  <i className="ti ti-qrcode" />
                  Quét mã QR để thanh toán
                </div>

                {/* QR Code */}
                <div className="inline-block p-4 rounded-2xl mb-4" style={{ background: 'white' }}>
                  <img
                    src={paymentData.qr_code_url}
                    alt="QR Code thanh toán"
                    className="w-48 h-48"
                  />
                </div>
              </div>

              {/* Payment details */}
              <div className="space-y-3 rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { label: 'Ngân hàng', value: paymentData.bank_code },
                  { label: 'Số tài khoản', value: paymentData.bank_account_number },
                  { label: 'Số tiền', value: new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(paymentData.amount) },
                  { label: 'Nội dung chuyển khoản', value: paymentData.transfer_content },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-3">
                    <span className="text-slate-400 text-sm flex-shrink-0">{item.label}:</span>
                    <span className="text-white text-sm font-semibold text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-400 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(252,165,165,0.07)', border: '1px solid rgba(252,165,165,0.15)' }}>
                <i className="ti ti-info-circle text-red-300 flex-shrink-0 mt-0.5" />
                <span>
                  Vui lòng chuyển khoản <strong className="text-white">đúng nội dung</strong> để hệ thống tự động kích hoạt tài khoản. Thanh toán sẽ được xác nhận trong vòng 1–5 phút.
                </span>
              </div>

              <button
                onClick={() => setStep('success')}
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-all text-sm"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                Tôi đã chuyển khoản xong
              </button>
            </div>
          )}

          {/* Step: Success */}
          {step === 'success' && (
            <div className="text-center py-6 space-y-5">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                style={{ background: 'rgba(52,211,153,0.12)', border: '2px solid rgba(52,211,153,0.3)' }}>
                <i className="ti ti-circle-check text-5xl" style={{ color: '#34D399' }} />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-xl mb-2">
                  {selectedPlan === 'enterprise' ? 'Yêu cầu đã gửi!' : 'Đăng ký thành công!'}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {selectedPlan === 'enterprise'
                    ? 'Đội ngũ tư vấn sẽ liên hệ với bạn trong vòng 24 giờ làm việc.'
                    : `Kiểm tra email ${form.email} để xác nhận tài khoản và bắt đầu 14 ngày dùng thử miễn phí.`
                  }
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl font-semibold text-white"
                style={{ background: '#2563EB' }}
              >
                Đóng
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
