type PaymentMethod = 'credit card' | 'Paypal' | 'MBWay';

interface Payment {
    value: number;
    method: PaymentMethod;
    details: string;
}

function processingPayment(payment: Payment): string {
  return `Processing ${payment.value}€ using ${payment.method}. Details: ${payment.details}`;
}

// Examples:
const payment01: Payment = {
  value: 50,
  method: "MBWay",
  details: "Order #1234"
};

const payment02: Payment = {
  value: 120,
  method: "Paypal",
  details: "Order #0231"
};

console.log(processingPayment(payment01));
console.log(processingPayment(payment02));