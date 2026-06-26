import ScrollReveal from './ScrollReveal'

const layers = [
  {
    label: 'Dữ liệu đầu vào',
    items: ['CRM', 'Email', 'Zalo', 'Sheet'],
    icon: 'ti-database',
    color: '#1A4BAD',
  },
  {
    label: 'Lõi AI AutoBiz',
    items: ['Phân tích', 'Tự động hóa', 'Dự báo'],
    icon: 'ti-brain',
    color: '#2563EB',
    highlight: true,
  },
  {
    label: 'Kết quả đầu ra',
    items: ['Báo cáo', 'Hành động tự động', 'Cảnh báo thông minh'],
    icon: 'ti-chart-arrows-vertical',
    color: '#0D3580',
  },
]

export default function SolutionOverview() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #0A2D6E 0%, #061A45 100%)', padding: '88px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#93C5FD' }}>
            Giải pháp
          </p>
          <h2 className="text-center font-extrabold text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Một nền tảng AI – Toàn bộ vận hành doanh nghiệp
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            AutoBiz AI tích hợp trí tuệ nhân tạo trực tiếp vào quy trình bán hàng, chăm sóc khách hàng và quản trị nội bộ của doanh nghiệp bạn.
          </p>
        </ScrollReveal>

        {/* 3-layer diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          {layers.map((layer, i) => (
            <div key={i} className="flex items-center gap-4 w-full lg:w-auto">
              <ScrollReveal delay={i * 150} className="flex-1 lg:w-64">
                <div
                  className="rounded-2xl p-6 text-center h-full"
                  style={{
                    background: layer.highlight ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.05)',
                    border: layer.highlight ? '2px solid #2563EB' : '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: layer.highlight ? '#2563EB' : 'rgba(255,255,255,0.08)' }}>
                    <i className={`ti ${layer.icon} text-2xl text-white`} />
                  </div>
                  <h3 className="font-bold text-white mb-4 text-sm">{layer.label}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {layer.items.map((item) => (
                      <span key={item}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: layer.highlight ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                          color: layer.highlight ? '#fff' : '#CBD5E1',
                        }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Arrow (not after last item) */}
              {i < layers.length - 1 && (
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-blue-400" />
                  <i className="ti ti-chevron-right text-blue-400 text-xl -ml-2 -mt-2" />
                </div>
              )}

              {/* Down arrow on mobile */}
              {i < layers.length - 1 && (
                <div className="lg:hidden self-center -my-2">
                  <i className="ti ti-chevron-down text-blue-400 text-xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
