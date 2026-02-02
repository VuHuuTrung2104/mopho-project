// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Link from "next/link";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Mơ Phố",
//   description: "Không gian cà phê cộng đồng & gây quỹ thiện nguyện",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="vi">
//     <body
//       className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f2e3c3] min-h-screen`}
//     >

//       <header className="bg-[#f8f5ee] shadow-sm">
//         <div className="flex items-center justify-between px-10 py-4">
//           <h1 className="text-xl font-semibold">Mơ Phố</h1>

//           <nav className="flex gap-6 text-sm">
//             <a href="/">Trang chủ</a>
//             <a href="/cafe">Cafe</a>
//             <a href="/books">Sách</a>
//             <a href="#">Bộ quà</a>
//             <a href="/health">Sức khỏe</a>
//             <a href="#">Khóa học</a>
//             <a href="#">Âm nhạc</a>
//           </nav>

//           <div className="flex gap-4 text-lg">
//             <span>♡</span>
//             <span>🛒</span>
//             <a href="/login">👤</a>
//           </div>
//         </div>
//       </header>

//         {/* ===== CONTENT (page.tsx) ===== */}
//         <main>{children}</main>

//       {/* ===== CATEGORIES ===== */}
//       <section className="mt-14 px-10">
//         <h2 className="tex  t-xl font-semibold text-center mb-8">
//           Khám Phá Không Gian Mơ Phố
//         </h2>



// <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//   <Category
//     title="Hương vị của sự tĩnh lặng"
//     subtitle="Lan tỏa tri thức và học tập bền vững"
//     icon="/icons/education.png"
//     href="/education"
//   />
//   <Category
//     title="Hương vị của sự tĩnh lặng"
//     subtitle="Từng hạt cafe được tuyển chọn kỹ lưỡng, mang đến sự tỉnh thức nhẹ nhàng"
//     icon="/icons/cafe.png"
//     href="/cafe"
//   />
//   <Category
//     title="Hương vị của sự tĩnh lặng"
//     subtitle="Không gian đọc sách yên tĩnh, nơi tri thức và cảm xúc được nuôi dưỡng"
//     icon="/icons/books.png"
//     href="/books"
//   />
//   <Category
//     title="Hương vị của sự tĩnh lặng"
//     subtitle="Chăm sóc sức khỏe từ những điều giản dị và chân thành"
//     icon="/icons/health.png"
//     href="/health"
//   />
//   <Category
//     title="Hương vị của sự tĩnh lặng"
//     subtitle="Âm thanh chữa lành, kết nối cảm xúc"
//     icon="/icons/music.png"
//     href="/music"
//   />
//   <Category
//     title="Hương vị của sự tĩnh lặng"
//     subtitle="Tái sử dụng - tiếp nối vòng yêu thích"
//     icon="/icons/gift.png"
//     href="/gift"
//   />
// </div>


//       </section>
        // {/* ===== FOOTER ===== */}
        // <footer className="mt-16 bg-[#f3b64d] px-10 py-8 text-sm">
        //   <div className="grid grid-cols-3 gap-6">
        //     <div>
        //       <h3 className="font-semibold mb-2">Mơ Phố</h3>
        //       <p>Địa chỉ</p>
        //       <p>Email</p>
        //       <p>Facebook</p>
        //     </div>

        //     <div>
        //       <h3 className="font-semibold mb-2">Giờ mở cửa</h3>
        //       <p>T2 - T6: 8:00 - 21:00</p>
        //       <p>T7 - CN: 9:00 - 21:00</p>
        //     </div>

        //     <div className="text-right font-semibold text-red-600">
        //       HỘI BÁC SỸ TÌNH NGUYỆN
        //     </div>
        //   </div>

        //   <p className="text-center mt-6 text-xs">
        //     © 2024 Mơ Phố. All rights reserved
        //   </p>
        // </footer>
//       </body>
//     </html>
//   );
// }

// function Category({
//   title,
//   subtitle,
//   icon,
//   href,
// }: {
//   title: string;
//   subtitle: string;
//   icon: string;
//   href: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="bg-[#f8f5ee] p-5 rounded-xl shadow-sm
//                  hover:shadow-md transition
//                  flex flex-col items-center text-center gap-2"
//     >
//       <img
//         src={icon}
//         alt={title}
//         className="w-16 h-16 object-contain"
//       />

//       {/* TITLE */}
//       <h3 className="font-semibold leading-snug max-w-[300px] break-words">
//         {title}
//       </h3>

//       {/* SUBTITLE */}
//       <p className="text-sm text-gray-600 leading-snug max-w-[300px] break-words">
//         {subtitle}
//       </p>
//     </a>
//   );
// }



import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-[#f2e3c3] min-h-screen">
        {children}
      </body>
    </html>
  );
}



