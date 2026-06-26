'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const plans = [
  {
    name: 'Starter',
    tagline: 'Dành cho doanh nghiệp mới bắt đầu số hóa',
    monthly: '2.990.000 ₫',
    yearly: '2.390.000 ₫',
    features: [
      'Chatbot AI tự động (1 kênh)',
      'Dashboard phân tích cơ bản',
      'Tự động hóa email (500 email/tháng)',
      '3 quy trình tự động hóa',
      'Hỗ trợ qua email',
    ],
    cta: 'Dùng thử miễn phí',
    highlighted: false,
    planKey: 'starter',
  },
  {
    name: 'Business',
    tagline: 'Phù hợp nhất cho SME đang tăng trưởng',
    monthly: '6.990.000 ₫',
    yearly: '5.590.000 ₫',
    badge: 'Phổ biến nhất',
    features: [
      'Chatbot AI (5 kênh – Zalo, FB, Web)',
      'Dashboard thông minh + dự báo AI',
      'Tự động hóa email không giới hạn',
      '20 quy trình tự động hóa',
      'AI phân tích lead & sales pipeline',
      'Tích hợp 20+ phần mềm',
      'Hỗ trợ ưu tiên qua Zalo & email',
    ],
    cta: 'Bắt đầu ngay – Miễn phí 14 ngày',
    highlighted: true,
    planKey: 'business',
  },
  {
    name: 'Enterprise',
    tagline: 'Dành cho doanh nghiệp cần tùy chỉnh sâu',
    monthly: 'Liên hệ',
    yearly: 'Liên hệ',
    features: [
      'Toàn bộ tính năng Business',
      'Tự động hóa không giới hạn',
      'AI training theo dữ liệu riêng',
      'Tích hợp ERP / hệ thống nội bộ',
      'Dedicated account manager',
      'SLA 99.9% uptime',
      'Onboarding & training trực tiếp',
    ],
    cta: 'Liên hệ tư vấn',
    highlighted: false,
    planKey: 'enterprise',
  },
]

interface PricingProps {
  onRegisterClick: (plan?: string) => void
}

export default function Pricing({ onRegisterClick }: PricingProps) {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" style={{ background: '#061A45', padding: '88px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#93C5FD' }}>
            Bảng giá
          </p>
          <h2 className="text-center font-extrabold text-white mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Đầu tư hợp lý – ROI rõ ràng
          </h2>
          <p className="text-center text-slate-400 mb-8">Dùng thử 14 ngày miễn phí, không cần thẻ tín dụng</p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-400'}`}>Thanh toán tháng</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full transition-all duration-300"
              style={{ background: isYearly ? '#2563EB' : 'rgba(255,255,255,0.2)' }}
            >
              <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-white transition-all duration-300 ${isYearly ? 'left-7.5' : 'left-0.5'}`}
                style={{ left: isYearly ? '30px' : '2px' }} />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Thanh toán năm
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(52,211,153,0.15)', color: '#34D399' }}>
                Tiết kiệm 20%
              </span>
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className="rounded-2xl p-7 flex flex-col relative"
                style={{
                  background: plan.highlighted ? 'rgba(37,99,235,0.12)' : 'rgba(255,255,255,0.04)',
                  border: plan.highlighted ? '2px solid #2563EB' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background: '#EF4444' }}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="font-extrabold text-white text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-5">{plan.tagline}</p>

                <div className="mb-6">
                  <span className="font-extrabold text-white" style={{ fontSize: '2rem' }}>
                    {isYearly ? plan.yearly : plan.monthly}
                  </span>
                  {plan.monthly !== 'Liên hệ' && (
                    <span className="text-slate-400 text-sm ml-1">/tháng</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <i className="ti ti-check text-emerald-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onRegisterClick(plan.planKey)}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all"
                  style={
                    plan.highlighted
                      ? { background: '#EF4444', color: '#fff' }
                      : { background: 'transparent', color: '#93C5FD', border: '1px solid rgba(147,197,253,0.4)' }
                  }
                  onMouseEnter={(e) => {
                    if (plan.highlighted) e.currentTarget.style.background = '#DC2626'
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlighted) e.currentTarget.style.background = '#EF4444'
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Guarantee */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mt-10 text-sm" style={{ color: '#34D399' }}>
            <i className="ti ti-shield-check text-xl" />
            <span>Cam kết hoàn tiền 100% trong 30 ngày nếu bạn không hài lòng</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
