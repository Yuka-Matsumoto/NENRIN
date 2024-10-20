import '../styles/globals.css';

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "N E N R I N",
  description: "A platform that connects individuals and organizations, fostering community and purpose after retirement.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="min-h-screen bg-mint">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
