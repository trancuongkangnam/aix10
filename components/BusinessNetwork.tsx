'use client'

const benefits = [
  'Kết nối doanh nhân chất lượng',
  'Chia sẻ cơ hội kinh doanh',
  'Hợp tác cùng phát triển',
  'Thương hiệu',
  'Sự kiện định kỳ – Network hiệu quả',
]

const networkCards = [
  { emoji: '🤝', title: 'KẾT NỐI CHẤT LƯỢNG', desc: 'Mở rộng mối quan hệ với các doanh nhân uy tín.' },
  { emoji: '📚', title: 'CHIA SẺ TRI THỨC', desc: 'Cập nhật xu hướng, kiến thức kinh doanh thực chiến.' },
  { emoji: '🌐', title: 'HỢP TÁC BỀN VỮNG', desc: 'Đồng hành cùng phát triển, tạo giá trị lâu dài.' },
]

const events = [
  { label: 'Hội Ngộ Doanh Nhân Kangnam', time: 'Tháng 06/2025' },
  { label: 'Tọa Đàm Chiến Lược Kinh Doanh', time: 'Tháng 07/2025' },
  { label: 'Kết Nối Giao Thương Toàn Quốc', time: 'Tháng 06/2025' },
]

export default function BusinessNetwork() {
  return (
    <section id="business" style={{ background: '#0a0f1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="section-label">Doanh Nhân Kết Nối</div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            KẾT NỐI GIÁ TRỊ – HỢP TÁC THÀNH CÔNG
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* LEFT */}
          <div className="text-white space-y-5">
            <p className="text-gray-300 text-sm leading-relaxed">
              Cộng đồng doanh nhân uy tín, cùng chia sẻ – kết nối – phát triển bền vững.
            </p>
            <ul className="space-y-2">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span style={{ color: '#c9a055' }}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded transition-all"
              style={{ background: '#c9a055', color: '#0a0f1e' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#a07830')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a055')}
            >
              Tham Gia Ngay
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* CENTER – 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {networkCards.map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-5 text-center"
                style={{ background: '#0d1528', border: '1px solid rgba(201,160,85,0.2)' }}
              >
                <div className="text-4xl mb-3">{card.emoji}</div>
                <div className="text-white font-bold text-sm mb-2">{card.title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>

          {/* RIGHT – Events sidebar */}
          <div
            className="rounded-xl p-5"
            style={{ background: '#0d1528', border: '1px solid rgba(201,160,85,0.2)' }}
          >
            <div className="font-bold text-white mb-4 text-sm uppercase tracking-wide" style={{ borderBottom: '2px solid #c9a055', paddingBottom: '8px' }}>
              Sự Kiện Nổi Bật
            </div>
            <div className="space-y-4">
              {events.map((ev, i) => (
                <div key={i} className="flex gap-3 items-start pb-4" style={{ borderBottom: i < events.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#c9a055' }} />
                  <div>
                    <div className="text-white text-sm font-medium">{ev.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{ev.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="block text-center mt-4 text-sm font-semibold py-2 rounded transition-all"
              style={{ border: '1px solid rgba(201,160,85,0.4)', color: '#c9a055' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,160,85,0.1)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
            >
              XEM TẤT CẢ SỰ KIỆN
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
