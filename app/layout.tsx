import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trần Cường Kangnam – Nhập Khẩu & Phân Phối Hàng Hàn Quốc Chính Hãng',
  description: 'Trần Cường Kangnam – 20 năm nhập khẩu và phân phối hàng Hàn Quốc chính hãng, đồng hành cùng hàng triệu gia đình Việt sống khỏe mỗi ngày.',
  openGraph: {
    title: 'Trần Cường Kangnam – Korean Premium',
    description: 'Tinh hoa Hàn Quốc, nâng tầm sức khỏe Việt.',
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
