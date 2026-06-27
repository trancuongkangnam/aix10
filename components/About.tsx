'use client'
import { useState } from 'react'

const features = [
  { text: 'Nhập khẩu chính ngạch – Minh bạch nguồn gốc' },
  { text: 'Sản phẩm chất lượng – Kiểm định nghiêm ngặt' },
  { text: 'Tư vấn tận tâm – Đồng hành dài lâu' },
  { text: 'Gắn kết cộng đồng – Phát triển bền vững' },
]

const infoBadges = [
  { icon: '🏪', text: 'Hệ Thống Phân Phối Toàn Quốc' },
  { icon: '❄️', text: 'Kho Lạnh Đạt Chuẩn GSP' },
  { icon: '🚚', text: 'Giao Hàng Nhanh Toàn Quốc' },
  { icon: '🎁', text: 'Chính Sách Hậu Mãi Uy Tín' },
]

const YT_ID = 'w4QDb3AubnA'

export default function About() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT – YouTube video */}
          <div>
            <div className="relative rounded-xl overflow-hidden" style={{ paddingBottom: '75%', background: '#000' }}>
              {!playing ? (
                <>
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${YT_ID}/maxresdefault.jpg`}
                    alt="Video giới thiệu Kangnam Mart"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      style={{ background: 'rgba(201,160,85,0.95)', boxShadow: '0 0 0 12px rgba(201,160,85,0.2)' }}
                    >
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-medium">Xem video giới thiệu</span>
                  </button>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1`}
                  title="Kangnam Mart – Video giới thiệu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              )}
            </div>
            <div className="mt-4 text-center">
              <div className="font-bold text-lg" style={{ color: '#0a0f1e' }}>TÂM HUYẾT</div>
              <div className="text-sm text-gray-500">VÌ SỨC KHỎE NGƯỜI VIỆT</div>
              <div className="text-xs font-medium mt-1" style={{ color: '#c9a055' }}>— Trần Cương Kangnam</div>
            </div>
          </div>

          {/* CENTER – Mission */}
          <div>
            <div className="section-label">Về Trần Cương Kangnam</div>
            <h2 className="text-2xl font-black uppercase mb-4" style={{ color: '#0a0f1e' }}>
              SỨ MỆNH CỦA CHÚNG TÔI
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Mang tinh hoa hàng hóa Hàn Quốc chất lượng cao đến với người Việt,
              góp phần nâng tầm sức khỏe và chất lượng sống cho cộng đồng.
            </p>
            <ul className="space-y-2.5">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span style={{ color: '#c9a055', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#contact" className="btn-outline-gold text-sm">
                Liên Hệ Ngay
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT – Store photo + badges */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden" style={{ height: '200px' }}>
              <img
                src="/images/store.jpg"
                alt="Kang Nam Mart – Cơ sở kinh doanh"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {infoBadges.map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-3 rounded-lg text-xs font-semibold"
                  style={{ background: '#f9f9f9', border: '1px solid #eee', color: '#333' }}
                >
                  <span className="text-2xl mb-1">{b.icon}</span>
                  <span className="leading-snug">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
