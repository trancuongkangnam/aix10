-- AutoBiz AI Database Schema
-- Chạy file này trong Supabase SQL Editor

-- =============================================
-- Bảng đăng ký người dùng
-- =============================================
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  plan TEXT NOT NULL DEFAULT 'starter' CHECK (plan IN ('starter', 'business', 'enterprise')),
  billing_cycle TEXT NOT NULL DEFAULT 'monthly' CHECK (billing_cycle IN ('monthly', 'yearly')),
  payment_status TEXT NOT NULL DEFAULT 'free_trial'
    CHECK (payment_status IN ('pending', 'paid', 'failed', 'free_trial')),
  sepay_order_id TEXT,
  trial_ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- Bảng thanh toán
-- =============================================
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL REFERENCES registrations(email),
  order_id TEXT NOT NULL UNIQUE,
  amount BIGINT NOT NULL,
  plan TEXT NOT NULL,
  billing_cycle TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'paid', 'failed', 'amount_mismatch', 'expired')),
  paid_at TIMESTAMPTZ,
  webhook_payload JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- Auto-update updated_at
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER registrations_updated_at
  BEFORE UPDATE ON registrations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- =============================================
-- Row Level Security
-- =============================================
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Service role has full access (used by API routes)
CREATE POLICY "Service role full access registrations"
  ON registrations FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access payments"
  ON payments FOR ALL
  USING (auth.role() = 'service_role');

-- =============================================
-- Indexes
-- =============================================
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_payment_status ON registrations(payment_status);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_email ON payments(user_email);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
