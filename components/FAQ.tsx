'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    q: 'Tôi không biết gì về công nghệ, có dùng được không?',
    a: 'Hoàn toàn được. AutoBiz AI được thiết kế cho người kinh doanh, không phải lập trình viên. Giao diện trực quan, hướng dẫn từng bước, đội ngũ hỗ trợ luôn sẵn sàng trong 24 giờ.',
  },
  {
    q: 'Mất bao lâu để triển khai và thấy kết quả?',
    a: 'Triển khai cơ bản hoàn tất trong 24–48 giờ. Hầu hết khách hàng thấy sự khác biệt rõ ràng trong tuần đầu tiên – đặc biệt ở phần tiết kiệm thời gian và tốc độ phản hồi khách hàng.',
  },
  {
    q: 'Dữ liệu doanh nghiệp tôi có được bảo mật không?',
    a: 'Có. Dữ liệu được mã hóa AES-256, lưu trữ trên server đặt tại Việt Nam, tuân thủ quy định bảo mật dữ liệu. Chúng tôi không bao giờ chia sẻ dữ liệu của bạn với bên thứ ba.',
  },
  {
    q: 'Tôi có thể kết nối với phần mềm đang dùng không?',
    a: 'Có. AutoBiz AI hỗ trợ 50+ tích hợp sẵn bao gồm Google Workspace, Zalo OA, Facebook, Shopee, Lazada, các phần mềm kế toán phổ biến tại Việt Nam và nhiều hơn nữa.',
  },
  {
    q: 'Nếu tôi muốn hủy, có mất phí không?',
    a: 'Không có phí hủy. Bạn có thể hủy bất kỳ lúc nào. Nếu hủy trong 30 ngày đầu, chúng tôi hoàn tiền 100% không điều kiện.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ background: '#0A2D6E', padding: '72px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#93C5FD' }}>
            Câu hỏi thường gặp
          </p>
          <h2 className="text-center font-extrabold text-white mb-12" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Giải đáp mọi thắc mắc
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div
                className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: openIndex === i ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <i className={`ti ti-chevron-down text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </div>
                {openIndex === i && (
                  <div className="px-6 pb-5 text-slate-300 leading-relaxed text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
