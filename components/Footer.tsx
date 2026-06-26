export default function Footer() {
  const columns = [
    {
      heading: 'Sản phẩm',
      links: ['Tính năng', 'Bảng giá', 'Tích hợp', 'Cập nhật mới'],
    },
    {
      heading: 'Doanh nghiệp',
      links: ['Về chúng tôi', 'Blog & Kiến thức', 'Case Study', 'Liên hệ'],
    },
    {
      heading: 'Hỗ trợ',
      links: ['Trung tâm trợ giúp', 'Tài liệu hướng dẫn', 'Chính sách bảo mật', 'Điều khoản sử dụng'],
    },
  ]

  return (
    <footer style={{ background: '#03102E', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-white text-xl mb-3">
              <i className="ti ti-circuit-cell text-2xl text-blue-400" />
              AutoBiz AI
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Nền tảng AI vận hành doanh nghiệp thông minh dành cho SME Việt Nam.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'ti-brand-facebook', href: '#' },
                { icon: 'ti-brand-youtube', href: '#' },
                { icon: 'ti-brand-linkedin', href: '#' },
              ].map((s) => (
                <a key={s.icon} href={s.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className={`ti ${s.icon} text-slate-300`} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-white mb-4 text-sm">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-slate-500 text-sm">© 2025 AutoBiz AI. Bảo lưu mọi quyền.</p>
          <div className="flex gap-3 flex-wrap justify-center">
            {['Bảo mật SSL', 'Server tại Việt Nam', 'PDPA Compliant'].map((badge) => (
              <span key={badge}
                className="text-xs px-3 py-1 rounded-full flex items-center gap-1.5"
                style={{ background: 'rgba(52,211,153,0.08)', color: '#34D399', border: '1px solid rgba(52,211,153,0.2)' }}>
                <i className="ti ti-shield-check text-xs" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
