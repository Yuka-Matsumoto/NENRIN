"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you are ready."
      );
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:4000/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Checkout"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
      <style jsx>{`
        section {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          width: 400px;
          height: 112px;
          border-radius: 6px;
          justify-content: space-between;
        }
        button {
          height: 36px;
          background: #556cd6;
          border-radius: 4px;
          color: white;
          border: 0;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
        }
        button:hover {
          opacity: 0.8;
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </form>
  );
}
// // import Image from "next/image";
// "use client";
// import PaymentForm from "../../components/Payment/PaymentForm";

// export default function Home() {
//   return (
//     <div>
//       <h2>Payment Page</h2>
//       <PaymentForm />
//     </div>
//   );
// }

// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//     <Image
//       className="dark:invert"
//       src="https://nextjs.org/icons/next.svg"
//       alt="Next.js logo"
//       width={180}
//       height={38}
//       priority
//     />
//     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//       <li className="mb-2">
//         Get started by editing{" "}
//         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//           src/app/page.tsx
//         </code>
//         .
//       </li>
//       <li>Save and see your changes instantly.</li>
//     </ol>

//     <div className="flex gap-4 items-center flex-col sm:flex-row">
//       <a
//         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/vercel.svg"
//           alt="Vercel logomark"
//           width={20}
//           height={20}
//         />
//         Deploy now
//       </a>
//       <a
//         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Read our docs
//       </a>
//     </div>
//   </main>
//   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/file.svg"
//         alt="File icon"
//         width={16}
//         height={16}
//       />
//       Learn
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/window.svg"
//         alt="Window icon"
//         width={16}
//         height={16}
//       />
//       Examples
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/globe.svg"
//         alt="Globe icon"
//         width={16}
//         height={16}
//       />
//       Go to nextjs.org →
//     </a>
//   </footer>
// </div>
// );
// }
