'use client'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Trang Chủ', href: '#', active: true },
  { label: 'Giới Thiệu', href: '/gioi-thieu' },
  {
    label: 'Sản Phẩm', href: '#products',
    children: ['Sâm Hàn Quốc', 'Linh Chi', 'Đông Trùng Hạ Thảo', 'Mỹ Phẩm Hàn Quốc', 'Thực Phẩm Chức Năng', 'Trái Cây Nhập Khẩu', 'Hàng Gia Dụng'],
  },
  { label: 'Thương Hiệu', href: '#brand' },
  { label: 'Doanh Nhân Kết Nối', href: '#business', badge: 'MỚI' },
  { label: 'Tin Tức', href: '#news' },
  { label: 'Liên Hệ', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''}`}
      style={{ backgroundColor: '#0a0f1e' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[66px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="w-10 h-10 rounded flex items-center justify-center text-white font-black text-base"
            style={{ background: 'linear-gradient(135deg, #c9a055 0%, #a07830 100%)' }}
          >
            TC
          </div>
          <div className="hidden sm:block leading-none">
            <div className="text-white font-bold text-[13px] tracking-wide">TRẦN CƯƠNG KANGNAM</div>
            <div className="text-[9px] font-semibold tracking-[0.2em] mt-0.5" style={{ color: '#c9a055' }}>KOREAN PREMIUM</div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDrop(item.label)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors hover:text-yellow-400"
                style={{ color: item.active ? '#c9a055' : '#d1d5db' }}
              >
                {item.label}
                {item.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white" style={{ background: '#c9a055' }}>
                    {item.badge}
                  </span>
                )}
                {item.children && (
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {item.children && openDrop === item.label && (
                <div
                  className="absolute top-full left-0 mt-1 w-52 rounded shadow-2xl py-2 z-50"
                  style={{ backgroundColor: '#0d1528', border: '1px solid rgba(201,160,85,0.25)' }}
                >
                  {item.children.map((c) => (
                    <a
                      key={c}
                      href="#"
                      className="block px-4 py-2.5 text-[13px] text-gray-300 hover:text-white transition-colors"
                      style={{ borderLeft: '2px solid transparent' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = '#c9a055'; e.currentTarget.style.paddingLeft = '20px' }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.paddingLeft = '16px' }}
                    >
                      {c}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="hidden lg:flex p-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="hidden lg:flex p-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <a
            href="tel:0982848881"
            className="hidden lg:flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded transition-all"
            style={{ background: 'rgba(201,160,85,0.12)', color: '#c9a055', border: '1px solid rgba(201,160,85,0.35)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0982 848 881
          </a>
          <button className="lg:hidden p-2 text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{ backgroundColor: '#0d1528', borderTop: '1px solid rgba(201,160,85,0.2)' }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between px-5 py-3 text-sm text-gray-200 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              onClick={() => setMobileOpen(false)}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white" style={{ background: '#c9a055' }}>{item.badge}</span>
              )}
            </a>
          ))}
          <div className="px-5 py-4">
            <a href="tel:0982848881" className="btn-gold w-full justify-center">0982 848 881</a>
          </div>
        </div>
      )}
    </header>
  )
}
