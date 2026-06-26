'use client'
import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const metrics = [
  { number: 60, suffix: '%', label: 'Giảm thời gian vận hành thủ công', icon: 'ti-clock' },
  { number: 38, suffix: '%', label: 'Tăng tỷ lệ chuyển đổi khách hàng', icon: 'ti-trending-up' },
  { number: 3, suffix: 'x', label: 'Năng suất đội sales tăng gấp 3 lần', icon: 'ti-users' },
  { number: 500, suffix: '+', label: 'Doanh nghiệp SME đang sử dụng', icon: 'ti-building' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 2000
        const step = Math.ceil(target / (duration / 16))
        const timer = setInterval(() => {
          start = Math.min(start + step, target)
          el.textContent = start + suffix
          if (start >= target) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function ResultsMetrics() {
  return (
    <section
      id="results"
      style={{ background: 'linear-gradient(135deg, #061A45 0%, #1A4BAD 100%)', padding: '80px clamp(1rem, 5vw, 5rem)' }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#93C5FD' }}>
            Kết quả thực tế
          </p>
          <h2 className="text-center font-extrabold text-white mb-14" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Con số nói thay lời hứa
          </h2>
        </ScrollReveal>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(52,211,153,0.1)' }}>
                  <i className={`ti ${metric.icon} text-2xl`} style={{ color: '#34D399' }} />
                </div>
                <div className="font-extrabold text-white mb-2" style={{ fontSize: '2.4rem' }}>
                  <AnimatedCounter target={metric.number} suffix={metric.suffix} />
                </div>
                <p className="text-slate-400 text-sm leading-snug">{metric.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Case study banner */}
        <ScrollReveal>
          <div className="rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6"
            style={{ background: 'rgba(255,255,255,0.06)', borderLeft: '4px solid #34D399', border: '1px solid rgba(255,255,255,0.1)', borderLeftWidth: '4px', borderLeftColor: '#34D399' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(52,211,153,0.1)' }}>
              <i className="ti ti-quote text-2xl" style={{ color: '#34D399' }} />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium leading-relaxed mb-3" style={{ fontSize: '1.05rem' }}>
                "Chỉ sau 30 ngày dùng AutoBiz AI, đội sales của chúng tôi tiết kiệm được 20 giờ/tuần cho việc thủ công và tỷ lệ chốt deal tăng 42%."
              </p>
              <p className="text-slate-400 text-sm">
                <strong className="text-slate-300">Nguyễn Minh Tuấn</strong> – Giám đốc Kinh doanh, Công ty ABC
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
