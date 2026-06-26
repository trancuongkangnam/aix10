import ScrollReveal from './ScrollReveal'

const features = [
  {
    icon: 'ti-robot',
    title: 'AI Tự động hóa quy trình bán hàng',
    description: 'Tự động gửi đề xuất, nhắc nhở follow-up, phân loại lead theo mức độ tiềm năng. Đội sales tập trung chốt deal thay vì làm thủ công.',
    highlight: 'Tăng hiệu suất sales lên 3x',
    tag: 'Sales Automation',
  },
  {
    icon: 'ti-message-chatbot',
    title: 'Chatbot AI chăm sóc khách hàng 24/7',
    description: 'Phản hồi tức thì trên website, Zalo, Facebook. Xử lý 80% câu hỏi thường gặp, chuyển tiếp đúng người khi cần thiết.',
    highlight: 'Giảm 60% chi phí support',
    tag: 'Customer Service',
  },
  {
    icon: 'ti-chart-bar',
    title: 'Dashboard phân tích thông minh',
    description: 'Tổng hợp toàn bộ dữ liệu kinh doanh vào một màn hình. Dự báo doanh thu, cảnh báo sớm rủi ro, đề xuất hành động dựa trên AI.',
    highlight: 'Ra quyết định nhanh hơn 5x',
    tag: 'Analytics',
  },
  {
    icon: 'ti-mail-bolt',
    title: 'Tự động hóa email & nội dung marketing',
    description: 'Soạn thảo email, tin nhắn marketing cá nhân hóa theo từng phân khúc khách hàng. A/B testing tự động để tối ưu tỷ lệ mở.',
    highlight: 'Tỷ lệ chuyển đổi tăng 38%',
    tag: 'Marketing AI',
  },
  {
    icon: 'ti-clipboard-check',
    title: 'Quản trị tác vụ và quy trình nội bộ',
    description: 'Tự động giao việc, theo dõi tiến độ, nhắc nhở deadline. Xây dựng SOP số hóa – mọi nhân viên làm đúng quy trình ngay từ ngày đầu.',
    highlight: 'Tiết kiệm 40% thời gian quản lý',
    tag: 'Operations',
  },
  {
    icon: 'ti-plug-connected',
    title: 'Tích hợp sẵn với công cụ đang dùng',
    description: 'Kết nối trực tiếp với Google Workspace, Zalo, Facebook, Shopee, Lazada, các phần mềm kế toán. Không cần thay đổi hạ tầng hiện tại.',
    highlight: '50+ tích hợp sẵn có',
    tag: 'Integrations',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ background: '#061A45', padding: '80px clamp(1rem, 5vw, 5rem)' }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#93C5FD' }}>
            Tính năng
          </p>
          <h2 className="text-center font-extrabold text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Mọi thứ doanh nghiệp cần để vận hành tự động
          </h2>
          <p className="text-center text-slate-400 mb-14 max-w-2xl mx-auto">
            Từ bán hàng, chăm sóc khách đến quản trị nội bộ — tất cả trong một hệ sinh thái AI thống nhất.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-7 h-full flex flex-col group hover:border-blue-500/40 transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#1E3A8A' }}>
                    <i className={`ti ${feature.icon} text-xl text-blue-300`} />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: 'rgba(37,99,235,0.2)', color: '#93C5FD', border: '1px solid rgba(37,99,235,0.3)' }}>
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{feature.description}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold" style={{ color: '#34D399' }}>
                  <i className="ti ti-circle-check" />
                  {feature.highlight}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
