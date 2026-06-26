import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoBiz AI – Tự động hóa vận hành doanh nghiệp bằng AI | Dành cho SME Việt Nam',
  description: 'AutoBiz AI giúp doanh nghiệp SME giảm 60% thời gian vận hành thủ công, tăng 38% tỷ lệ chuyển đổi. Dùng thử miễn phí 14 ngày.',
  openGraph: {
    title: 'AutoBiz AI – Vận hành thông minh hơn với AI',
    description: 'Tự động hóa bán hàng, chăm sóc khách hàng và quản trị nội bộ trong một nền tảng duy nhất.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
