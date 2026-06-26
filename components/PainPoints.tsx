import ScrollReveal from './ScrollReveal'

export default function PainPoints() {
  const cards = [
    {
      icon: 'ti-clock-exclamation',
      title: 'Mất quá nhiều thời gian cho việc thủ công',
      body: 'Báo cáo, nhập liệu, phân loại email – những việc lặp đi lặp lại ngốn hết 40% thời gian của đội ngũ.',
    },
    {
      icon: 'ti-trending-down',
      title: 'Tỷ lệ chuyển đổi thấp dù đã chi nhiều cho marketing',
      body: 'Khách hàng tiềm năng bị bỏ lỡ vì phản hồi chậm, follow-up không đúng lúc, thiếu cá nhân hóa trong giao tiếp.',
    },
    {
      icon: 'ti-building-factory',
      title: 'Vận hành chắp vá – khó mở rộng quy mô',
      body: 'Nhiều công cụ rời rạc, dữ liệu phân tán, quy trình không chuẩn hóa khiến mỗi lần scale lên là một cơn ác mộng.',
    },
  ]

  return (
    <section style={{ background: '#0D3580', padding: '72px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#FCA5A5' }}>
            Vấn đề bạn đang gặp phải
          </p>
          <h2 className="text-center font-extrabold text-white mb-12"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Doanh nghiệp của bạn đang bị kìm hãm bởi điều này?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(252,165,165,0.12)' }}>
                  <i className={`ti ${card.icon} text-2xl`} style={{ color: '#FCA5A5' }} />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{card.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{card.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center font-medium mt-12" style={{ fontSize: '1.1rem', color: '#93C5FD' }}>
            AutoBiz AI giải quyết cả ba vấn đề này — trong một nền tảng duy nhất.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
