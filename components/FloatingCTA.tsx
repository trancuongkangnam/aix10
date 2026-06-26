'use client'
import { useState, useEffect } from 'react'

interface FloatingCTAProps {
  onRegisterClick: () => void
}

export default function FloatingCTA({ onRegisterClick }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      const footer = document.querySelector('footer')
      const footerInView = footer ? footer.getBoundingClientRect().top < window.innerHeight : false
      setVisible(scrolled && !footerInView)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4"
      style={{ background: 'rgba(6,26,69,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <button
        onClick={onRegisterClick}
        className="w-full py-4 rounded-xl font-bold text-white text-base"
        style={{ background: '#EF4444', boxShadow: '0 4px 20px rgba(239,68,68,0.35)' }}
      >
        Dùng thử miễn phí 14 ngày
      </button>
    </div>
  )
}
