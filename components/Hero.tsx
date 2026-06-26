'use client'
import { useEffect, useRef } from 'react'

interface HeroProps {
  onRegisterClick: () => void
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = dashboardRef.current
    if (!el) return
    let frame = 0
    const animate = () => {
      frame++
      const y = Math.sin(frame / 60) * 12
      el.style.transform = `translateY(${y}px)`
      requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section
      className="min-h-screen relative overflow-hidden dot-grid flex items-center"
      style={{ background: 'linear-gradient(135deg, #061A45 0%, #0A2D6E 55%, #1A4BAD 100%)', paddingTop: '68px' }}
    >
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-4 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(37,99,235,0.25)', border: '1px solid rgba(37,99,235,0.5)', color: '#93C5FD' }}>
            <i className="ti ti-sparkles" />
            Giải pháp AI dành riêng cho doanh nghiệp SME
          </div>

          {/* Headline */}
          <h1 className="font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
            Vận hành{' '}
            <span style={{ color: '#FCA5A5' }}>thông minh hơn.</span>
            <br />
            Tăng trưởng{' '}
            <span style={{ color: '#FCA5A5' }}>nhanh hơn.</span>
            <br />
            Với sức mạnh của{' '}
            <span style={{ color: '#FCA5A5' }}>AI.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-slate-300 leading-relaxed max-w-xl" style={{ fontSize: '1.1rem' }}>
            Tự động hóa quy trình vận hành – tiết kiệm{' '}
            <strong className="text-white">60% thời gian quản trị</strong> – tập trung
            hoàn toàn vào tăng doanh thu.
          </p>

          {/* Trust line */}
          <div className="flex items-center gap-2 text-sm" style={{ color: '#94A3B8' }}>
            <i className="ti ti-shield-check text-emerald-400 text-base" />
            Đã được hơn 500+ doanh nghiệp SME tin dùng tại Việt Nam
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onRegisterClick}
              className="flex items-center gap-2 font-semibold text-white rounded-lg transition-all"
              style={{ background: '#EF4444', padding: '16px 32px', fontSize: '1rem', boxShadow: '0 4px 14px rgba(239,68,68,0.4)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#DC2626')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#EF4444')}
            >
              Bắt đầu dùng thử – Miễn phí 14 ngày
              <i className="ti ti-arrow-right" />
            </button>
            <a href="#how-it-works" className="font-medium transition-colors hover:text-white" style={{ color: '#93C5FD' }}>
              Xem demo thực tế →
            </a>
          </div>

          {/* Social Proof Row */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {['TL', 'LH', 'PN', 'MN', 'AK'].map((initials, i) => (
                <div key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white"
                  style={{ background: ['#1A4BAD', '#2563EB', '#0D3580', '#1E3A8A', '#1A4BAD'][i] }}>
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 text-sm">{'★'.repeat(5)}</div>
              <div className="text-xs text-slate-400">4.9/5 • 500+ doanh nghiệp đang dùng mỗi ngày</div>
            </div>
          </div>
        </div>

        {/* Right – Dashboard Mockup */}
        <div ref={dashboardRef} className="transition-transform">
          <div className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: 'rgba(6,26,69,0.9)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)' }}>
            {/* Header bar */}
            <div className="flex items-center gap-2 px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-slate-400 font-mono">AutoBiz AI Dashboard</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400">Đang hoạt động</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5 space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Doanh thu hôm nay', value: '48.2M', up: true },
                  { label: 'Lead mới', value: '127', up: true },
                  { label: 'Tỷ lệ chuyển đổi', value: '38%', up: true },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-3 text-center">
                    <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                    <div className="font-bold text-lg text-white">{stat.value}</div>
                    <div className="text-xs text-emerald-400">▲ {stat.up ? '+12%' : '-2%'}</div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="glass-card rounded-xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-white">Doanh thu 7 ngày</span>
                  <span className="text-xs text-emerald-400 font-medium px-2 py-1 rounded-full bg-emerald-400/10">+23%</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 55, 45, 70, 60, 80, 95].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t transition-all"
                      style={{ height: `${h}%`, background: i === 6 ? '#2563EB' : 'rgba(37,99,235,0.35)' }} />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(d => (
                    <span key={d} className="text-xs text-slate-500 flex-1 text-center">{d}</span>
                  ))}
                </div>
              </div>

              {/* AI Activity notification */}
              <div className="glass-card rounded-xl p-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37,99,235,0.3)' }}>
                  <i className="ti ti-robot text-blue-400 text-base" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">AI đã xử lý 24 yêu cầu hôm nay</div>
                  <div className="text-xs text-slate-400 mt-0.5">Tiết kiệm ~3.2 giờ làm việc thủ công</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
