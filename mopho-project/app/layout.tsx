import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mơ Phố",
  description: "Không gian cà phê cộng đồng & gây quỹ thiện nguyện",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f2e3c3] min-h-screen`}
    >

      <header className="bg-[#f8f5ee] shadow-sm">
        <div className="flex items-center justify-between px-10 py-4">
          <h1 className="text-xl font-semibold">Mơ Phố</h1>

          <nav className="flex gap-6 text-sm">
            <a href="/">Trang chủ</a>
            <a href="/cafe">Cafe</a>
            <a href="/books">Sách</a>
            <a href="#">Bộ quà</a>
            <a href="/health">Sức khỏe</a>
            <a href="#">Khóa học</a>
            <a href="#">Âm nhạc</a>
          </nav>

          <div className="flex gap-4 text-lg">
            <span>♡</span>
            <span>🛒</span>
            <a href="/login">👤</a>
          </div>
        </div>
      </header>

        {/* ===== CONTENT (page.tsx) ===== */}
        <main>{children}</main>

      {/* ===== CATEGORIES ===== */}
      <section className="mt-14 px-10">
        <h2 className="tex  t-xl font-semibold text-center mb-8">
          Khám Phá Không Gian Mơ Phố
        </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  <Category title="Cafe" href="/cafe" />
  <Category title="Books" href="/books" />
  <Category title="Health" href="/health" />
  <Category title="Music" href="/music" />
  <Category title="Education" href="/education" />
  <Category title="Đồ cũ" href="/second-hand" />
</div>

      </section>
        {/* ===== FOOTER ===== */}
        <footer className="mt-16 bg-[#f3b64d] px-10 py-8 text-sm">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Mơ Phố</h3>
              <p>Địa chỉ</p>
              <p>Email</p>
              <p>Facebook</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Giờ mở cửa</h3>
              <p>T2 - T6: 8:00 - 21:00</p>
              <p>T7 - CN: 9:00 - 21:00</p>
            </div>

            <div className="text-right font-semibold text-red-600">
              HỘI BÁC SỸ TÌNH NGUYỆN
            </div>
          </div>

          <p className="text-center mt-6 text-xs">
            © 2024 Mơ Phố. All rights reserved
          </p>
        </footer>
      </body>
    </html>
  );
}

function Category({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-[#f8f5ee] p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">
          Hướng tới các giá trị cộng đồng, mang đến sự tinh tế nhẹ nhàng.
        </p>
      </div>
    </Link>
  );
}
