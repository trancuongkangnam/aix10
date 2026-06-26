# Hướng dẫn Deploy AutoBiz AI lên Vercel

## Yêu cầu
- Node.js 18+
- Tài khoản Vercel (miễn phí)
- Tài khoản Supabase (miễn phí)
- Tài khoản SePay (https://sepay.vn)

---

## Bước 1: Thiết lập Supabase

1. Vào https://supabase.com → Tạo project mới
2. Vào **SQL Editor** → Paste toàn bộ nội dung file `supabase/schema.sql` → Run
3. Vào **Settings → API** → Copy:
   - `Project URL` → dùng cho `SUPABASE_URL`
   - `anon public` key → dùng cho `SUPABASE_ANON_KEY`
   - `service_role` key → dùng cho `SUPABASE_SERVICE_ROLE_KEY`

---

## Bước 2: Thiết lập SePay

1. Đăng ký tại https://sepay.vn
2. Vào **Dashboard → Ngân hàng** → Kết nối tài khoản ngân hàng
3. Vào **Cài đặt → API** → Lấy API Key
4. Vào **Cài đặt → Webhook** → Thêm URL:
   ```
   https://your-domain.vercel.app/api/payment/webhook
   ```
5. Copy **Webhook Secret** → dùng cho `SEPAY_WEBHOOK_SECRET`

### Thông tin cần điền:
- `SEPAY_API_KEY` = API key từ SePay dashboard
- `SEPAY_ACCOUNT_NUMBER` = Số tài khoản ngân hàng đã kết nối
- `SEPAY_BANK_CODE` = Mã ngân hàng (VD: MB, VCB, TCB, ACB, BIDV...)

---

## Bước 3: Deploy lên Vercel

### Option A: Deploy qua Vercel CLI (nhanh nhất)

```bash
# Cài Vercel CLI
npm i -g vercel

# Vào thư mục project
cd autobiz-ai

# Deploy
vercel

# Khi hỏi về environment variables, nhập từng cái
```

### Option B: Deploy qua GitHub (khuyên dùng)

1. Push code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Vào https://vercel.com → **New Project** → Import từ GitHub

3. Trong **Environment Variables**, thêm tất cả variables từ `.env.example`:
   ```
   SUPABASE_URL=https://xxx.supabase.co
   SUPABASE_ANON_KEY=eyJ...
   SUPABASE_SERVICE_ROLE_KEY=eyJ...
   SEPAY_API_KEY=your-api-key
   SEPAY_ACCOUNT_NUMBER=0123456789
   SEPAY_BANK_CODE=MB
   SEPAY_WEBHOOK_SECRET=your-secret
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

4. Click **Deploy**

---

## Bước 4: Sau khi Deploy

1. Copy URL của Vercel (VD: `https://autobiz-ai.vercel.app`)
2. Update env var `NEXT_PUBLIC_APP_URL` với URL này
3. Update Webhook URL trong SePay dashboard
4. Test flow:
   - Truy cập website
   - Click "Dùng thử miễn phí"
   - Điền form
   - Chuyển khoản test
   - Kiểm tra Supabase xem data đã được lưu chưa

---

## Tùy chỉnh nội dung

Mọi nội dung có thể thay đổi trong các file component:

| File | Nội dung |
|------|----------|
| `components/Hero.tsx` | Tiêu đề, tagline, CTA |
| `components/PainPoints.tsx` | 3 vấn đề |
| `components/Features.tsx` | Tính năng sản phẩm |
| `components/Pricing.tsx` | Giá và gói |
| `components/Testimonials.tsx` | Testimonials |
| `components/FAQ.tsx` | Câu hỏi thường gặp |
| `components/Footer.tsx` | Footer links |

---

## Môi trường phát triển local

```bash
# Copy env file
cp .env.example .env.local
# Điền các giá trị vào .env.local

# Cài dependencies
npm install

# Chạy dev server
npm run dev

# Truy cập: http://localhost:3000
```
