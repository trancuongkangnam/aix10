'use client'
import { useRef } from 'react'

const products = [
  { emoji: '🌿', name: 'Hồng Sâm 6 Năm Tuổi', tag: 'Bán chạy' },
  { emoji: '🍄', name: 'Nấm Linh Chi Đỏ', tag: 'Mới' },
  { emoji: '🐛', name: 'Đông Trùng Hạ Thảo', tag: 'Cao cấp' },
  { emoji: '🫙', name: 'Cao Hồng Sâm', tag: 'Chính hãng' },
  { emoji: '💆', name: 'Collagen Hàn Quốc', tag: 'Hot' },
  { emoji: '🍇', name: 'Nho Shine Muscat', tag: 'Tươi nhập' },
]

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-16 px-4" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="section-label">Sản Phẩm Nổi Bật</div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase" style={{ color: '#0a0f1e' }}>
              TINH HOA CHO SỨC KHỎE VÀ SẮC ĐẸP
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all"
              style={{ borderColor: '#c9a055', color: '#c9a055' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#c9a055'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#c9a055' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all"
              style={{ borderColor: '#c9a055', color: '#c9a055' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#c9a055'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#c9a055' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              className="product-card flex-shrink-0 rounded-xl overflow-hidden border bg-white"
              style={{ width: '200px', borderColor: '#eee' }}
            >
              {/* Image placeholder */}
              <div
                className="flex items-center justify-center"
                style={{ height: '180px', background: 'linear-gradient(135deg, #f8f8f0 0%, #f0ede0 100%)', position: 'relative' }}
              >
                <span className="text-6xl">{p.emoji}</span>
                {p.tag && (
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded text-white"
                    style={{ background: '#c9a055' }}
                  >
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="font-semibold text-sm mb-3 leading-snug" style={{ color: '#1a1a1a' }}>{p.name}</div>
                <a
                  href="#"
                  className="block text-center text-[11px] font-bold py-2 rounded transition-all"
                  style={{ border: '1px solid #c9a055', color: '#c9a055', letterSpacing: '0.05em' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#c9a055'; el.style.color = '#fff' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = '#c9a055' }}
                >
                  XEM CHI TIẾT
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
