'use client'

const features = [
  { icon: '✅', text: 'Nhập khẩu chính ngạch – Minh bạch nguồn gốc' },
  { icon: '✅', text: 'Sản phẩm chất lượng – Kiểm định nghiêm ngặt' },
  { icon: '✅', text: 'Tư vấn tận tâm – Đồng hành dài lâu' },
  { icon: '✅', text: 'Gắn kết cộng đồng – Phát triển bền vững' },
]

const infoBadges = [
  { icon: '🏪', text: 'Hệ Thống Phân Phối Toàn Quốc' },
  { icon: '❄️', text: 'Kho Lạnh Đạt Chuẩn GSP' },
  { icon: '🚚', text: 'Giao Hàng Nhanh Toàn Quốc' },
  { icon: '🎁', text: 'Chính Sách Hậu Mãi Uy Tín' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT – Video placeholder */}
          <div className="relative">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #1a2744 100%)', paddingBottom: '75%' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Play button */}
                <button
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110"
                  style={{ background: 'rgba(201,160,85,0.9)', boxShadow: '0 0 0 12px rgba(201,160,85,0.15)' }}
                >
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="text-white text-sm font-medium opacity-80">[ Video giới thiệu ]</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="font-bold text-lg" style={{ color: '#0a0f1e' }}>TÂM HUYẾT</div>
              <div className="text-sm text-gray-500">VÌ SỨC KHỎE NGƯỜI VIỆT</div>
              <div className="text-xs font-medium mt-1" style={{ color: '#c9a055' }}>— Trần Cường Kangnam</div>
            </div>
          </div>

          {/* CENTER – Mission text */}
          <div>
            <div className="section-label">Về Trần Cường Kangnam</div>
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
                  <span style={{ color: '#c9a055', fontWeight: 700 }}>{f.icon}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#about" className="btn-outline-gold text-sm">
                Tìm Hiểu Thêm
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT – Building image + badges */}
          <div className="space-y-4">
            <div
              className="rounded-xl overflow-hidden flex items-center justify-center"
              style={{ height: '200px', background: 'linear-gradient(135deg, #0a0f1e 0%, #1a2744 100%)' }}
            >
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🏢</div>
                <div className="font-bold text-lg">KANGNAM MART</div>
                <div className="text-[11px] tracking-widest opacity-70">KOREAN PREMIUM</div>
                <div className="text-xs text-gray-400 mt-2">[ Ảnh trụ sở / kho hàng ]</div>
              </div>
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
