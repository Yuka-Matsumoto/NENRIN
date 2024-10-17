// components/Payment/PaymentForm.tsx
import React from "react";

const PaymentForm: React.FC = () => {
  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const data = await res.json();

    if (data.url) {
      window.location.href = data.url; // StripeのCheckoutページにリダイレクト
    } else {
      console.error("Checkout session creation failed");
    }
  };

  return (
    <section>
      <button onClick={handleCheckout}>Checkout</button>
    </section>
  );
};

export default PaymentForm;
