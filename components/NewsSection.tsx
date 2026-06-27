'use client'
import { useState } from 'react'

const articles = [
  {
    emoji: '🌿',
    date: '28/05/2025',
    title: 'Bí quyết chọn Hồng Sâm Hàn Quốc chuẩn chất lượng',
    excerpt: 'Hồng sâm là một trong những sản phẩm sức khỏe được người Việt ưa chuộng nhất từ Hàn Quốc...',
  },
  {
    emoji: '🐛',
    date: '15/05/2025',
    title: 'Lợi ích tuyệt vời của Đông Trùng Hạ Thảo với sức khỏe',
    excerpt: 'Đông trùng hạ thảo được mệnh danh là "vàng thảo dược" với vô số công dụng quý giá...',
  },
  {
    emoji: '💪',
    date: '10/05/2025',
    title: 'Xu hướng chăm sóc sức khỏe chủ động của người Việt',
    excerpt: 'Ngày càng nhiều người Việt chú trọng đến việc chăm sóc sức khỏe từ sớm và phòng ngừa bệnh tật...',
  },
]

export default function NewsSection() {
  const [email, setEmail] = useState('')

  return (
    <section id="news" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News column (2/3) */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase" style={{ color: '#0a0f1e' }}>
                  TIN TỨC & KIẾN THỨC
                </h2>
              </div>
              <a href="#" className="text-sm font-semibold transition-colors" style={{ color: '#c9a055' }}>
                XEM TẤT CẢ &gt;
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {articles.map((a, i) => (
                <a key={i} href="#" className="group block">
                  <div
                    className="rounded-lg overflow-hidden mb-3 flex items-center justify-center"
                    style={{ height: '160px', background: 'linear-gradient(135deg, #f8f8f0, #eee8d5)' }}
                  >
                    <span className="text-5xl">{a.emoji}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{a.date}</div>
                  <div className="font-semibold text-sm leading-snug mb-2 group-hover:text-yellow-600 transition-colors" style={{ color: '#1a1a1a' }}>
                    {a.title}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed line-clamp-2">{a.excerpt}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter (1/3) */}
          <div
            className="rounded-xl p-6 flex flex-col justify-between"
            style={{ background: '#0a0f1e' }}
          >
            <div>
              <div className="section-label mb-2">ĐĂNG KÝ NHẬN TIN</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Nhận ngay thông tin sản phẩm mới, chương trình ưu đãi và kiến thức chăm sóc sức khỏe từ Hàn Quốc.
              </p>
              <div className="flex gap-0 rounded overflow-hidden" style={{ border: '1px solid rgba(201,160,85,0.3)' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="flex-1 px-4 py-3 text-sm text-white bg-transparent outline-none placeholder-gray-500"
                />
                <button
                  className="px-4 flex items-center justify-center transition-all"
                  style={{ background: '#c9a055' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#a07830')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a055')}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
