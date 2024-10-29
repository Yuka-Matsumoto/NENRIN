// import '../../styles/globals.css';
// import Header from "../../components/layout/Header";
// import Footer from "../../components/layout/Footer";

// export const metadata = {
//   title: "N E N R I N",
//   description: "A platform that connects individuals and organizations, fostering community and purpose after retirement.",

// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (

//     <html lang="ja">
//       <body>
//         <Header />
//         <div className="min-h-screen bg-mint">
//           {children}
//         </div>
//         <Footer />
//       </body>
//     </html>
//   )
// }





// app/layout.tsx
import '../../styles/globals.css';
import DefaultHeader from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "N E N R I N",
  description: "A platform that connects individuals and organizations, fostering community and purpose after retirement.",
}

export default function RootLayout({
  children,
  header, // ヘッダーをプロパティとして受け取る
}: {
  children: React.ReactNode,
  header?: React.ReactNode // optionalでカスタムヘッダーを受け取る
}) {
  return (
    <html lang="ja">
      <body>
        {header || <DefaultHeader />} {/* カスタムヘッダーがあればそれを表示、なければDefaultHeader */}
        <div className="min-h-screen bg-mint">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
