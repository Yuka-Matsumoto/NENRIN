"use client";
import '../../styles/globals.css';

import CustomHeader from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SeniorDashboardCustomHeader from '../../components/layout/SeniorDashboardCustomHeader'; // カスタムヘッダーをインポート

const metadata = {
  title: "N E N R I N",
  description: "A platform that connects individuals and organizations, fostering community and purpose after retirement.",

}

export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode,
  header?: React.ReactNode
}) {
  return (

    <html lang="ja">
      <body>
        {/* {header || <CustomHeader /> || <SeniorDashboardCustomHeader />} */}
        <CustomHeader />
        <div className="min-h-screen bg-mint">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

