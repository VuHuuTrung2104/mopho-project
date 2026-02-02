import './globals.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/TopBanner";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Banner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}