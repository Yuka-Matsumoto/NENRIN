"use client";

import { useState } from "react";

export default function PaymentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // StripeのCheckoutページにリダイレクト
      } else {
        throw new Error("Checkout session creation failed");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      showNotification(
        "There was an error initiating the checkout process. Please try again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000); // 5秒後に通知を消す
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: isLoading ? "not-allowed" : "pointer",
          opacity: isLoading ? 0.7 : 1,
        }}
      >
        {isLoading ? "Processing..." : "Checkout"}
      </button>
      {isLoading && (
        <div style={{ marginTop: "10px", fontSize: "14px" }}>
          Please wait while we prepare your checkout session...
        </div>
      )}
      {notification && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor:
              notification.type === "error" ? "#ffebee" : "#e8f5e9",
            color: notification.type === "error" ? "#c62828" : "#2e7d32",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          {notification.message}
        </div>
      )}
    </section>
  );
}

// // components/Payment/PaymentForm.tsx
// import React from "react";

// const PaymentForm: React.FC = () => {
//   const handleCheckout = async () => {
//     const res = await fetch("/api/create-checkout-session", {
//       method: "POST",
//     });
//     const data = await res.json();

//     if (data.url) {
//       window.location.href = data.url; // StripeのCheckoutページにリダイレクト
//     } else {
//       console.error("Checkout session creation failed");
//     }
//   };

//   return (
//     <section>
//       <button onClick={handleCheckout}>Checkout</button>
//     </section>
//   );
// };

// export default PaymentForm;
