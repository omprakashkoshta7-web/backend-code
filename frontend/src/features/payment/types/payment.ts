export interface PaymentInit {
  payment_id: string;
  txn_id?: string;
  amount: number;
  currency?: string;
  upi_id: string;
  payee_name?: string;
  qr_data: string;
  upi_deep_link: string;
  status: string;
  expires_in?: string;
}

export interface RazorpayOrder {
  order_id: string;
  amount: number;
  currency: string;
  receipt: string;
  key_id: string;
  payment_id: string;
  prefill: {
    name?: string;
    email?: string;
  };
  notes: Record<string, string>;
}

export interface RazorpayVerifyResponse {
  success: boolean;
  message: string;
  payment: {
    id: string;
    razorpay_order_id: string;
    razorpay_payment_id: string;
    amount: number;
    verified_at: string;
  };
  subscription: {
    id: string;
    plan: string;
    status: string;
    start_date: string;
    end_date: string;
  };
}

export interface PaymentVerify {
  success: boolean;
  message: string;
  payment: {
    id: string;
    utr: string;
    amount: number;
    verified_at: string;
  };
  subscription: {
    id: string;
    plan: string;
    status: string;
    start_date: string;
    end_date: string;
  };
}

export interface PaymentStatus {
  id: string;
  status: 'pending' | 'verified' | 'failed' | 'no_payment';
  amount: number;
  upi_id: string;
  utr: string | null;
  created_at: string;
  verified_at: string | null;
}

export interface RazorpayWindow extends Window {
  Razorpay?: new (options: RazorpayCheckoutOptions) => RazorpayInstance;
}

export interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  image?: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
    backdrop_color?: string;
  };
  handler: (response: RazorpaySuccessResponse) => void;
  modal?: {
    ondismiss?: () => void;
  };
}

export interface RazorpayInstance {
  open: () => void;
  close: () => void;
}

export interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
