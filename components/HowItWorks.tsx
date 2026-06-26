import ScrollReveal from './ScrollReveal'

const steps = [
  {
    number: '01',
    icon: 'ti-link',
    title: 'Kết nối dữ liệu & hệ thống hiện tại',
    description: 'Chúng tôi tích hợp AutoBiz AI với CRM, email, kênh bán hàng của bạn trong vòng 24 giờ. Không cần thay đổi bất cứ điều gì đang hoạt động tốt.',
    duration: '24 giờ',
  },
  {
    number: '02',
    icon: 'ti-brain',
    title: 'AI học và cá nhân hóa theo doanh nghiệp bạn',
    description: 'Trong 7 ngày đầu, AI phân tích dữ liệu lịch sử, hiểu quy trình đặc thù và tự điều chỉnh để phù hợp với ngành của bạn.',
    duration: '7 ngày',
  },
  {
    number: '03',
    icon: 'ti-rocket',
    title: 'Vận hành tự động – Bạn tập trung vào chiến lược',
    description: 'Từ ngày thứ 8 trở đi, các quy trình tự động hóa chạy 24/7. Bạn nhận báo cáo hàng ngày và chỉ cần xử lý những ngoại lệ quan trọng.',
    duration: 'Từ ngày 8',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: '#0A2D6E', padding: '80px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#93C5FD' }}>
            Cách hoạt động
          </p>
          <h2 className="text-center font-extrabold text-white mb-14" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Triển khai trong 3 bước – Không cần kỹ thuật
          </h2>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-9 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-0.5"
            style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.3), rgba(37,99,235,0.6), rgba(37,99,235,0.3))' }} />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150} className="flex-1">
              <div className="glass-card rounded-2xl p-7 relative">
                {/* Step number badge */}
                <div className="absolute -top-4 left-7">
                  <span className="font-extrabold text-3xl" style={{ color: '#FCA5A5', fontVariantNumeric: 'tabular-nums' }}>
                    {step.number}
                  </span>
                </div>

                <div className="mt-4 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(37,99,235,0.2)' }}>
                  <i className={`ti ${step.icon} text-2xl text-blue-400`} />
                </div>

                <h3 className="font-bold text-white text-base mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{step.description}</p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(52,211,153,0.1)', color: '#34D399', border: '1px solid rgba(52,211,153,0.2)' }}>
                  <i className="ti ti-clock" />
                  {step.duration}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 flex gap-5">
                <div className="flex-shrink-0">
                  <span className="font-extrabold text-3xl" style={{ color: '#FCA5A5' }}>{step.number}</span>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'rgba(37,99,235,0.2)' }}>
                    <i className={`ti ${step.icon} text-xl text-blue-400`} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{step.description}</p>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                    style={{ background: 'rgba(52,211,153,0.1)', color: '#34D399' }}>
                    {step.duration}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
