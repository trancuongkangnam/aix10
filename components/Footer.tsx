'use client'

const quickLinks = ['Trang Chủ', 'Giới Thiệu', 'Sản Phẩm', 'Thương Hiệu', 'Liên Hệ']

const productLinks = [
  'Sâm Hàn Quốc',
  'Linh Chi – Nấm Hàn Quốc',
  'Đông Trùng Hạ Thảo',
  'Thực Phẩm Chức Năng',
  'Mỹ Phẩm Hàn Quốc',
  'Trái Cây Nhập Khẩu',
  'Hàng Gia Dụng Hàn Quốc',
]

const qualityItems = [
  'Hàng Chính Hãng 100%',
  'Đổi Trả Dễ Dàng',
  'Tư Vấn Miễn Phí',
  'Giao Hàng Toàn Quốc',
]

const socials = [
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: '#',
    label: 'Facebook',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: '#',
    label: 'YouTube',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
      </svg>
    ),
    href: '#',
    label: 'TikTok',
  },
]

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#0a0f1e', borderTop: '1px solid rgba(201,160,85,0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded flex items-center justify-center text-white font-black text-base"
                style={{ background: 'linear-gradient(135deg, #c9a055 0%, #a07830 100%)' }}
              >
                TC
              </div>
              <div>
                <div className="text-white font-bold text-[12px]">TRẦN CƯƠNG KANGNAM</div>
                <div className="text-[9px] font-semibold tracking-[0.2em]" style={{ color: '#c9a055' }}>KOREAN PREMIUM</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Nhập khẩu & phân phối hàng Hàn Quốc chính hãng. Chuyên: Sâm – Nấm Linh Chi – Mỹ Phẩm – Bánh Kẹo – Hàng Gia Dụng Hàn Quốc.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,160,85,0.5)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide" style={{ borderBottom: '1px solid rgba(201,160,85,0.3)', paddingBottom: '8px' }}>
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: '#c9a055', fontSize: '10px' }}>▶</span>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide" style={{ borderBottom: '1px solid rgba(201,160,85,0.3)', paddingBottom: '8px' }}>
              Danh Mục Sản Phẩm
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                    <span style={{ color: '#c9a055', fontSize: '10px' }}>▶</span>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Quality */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide" style={{ borderBottom: '1px solid rgba(201,160,85,0.3)', paddingBottom: '8px' }}>
                Thông Tin Liên Hệ
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex gap-2">
                  <span style={{ color: '#c9a055' }}>📍</span>
                  Lô 90.2 Đường Trường Chinh, P. Tân Bình, TP. Hải Dương
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#c9a055' }}>📞</span>
                  <a href="tel:0966999888" className="hover:text-white">0982 848 881</a>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#c9a055' }}>✉️</span>
                  <a href="mailto:info@trancuongkangnam.com" className="hover:text-white break-all">info@trancuongkangnam.com</a>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#c9a055' }}>🌐</span>
                  <a href="https://trancuongkangnam.com" className="hover:text-white">www.trancuongkangnam.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wide">Cam Kết Chất Lượng</h4>
              <ul className="space-y-1.5">
                {qualityItems.map((q) => (
                  <li key={q} className="flex items-center gap-2 text-sm text-gray-400">
                    <span style={{ color: '#c9a055' }}>✓</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-sm text-gray-500"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span>© 2025 Trần Cường Kangnam. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
