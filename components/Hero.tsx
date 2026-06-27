'use client'

const badges = [
  { icon: '🏆', label: 'Hàng Chính Hãng 100%' },
  { icon: '🔍', label: 'Kiểm Định Trực Tiếp' },
  { icon: '💬', label: 'Tư Vấn Tận Tâm' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #070c1a 0%, #0a1428 45%, #0d1f3c 100%)',
        paddingTop: '66px',
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#c9a055" d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #c9a055 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6 text-white">
          <div>
            <h1
              className="font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#c9a055', letterSpacing: '-0.01em' }}
            >
              TINH HOA HÀN QUỐC
            </h1>
            <h1
              className="font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#ffffff', letterSpacing: '-0.01em' }}
            >
              NÂNG TẦM SỨC KHỎE VIỆT
            </h1>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-lg" style={{ fontSize: '0.95rem' }}>
            Trần Cương Kangnam – 20 năm nhập khẩu và phân phối hàng Hàn Quốc chính hãng,
            đồng hành cùng hàng triệu gia đình Việt sống khỏe mỗi ngày.
          </p>

          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium"
                style={{ background: 'rgba(201,160,85,0.12)', border: '1px solid rgba(201,160,85,0.35)', color: '#e0bc7a' }}
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 font-bold text-[13px] uppercase tracking-widest px-7 py-3.5 rounded transition-all"
              style={{ background: '#c9a055', color: '#0a0f1e', letterSpacing: '0.08em' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#a07830')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a055')}
            >
              KHÁM PHÁ SẢN PHẨM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT – CEO photo */}
        <div className="relative flex justify-center items-end">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #c9a055 0%, transparent 65%)' }} />

          <div className="relative w-full max-w-md">
            <div className="relative mx-auto rounded-2xl overflow-hidden" style={{ height: '460px' }}>
              {/* Actual CEO photo */}
              <img
                src="/images/ceo.jpg"
                alt="Trần Cương Kangnam – Nhà sáng lập & CEO"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
              {/* Overlay gradient bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.8), transparent)' }} />

              {/* Tag top-right */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded text-xs font-bold" style={{ background: '#c9a055', color: '#0a0f1e' }}>
                🇰🇷 Korean Premium
              </div>

              {/* Name overlay bottom */}
              <div className="absolute bottom-4 left-4 right-4 px-3 py-2 rounded-lg text-xs" style={{ background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(201,160,85,0.3)' }}>
                <div className="font-bold text-sm" style={{ color: '#e0bc7a' }}>TRẦN CƯƠNG KANGNAM</div>
                <div className="text-gray-300 mt-0.5">Nhà Sáng Lập & CEO – Korean Premium</div>
              </div>
            </div>

            {/* Stat cards floating */}
            <div className="absolute -left-6 top-1/3 px-4 py-3 rounded-lg shadow-xl" style={{ background: '#0d1528', border: '1px solid rgba(201,160,85,0.3)' }}>
              <div className="text-xs text-gray-400 mb-1">Khách hàng tin tưởng</div>
              <div className="text-2xl font-black" style={{ color: '#c9a055' }}>1 Triệu+</div>
            </div>
            <div className="absolute -right-4 bottom-20 px-4 py-3 rounded-lg shadow-xl" style={{ background: '#0d1528', border: '1px solid rgba(201,160,85,0.3)' }}>
              <div className="text-xs text-gray-400 mb-1">Sản phẩm chính hãng</div>
              <div className="text-2xl font-black" style={{ color: '#c9a055' }}>1000+</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to top, #fff 0%, transparent 100%)' }} />
    </section>
  )
}
