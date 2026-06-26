import ScrollReveal from './ScrollReveal'

interface FinalCTAProps {
  onRegisterClick: () => void
}

export default function FinalCTA({ onRegisterClick }: FinalCTAProps) {
  return (
    <section style={{ background: 'linear-gradient(135deg, #1A4BAD 0%, #0A2D6E 100%)', padding: '96px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-extrabold text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Sẵn sàng để doanh nghiệp bạn tăng trưởng thông minh hơn?
          </h2>
          <p className="text-slate-300 mb-10 leading-relaxed" style={{ fontSize: '1.1rem' }}>
            Hàng trăm doanh nghiệp SME đã bắt đầu hành trình tự động hóa cùng AutoBiz AI. Lượt tiếp theo là của bạn.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={onRegisterClick}
              className="font-semibold text-white rounded-xl transition-all"
              style={{
                background: '#EF4444',
                padding: '18px 40px',
                fontSize: '1.05rem',
                boxShadow: '0 4px 20px rgba(239,68,68,0.4)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#DC2626')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#EF4444')}
            >
              Dùng thử miễn phí 14 ngày – Không cần thẻ
            </button>

            <a href="#pricing" className="font-medium transition-colors hover:text-white" style={{ color: '#93C5FD' }}>
              Đặt lịch demo với chuyên gia →
            </a>

            <p className="text-sm text-slate-400 mt-2">
              Không cần thẻ tín dụng · Hủy bất kỳ lúc nào · Hỗ trợ tiếng Việt 24/7
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
