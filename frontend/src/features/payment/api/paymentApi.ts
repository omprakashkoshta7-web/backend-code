import api from '@/services/api';
import type { PaymentInit, PaymentVerify, PaymentStatus, RazorpayOrder, RazorpayVerifyResponse } from '../types/payment';

export const paymentApi = {
  init: () => api.post<PaymentInit>('/payments/init'),
  verify: (utr: string, payment_id?: string) =>
    api.post<PaymentVerify>('/payments/verify', { utr, payment_id }),
  status: () => api.get<PaymentStatus>('/payments/status'),
  razorpayStatus: () => api.get<{ enabled: boolean }>('/payments/razorpay/status'),
  createRazorpayOrder: () => api.post<RazorpayOrder>('/payments/razorpay/create-order'),
  verifyRazorpayPayment: (data: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    payment_id: string;
  }) => api.post<RazorpayVerifyResponse>('/payments/razorpay/verify', data),
};
