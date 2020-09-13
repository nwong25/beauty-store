const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production' ? '/api/payment' : '/api/payment'

export default PAYMENT_SERVER_URL
