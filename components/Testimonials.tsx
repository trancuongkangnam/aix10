import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    stars: 5,
    quote: 'AutoBiz AI giúp tôi không cần ngồi review báo cáo mỗi sáng nữa. Mọi thứ đều được AI tóm tắt và cảnh báo đúng lúc.',
    author: 'Trần Thị Lan',
    role: 'CEO – Công ty Thương mại Phú Gia',
    industry: 'Thương mại',
    initials: 'TL',
    color: '#1A4BAD',
  },
  {
    stars: 5,
    quote: 'Trước đây phải mất 2 nhân sự chỉ để xử lý email và phân loại lead. Giờ AI làm hết, 2 người đó tập trung vào việc chốt deal.',
    author: 'Lê Văn Hùng',
    role: 'Giám đốc Sales – F&B Solutions',
    industry: 'F&B',
    initials: 'LH',
    color: '#0D3580',
  },
  {
    stars: 5,
    quote: 'Tích hợp với Zalo OA và website cực kỳ mượt. Chatbot AI phản hồi khách nhanh hơn nhân viên thật và không bao giờ làm mất lịch sự.',
    author: 'Phạm Hồng Nhung',
    role: 'Chủ – Chuỗi Spa Wellness',
    industry: 'Dịch vụ',
    initials: 'PN',
    color: '#1E3A8A',
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: '#0D3580', padding: '72px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#FCA5A5' }}>
            Khách hàng nói gì
          </p>
          <h2 className="text-center font-extrabold text-white mb-12" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Được tin dùng bởi các chủ doanh nghiệp thực tế
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="rounded-2xl p-7 h-full flex flex-col"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="text-slate-200 leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.author}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
