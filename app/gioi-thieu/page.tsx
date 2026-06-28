import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Trần Cương Kangnam Là Ai? CEO Kangnam Mart | Chuyên Gia Hàng Hàn Quốc',
  description:
    'Trần Cương Kangnam là CEO Kangnam Mart với hơn 20 năm kinh nghiệm nhập khẩu và phân phối hàng Hàn Quốc chính hãng, chia sẻ về sức khỏe, nhân sâm Hàn Quốc, AI kinh doanh và kết nối doanh nhân.',
  keywords: [
    'Trần Cương Kangnam',
    'Kangnam Mart',
    'CEO Kangnam Mart',
    'hàng Hàn Quốc chính hãng',
    'nhân sâm Hàn Quốc',
    'linh chi Hàn Quốc',
    'đông trùng hạ thảo Hàn Quốc',
  ],
  openGraph: {
    title: 'Trần Cương Kangnam Là Ai? CEO Kangnam Mart | Chuyên Gia Hàng Hàn Quốc',
    description:
      'Hơn 20 năm nhập khẩu và phân phối hàng Hàn Quốc chính hãng. Tư vấn sức khỏe, kết nối doanh nhân, ứng dụng AI kinh doanh.',
    url: 'https://trancuongkangnam.com/gioi-thieu',
    siteName: 'Trần Cương Kangnam',
    images: [
      {
        url: 'https://trancuongkangnam.com/images/ceo.jpg',
        width: 1200,
        height: 630,
        alt: 'Trần Cương Kangnam – CEO Kangnam Mart',
      },
    ],
    type: 'profile',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trần Cương Kangnam – CEO Kangnam Mart',
    description: 'Hơn 20 năm kinh nghiệm nhập khẩu hàng Hàn Quốc chính hãng.',
    images: ['https://trancuongkangnam.com/images/ceo.jpg'],
  },
  alternates: { canonical: 'https://trancuongkangnam.com/gioi-thieu' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Trần Cương Kangnam là ai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trần Cương Kangnam là doanh nhân, CEO và nhà sáng lập Kangnam Mart – đơn vị chuyên nhập khẩu và phân phối hàng Hàn Quốc chính hãng tại Việt Nam với hơn 20 năm kinh nghiệm trong ngành.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kangnam Mart kinh doanh lĩnh vực gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kangnam Mart chuyên nhập khẩu và phân phối các sản phẩm Hàn Quốc chính hãng bao gồm: nhân sâm Hàn Quốc, linh chi, đông trùng hạ thảo, thực phẩm chức năng, mỹ phẩm Hàn Quốc, trái cây nhập khẩu và hàng gia dụng Hàn Quốc.',
      },
    },
    {
      '@type': 'Question',
      name: 'Trần Cương Kangnam có bao nhiêu năm kinh nghiệm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trần Cương Kangnam có hơn 20 năm kinh nghiệm trong lĩnh vực nhập khẩu, phân phối và kinh doanh hàng hóa Hàn Quốc chính hãng tại thị trường Việt Nam.',
      },
    },
    {
      '@type': 'Question',
      name: 'Điểm khác biệt của Trần Cương Kangnam là gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Điểm khác biệt của Trần Cương Kangnam là sự kết hợp giữa kinh nghiệm thực chiến 20+ năm trong ngành hàng Hàn Quốc, cam kết 100% hàng chính hãng, tư vấn tận tâm và ứng dụng AI vào kinh doanh hiện đại. Ông không chỉ là nhà phân phối mà còn là người chia sẻ kiến thức và kết nối cộng đồng doanh nhân.',
      },
    },
    {
      '@type': 'Question',
      name: 'Website trancuongkangnam.com chia sẻ nội dung gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website trancuongkangnam.com chia sẻ kiến thức về sức khỏe, nhân sâm Hàn Quốc, linh chi, đông trùng hạ thảo, mỹ phẩm Hàn Quốc, AI kinh doanh, marketing, kết nối doanh nhân và giới thiệu các sản phẩm Hàn Quốc chính hãng từ Kangnam Mart.',
      },
    },
  ],
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Trần Cương Kangnam',
  jobTitle: 'CEO & Nhà Sáng Lập',
  worksFor: { '@type': 'Organization', name: 'Kangnam Mart', url: 'https://trancuongkangnam.com' },
  url: 'https://trancuongkangnam.com/gioi-thieu',
  image: 'https://trancuongkangnam.com/images/ceo.jpg',
  sameAs: [
    'https://www.facebook.com/trancuongkangnam/',
    'https://www.youtube.com/@trancuong-kangnam',
    'https://www.tiktok.com/@trancuongkangnam',
  ],
  knowsAbout: [
    'Nhân sâm Hàn Quốc',
    'Linh chi',
    'Đông trùng hạ thảo',
    'Hàng Hàn Quốc chính hãng',
    'AI kinh doanh',
    'Marketing số',
    'Kết nối doanh nhân',
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang Chủ', item: 'https://trancuongkangnam.com' },
    { '@type': 'ListItem', position: 2, name: 'Giới Thiệu', item: 'https://trancuongkangnam.com/gioi-thieu' },
  ],
}

const faqs = [
  {
    q: 'Trần Cương Kangnam là ai?',
    a: 'Trần Cương Kangnam là doanh nhân, CEO và nhà sáng lập Kangnam Mart – đơn vị chuyên nhập khẩu và phân phối hàng Hàn Quốc chính hãng tại Việt Nam với hơn 20 năm kinh nghiệm trong ngành.',
  },
  {
    q: 'Kangnam Mart kinh doanh lĩnh vực gì?',
    a: 'Kangnam Mart chuyên nhập khẩu và phân phối các sản phẩm Hàn Quốc chính hãng: nhân sâm, linh chi, đông trùng hạ thảo, thực phẩm chức năng, mỹ phẩm Hàn Quốc, trái cây nhập khẩu và hàng gia dụng Hàn Quốc.',
  },
  {
    q: 'Trần Cương Kangnam có bao nhiêu năm kinh nghiệm?',
    a: 'Hơn 20 năm kinh nghiệm trong lĩnh vực nhập khẩu, phân phối và kinh doanh hàng hóa Hàn Quốc chính hãng tại thị trường Việt Nam.',
  },
  {
    q: 'Điểm khác biệt của Trần Cương Kangnam là gì?',
    a: 'Sự kết hợp giữa kinh nghiệm thực chiến 20+ năm, cam kết 100% hàng chính hãng, tư vấn tận tâm và ứng dụng AI vào kinh doanh hiện đại. Không chỉ là nhà phân phối mà còn là người chia sẻ kiến thức và kết nối cộng đồng doanh nhân.',
  },
  {
    q: 'Website trancuongkangnam.com chia sẻ nội dung gì?',
    a: 'Website chia sẻ kiến thức về sức khỏe, nhân sâm Hàn Quốc, linh chi, đông trùng hạ thảo, mỹ phẩm, AI kinh doanh, marketing, kết nối doanh nhân và giới thiệu sản phẩm Hàn Quốc chính hãng từ Kangnam Mart.',
  },
]

export default function GioiThieuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section
          style={{
            background: 'linear-gradient(135deg, #070c1a 0%, #0a1428 50%, #0d1f3c 100%)',
            paddingTop: '66px',
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm" style={{ color: '#9ca3af' }}>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Trang Chủ
                  </a>
                </li>
                <li style={{ color: '#c9a055' }}>›</li>
                <li style={{ color: '#c9a055' }} aria-current="page">
                  Giới Thiệu
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold mb-5"
                  style={{
                    background: 'rgba(201,160,85,0.15)',
                    border: '1px solid rgba(201,160,85,0.4)',
                    color: '#c9a055',
                  }}
                >
                  🇰🇷 KOREAN PREMIUM · CEO &amp; NHÀ SÁNG LẬP
                </div>
                <h1
                  className="font-black text-white leading-tight mb-5"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', lineHeight: 1.25 }}
                >
                  Trần Cương Kangnam Là Ai?
                  <span style={{ color: '#c9a055', display: 'block', marginTop: '4px' }}>
                    Hành Trình 20 Năm Kết Nối Tinh Hoa Hàn Quốc Với Người Việt
                  </span>
                </h1>
                <p className="text-gray-300 leading-relaxed mb-7" style={{ fontSize: '1rem' }}>
                  Từ một người con đất Việt yêu thích văn hóa Hàn Quốc, Trần Cương Kangnam đã xây dựng
                  hành trình hơn 20 năm – mang tinh hoa sức khỏe xứ Kim Chi đến hàng triệu gia đình Việt Nam.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['20+ Năm Kinh Nghiệm', '1.000+ Sản Phẩm', '5.000+ Khách Hàng'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded text-xs font-semibold"
                      style={{
                        background: 'rgba(201,160,85,0.1)',
                        border: '1px solid rgba(201,160,85,0.3)',
                        color: '#e0bc7a',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right – CEO photo */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ width: '300px', height: '380px' }}
                >
                  <img
                    src="/images/ceo.jpg"
                    alt="Trần Cương Kangnam – CEO Kangnam Mart"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, transparent 55%)' }}
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded text-xs font-bold" style={{ background: '#c9a055', color: '#0a0f1e' }}>
                    🇰🇷 Korean Premium
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-bold text-sm" style={{ color: '#e0bc7a' }}>TRẦN CƯƠNG KANGNAM</div>
                    <div className="text-xs text-gray-300 mt-0.5">CEO &amp; Nhà Sáng Lập – Kangnam Mart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE ── */}
        <article>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-14">

            {/* 1 – Là ai */}
            <section>
              <h2
                className="text-xl font-black uppercase mb-5"
                style={{ color: '#0a0f1e', borderLeft: '4px solid #c9a055', paddingLeft: '14px' }}
              >
                1. Trần Cương Kangnam Là Ai?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Trần Cương Kangnam</strong> là doanh nhân, CEO và nhà sáng lập{' '}
                <strong>Kangnam Mart</strong> – thương hiệu phân phối hàng Hàn Quốc chính hãng uy tín
                tại Việt Nam. Với hơn 20 năm kinh nghiệm sâu sắc trong ngành nhập khẩu và thương mại,
                ông được cộng đồng biết đến như một chuyên gia hàng đầu về sản phẩm Hàn Quốc chất lượng cao.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Không chỉ đơn thuần là một nhà kinh doanh, Trần Cương Kangnam còn là người truyền cảm hứng,
                chia sẻ kiến thức về sức khỏe, nhân sâm Hàn Quốc, AI kinh doanh và kết nối cộng đồng doanh
                nhân Việt. Ông đặt trọn tâm huyết vào sứ mệnh giúp người Việt tiếp cận hàng Hàn Quốc
                thật – chính hãng – đúng giá.
              </p>
              <blockquote
                className="rounded-xl p-6 text-center"
                style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1f3c 100%)', border: '1px solid rgba(201,160,85,0.25)' }}
              >
                <p className="italic" style={{ color: '#e0bc7a', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  "Sứ mệnh của tôi là mang tinh hoa Hàn Quốc đến gần hơn với người Việt – để mỗi gia đình
                  đều có thể sống khỏe, sống đẹp và sống trọn vẹn."
                </p>
                <cite className="not-italic text-gray-400 text-sm mt-2 block">— Trần Cương Kangnam</cite>
              </blockquote>
            </section>

            {/* 2 – Hành trình */}
            <section>
              <h2
                className="text-xl font-black uppercase mb-5"
                style={{ color: '#0a0f1e', borderLeft: '4px solid #c9a055', paddingLeft: '14px' }}
              >
                2. Hành Trình Hơn 20 Năm Nhập Khẩu và Phân Phối Hàng Hàn Quốc
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Khởi đầu từ những chuyến hàng nhỏ lẻ với niềm đam mê sâu sắc với văn hóa và sản phẩm
                xứ Kim Chi, Trần Cương Kangnam đã từng bước xây dựng Kangnam Mart thành thương hiệu phân
                phối hàng Hàn Quốc đáng tin cậy bậc nhất tại Việt Nam.
              </p>
              <div className="space-y-3">
                {[
                  {
                    phase: 'Giai Đoạn Đầu',
                    title: 'Tìm Hiểu & Khám Phá',
                    desc: 'Tiếp cận thị trường hàng Hàn Quốc, xây dựng mối quan hệ với các nhà sản xuất uy tín tại Hàn Quốc, học hỏi quy trình nhập khẩu chính ngạch.',
                  },
                  {
                    phase: 'Phát Triển',
                    title: 'Xây Dựng Hệ Thống',
                    desc: 'Mở rộng danh mục sản phẩm, xây dựng kho lưu trữ đạt chuẩn GSP, phát triển mạng lưới phân phối toàn quốc và đội ngũ tư vấn chuyên nghiệp.',
                  },
                  {
                    phase: 'Bứt Phá',
                    title: 'Ra Mắt Kangnam Mart',
                    desc: 'Thành lập Kangnam Mart với định hướng chuyên nghiệp hóa toàn bộ quy trình từ nhập khẩu, kiểm định đến phân phối và hậu mãi.',
                  },
                  {
                    phase: 'Hiện Tại',
                    title: 'Korean Premium Leader',
                    desc: 'Phục vụ hơn 5.000 khách hàng thân thiết, 1.000+ sản phẩm chính hãng, ứng dụng AI vào kinh doanh và không ngừng mở rộng hệ sinh thái Kangnam.',
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 rounded-lg"
                    style={{ background: '#f9fafb', borderLeft: '3px solid #c9a055' }}
                  >
                    <div
                      className="flex-shrink-0 text-xs font-black uppercase leading-tight w-24"
                      style={{ color: '#c9a055' }}
                    >
                      {m.phase}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1" style={{ color: '#0a0f1e' }}>{m.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3 – Vì sao chọn HQ */}
            <section>
              <h2
                className="text-xl font-black uppercase mb-5"
                style={{ color: '#0a0f1e', borderLeft: '4px solid #c9a055', paddingLeft: '14px' }}
              >
                3. Vì Sao Chọn Hàng Hàn Quốc?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Theo Trần Cương Kangnam, hàng Hàn Quốc không chỉ là xu hướng – mà là sự lựa chọn thông minh
                dựa trên nền tảng khoa học, công nghệ và văn hóa chăm sóc sức khỏe hàng nghìn năm của người Hàn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: '🔬',
                    title: 'Công Nghệ Tiên Tiến',
                    desc: 'Hàn Quốc đứng top 5 thế giới về nghiên cứu khoa học sức khỏe và dược phẩm thiên nhiên.',
                  },
                  {
                    icon: '🌿',
                    title: 'Nguyên Liệu Tự Nhiên',
                    desc: 'Nhân sâm, linh chi, đông trùng hạ thảo được nuôi trồng và chế biến theo tiêu chuẩn nghiêm ngặt.',
                  },
                  {
                    icon: '✅',
                    title: 'Kiểm Định Chặt Chẽ',
                    desc: 'Mỗi sản phẩm đạt chứng nhận KFDA – Cơ quan Quản lý Thực phẩm và Dược phẩm Hàn Quốc.',
                  },
                  {
                    icon: '💎',
                    title: 'Giá Trị Bền Vững',
                    desc: 'Người Hàn Quốc chi tiêu cho sức khỏe như một khoản đầu tư – triết lý ấy lan tỏa qua Kangnam Mart.',
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl"
                    style={{ background: '#fff', border: '1px solid #e5e7eb' }}
                  >
                    <div className="text-3xl mb-3">{c.icon}</div>
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#0a0f1e' }}>{c.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 – Sứ mệnh – dark block */}
            <section
              className="rounded-2xl p-8 sm:p-10"
              style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1f3c 100%)', border: '1px solid rgba(201,160,85,0.2)' }}
            >
              <h2 className="text-xl font-black uppercase mb-5 text-white">
                4. Sứ Mệnh: Mang Tinh Hoa Hàn Quốc Đến Gần Hơn Với Người Việt
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#d1d5db' }}>
                Trần Cương Kangnam xác định rõ sứ mệnh cốt lõi:{' '}
                <strong style={{ color: '#e0bc7a' }}>
                  giúp người Việt tiếp cận hàng Hàn Quốc chính hãng với giá cả minh bạch, chất lượng
                  được kiểm định và dịch vụ tư vấn tận tâm.
                </strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: '🎯', title: 'Chính Hãng 100%', desc: 'Mỗi sản phẩm có nguồn gốc rõ ràng, chứng nhận đầy đủ từ nhà sản xuất Hàn Quốc.' },
                  { icon: '💡', title: 'Tư Vấn Tận Tâm', desc: 'Đội ngũ am hiểu sản phẩm, hỗ trợ khách hàng chọn đúng sản phẩm phù hợp nhu cầu.' },
                  { icon: '🌏', title: 'Kết Nối Doanh Nhân', desc: 'Xây dựng cộng đồng kinh doanh, chia sẻ tri thức và tạo cơ hội hợp tác bền vững.' },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="text-center p-5 rounded-xl"
                    style={{ background: 'rgba(201,160,85,0.07)', border: '1px solid rgba(201,160,85,0.2)' }}
                  >
                    <div className="text-3xl mb-2">{m.icon}</div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: '#e0bc7a' }}>{m.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 – Lĩnh vực */}
            <section>
              <h2
                className="text-xl font-black uppercase mb-5"
                style={{ color: '#0a0f1e', borderLeft: '4px solid #c9a055', paddingLeft: '14px' }}
              >
                5. Các Lĩnh Vực Trần Cương Kangnam Chia Sẻ
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ngoài vai trò doanh nhân, Trần Cương Kangnam còn tích cực chia sẻ kiến thức và kinh
                nghiệm qua các nền tảng số – Facebook, YouTube, TikTok – giúp hàng triệu người có thêm
                góc nhìn thực tế về hàng Hàn Quốc và kinh doanh thời 4.0.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: '🌿', label: 'Sức Khỏe & Dinh Dưỡng', desc: 'Kiến thức dưỡng sinh, chăm sóc sức khỏe từ thiên nhiên Hàn Quốc' },
                  { icon: '🫚', label: 'Nhân Sâm Hàn Quốc', desc: 'Phân biệt sâm thật – giả, cách dùng đúng, tác dụng thực tế' },
                  { icon: '🍄', label: 'Linh Chi & Đông Trùng', desc: 'Ứng dụng linh chi và đông trùng hạ thảo trong cuộc sống hiện đại' },
                  { icon: '✨', label: 'Mỹ Phẩm Hàn Quốc', desc: 'Review & tư vấn các dòng mỹ phẩm Hàn Quốc chính hãng' },
                  { icon: '🤖', label: 'AI Kinh Doanh', desc: 'Ứng dụng trí tuệ nhân tạo vào bán hàng, marketing và quản trị' },
                  { icon: '🤝', label: 'Kết Nối Doanh Nhân', desc: 'Cộng đồng doanh nhân chia sẻ, hợp tác và phát triển cùng nhau' },
                ].map((t, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl"
                    style={{ background: '#f9fafb', border: '1px solid #e5e7eb' }}
                  >
                    <div className="text-2xl mb-2">{t.icon}</div>
                    <h3 className="font-bold text-xs mb-1" style={{ color: '#0a0f1e' }}>{t.label}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6 – Giá trị cốt lõi */}
            <section>
              <h2
                className="text-xl font-black uppercase mb-5"
                style={{ color: '#0a0f1e', borderLeft: '4px solid #c9a055', paddingLeft: '14px' }}
              >
                6. Giá Trị Cốt Lõi
              </h2>
              <div className="space-y-3">
                {[
                  {
                    v: 'Uy Tín',
                    d: 'Mọi cam kết đều được thực hiện đúng hạn, đúng chất lượng. Không quảng cáo sai sự thật, không bán hàng giả hay kém chất lượng.',
                  },
                  {
                    v: 'Chính Hãng',
                    d: 'Chỉ nhập khẩu từ các nhà sản xuất được chứng nhận tại Hàn Quốc. Có đầy đủ hóa đơn, chứng từ và giấy phép nhập khẩu hợp lệ.',
                  },
                  {
                    v: 'Chất Lượng',
                    d: 'Tiêu chuẩn chất lượng không bao giờ được thỏa hiệp. Mỗi lô hàng đều qua kiểm tra nghiêm ngặt trước khi đến tay khách hàng.',
                  },
                  {
                    v: 'Học Hỏi',
                    d: 'Liên tục cập nhật kiến thức mới – từ xu hướng sức khỏe, công nghệ đến AI và marketing số – để phục vụ khách hàng tốt hơn mỗi ngày.',
                  },
                  {
                    v: 'Chia Sẻ',
                    d: 'Tin rằng tri thức có giá trị nhất khi được chia sẻ. Luôn sẵn sàng chia sẻ kinh nghiệm với cộng đồng và đối tác.',
                  },
                ].map((g, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg"
                    style={{ background: '#fff', border: '1px solid #e5e7eb' }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: '#c9a055', color: '#fff' }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-0.5" style={{ color: '#c9a055' }}>{g.v}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{g.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7 – Tầm nhìn */}
            <section>
              <h2
                className="text-xl font-black uppercase mb-5"
                style={{ color: '#0a0f1e', borderLeft: '4px solid #c9a055', paddingLeft: '14px' }}
              >
                7. Tầm Nhìn Phát Triển Thương Hiệu Cá Nhân
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Trần Cương Kangnam đặt tầm nhìn dài hạn: trở thành{' '}
                <strong>người có thẩm quyền hàng đầu về hàng Hàn Quốc chính hãng tại Việt Nam</strong>{' '}
                và là cầu nối tin cậy giữa doanh nghiệp Hàn Quốc với thị trường tiêu dùng Việt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5">
                Trong kỷ nguyên số, ông đặc biệt chú trọng ứng dụng{' '}
                <strong>AI vào kinh doanh</strong> – từ phân tích xu hướng thị trường, tối ưu
                marketing đến cá nhân hóa trải nghiệm khách hàng. Đây là hướng đi mà Trần Cương
                Kangnam tin rằng sẽ tạo bước đột phá lớn cho Kangnam Mart trong những năm tới.
              </p>
              <div
                className="p-5 rounded-xl"
                style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  🎯{' '}
                  <strong>Mục tiêu 2025–2030:</strong> Mở rộng hệ thống phân phối ra 30+ tỉnh thành,
                  xây dựng nền tảng thương mại điện tử đa kênh, đào tạo 1.000+ đại lý Kangnam trên
                  toàn quốc và ứng dụng AI vào toàn bộ chuỗi cung ứng.
                </p>
              </div>
            </section>

            {/* 8 – Lời nhắn – dark block */}
            <section
              className="rounded-2xl p-8 sm:p-10"
              style={{ background: 'linear-gradient(135deg, #070c1a 0%, #0d1f3c 100%)', border: '1px solid rgba(201,160,85,0.2)' }}
            >
              <h2 className="text-xl font-black uppercase mb-6 text-white">
                8. Lời Nhắn Gửi Đến Khách Hàng, Đối Tác và Cộng Đồng Doanh Nhân
              </h2>
              <div className="space-y-4">
                {[
                  {
                    to: 'Gửi Khách Hàng',
                    msg: '"Cảm ơn bạn đã tin tưởng lựa chọn Kangnam Mart. Mỗi sản phẩm tôi mang về đều được lựa chọn kỹ lưỡng với một mong muốn duy nhất: giúp gia đình bạn sống khỏe hơn, hạnh phúc hơn. Tôi cam kết sẽ không bao giờ để niềm tin đó phải thất vọng."',
                  },
                  {
                    to: 'Gửi Đối Tác',
                    msg: '"Tôi luôn tìm kiếm những đối tác cùng chung giá trị: uy tín, chính hãng và phát triển bền vững. Nếu bạn tin vào chất lượng và muốn cùng xây dựng một hệ sinh thái kinh doanh tốt đẹp – hãy cùng nhau làm điều đó."',
                  },
                  {
                    to: 'Gửi Cộng Đồng Doanh Nhân',
                    msg: '"Chúng ta không cần cạnh tranh nhau – chúng ta cần học hỏi nhau. Hãy cùng xây dựng một cộng đồng doanh nhân Việt mạnh mẽ, bởi khi một người thành công, cả cộng đồng đều được hưởng lợi."',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl"
                    style={{ background: 'rgba(201,160,85,0.07)', border: '1px solid rgba(201,160,85,0.2)' }}
                  >
                    <h3 className="font-bold text-sm mb-2" style={{ color: '#e0bc7a' }}>{item.to}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed italic">{item.msg}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </article>

        {/* ── FAQ ── */}
        <section style={{ background: '#f9fafb', padding: '64px 0' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold mb-3"
                style={{ background: 'rgba(201,160,85,0.12)', color: '#c9a055', border: '1px solid rgba(201,160,85,0.3)' }}
              >
                FAQ · CÂU HỎI THƯỜNG GẶP
              </div>
              <h2 className="text-2xl font-black uppercase" style={{ color: '#0a0f1e' }}>
                Giải Đáp Thắc Mắc
              </h2>
              <p className="text-gray-500 text-sm mt-2">Những câu hỏi phổ biến nhất về Trần Cương Kangnam và Kangnam Mart</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: '1px solid #e5e7eb', background: '#fff' }}>
                  <div className="p-5">
                    <h3 className="font-bold text-sm mb-2 flex items-start gap-2.5" style={{ color: '#0a0f1e' }}>
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full text-xs flex items-center justify-center font-black"
                        style={{ background: '#c9a055', color: '#fff' }}
                      >
                        Q
                      </span>
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed pl-8">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            background: 'linear-gradient(135deg, #070c1a 0%, #0a1428 50%, #0d1f3c 100%)',
            padding: '64px 0',
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold mb-4"
              style={{ background: 'rgba(201,160,85,0.15)', color: '#c9a055', border: '1px solid rgba(201,160,85,0.35)' }}
            >
              🇰🇷 KOREAN PREMIUM · KANGNAM MART
            </div>
            <h2 className="text-2xl font-black text-white mb-3">Sẵn Sàng Kết Nối?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Cùng Trần Cương Kangnam khám phá tinh hoa Hàn Quốc và xây dựng cuộc sống chất lượng hơn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider px-7 py-4 rounded transition-all"
                style={{ background: '#c9a055', color: '#0a0f1e' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#a07830')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#c9a055')}
              >
                🤝 Kết Nối Với Trần Cương Kangnam
              </a>
              <a
                href="/#products"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wider px-7 py-4 rounded transition-all"
                style={{ background: 'transparent', color: '#e0bc7a', border: '1px solid rgba(201,160,85,0.5)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(201,160,85,0.1)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'transparent'
                }}
              >
                🇰🇷 Khám Phá Sản Phẩm Korean Premium
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
