import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!

// Server-side client (full access)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Client-side client (restricted)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type UserRegistration = {
  id?: string
  full_name: string
  email: string
  phone: string
  company_name: string
  plan: 'starter' | 'business' | 'enterprise'
  billing_cycle: 'monthly' | 'yearly'
  payment_status: 'pending' | 'paid' | 'failed' | 'free_trial'
  sepay_order_id?: string
  trial_ends_at?: string
  created_at?: string
}
