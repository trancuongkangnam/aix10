'use client'
import { useState, useEffect } from 'react'

interface NavbarProps {
  onRegisterClick: () => void
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Tính năng', anchor: '#features' },
    { label: 'Cách hoạt động', anchor: '#how-it-works' },
    { label: 'Kết quả thực tế', anchor: '#results' },
    { label: 'Bảng giá', anchor: '#pricing' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,45,110,0.97)' : 'rgba(10,45,110,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        height: '68px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-white text-xl">
          <i className="ti ti-circuit-cell text-2xl text-blue-400" />
          AutoBiz AI
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.anchor}>
              <a
                href={link.anchor}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRegisterClick}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all"
            style={{ background: '#EF4444' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#DC2626')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#EF4444')}
          >
            Dùng thử miễn phí
          </button>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`ti ${menuOpen ? 'ti-x' : 'ti-menu-2'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[68px] left-0 right-0 py-4"
          style={{ background: 'rgba(6,26,69,0.98)', backdropFilter: 'blur(16px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.anchor}
              href={link.anchor}
              className="block px-6 py-3 text-slate-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-3">
            <button
              onClick={() => { setMenuOpen(false); onRegisterClick() }}
              className="w-full py-3 rounded-lg font-semibold text-white"
              style={{ background: '#EF4444' }}
            >
              Dùng thử miễn phí
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
