/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['my.sepay.vn'],
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SEPAY_API_KEY: process.env.SEPAY_API_KEY,
    SEPAY_BANK_ACCOUNT: process.env.SEPAY_BANK_ACCOUNT,
    SEPAY_BANK_CODE: process.env.SEPAY_BANK_CODE,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
}

export default nextConfig
