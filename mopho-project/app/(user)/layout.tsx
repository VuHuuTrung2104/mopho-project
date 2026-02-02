"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
    router.push("/"); //  quay về trang chủ chưa đăng nhập
  };

  return (
    <>
      {/* ===== HEADER ===== */}
        <header className="bg-[#f8f5ee] shadow-sm">
        <div className="flex justify-between items-center px-10 py-4">
            {/* LOGO */}
            <h1 className="font-semibold text-xl">Mơ Phố</h1>

            {/* MENU */}
            <nav className="flex gap-6 text-sm">
            <a href="/">Trang chủ</a>
            <a href="/cafe">Cafe</a>
            <a href="/books">Sách</a>
            <a href="/gift">Đồ cũ</a>
            <a href="/health">Sức khỏe</a>
            <a href="/education">Khóa học</a>
            <a href="/music">Âm nhạc</a>
            </nav>

            {/* ICON ACTIONS */}
            <div className="flex gap-5 items-center relative">
            {/* FAVORITE */}
            <button
                onClick={() => router.push("/favorite")}
                className="text-xl hover:scale-110 transition"
                title="Yêu thích"
            >
                ♡
            </button>

            {/* CART */}
            <button
                onClick={() => router.push("/cart")}
                className="text-xl hover:scale-110 transition relative"
                title="Giỏ hàng"
            >
                🛒
                {/* Badge demo */}
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                0
                </span>
            </button>

            {/* ACCOUNT */}
            <button
                onClick={() => {
                if (!user) router.push("/login");
                else setOpen(!open);
                }}
                className="text-xl hover:scale-110 transition"
                title="Tài khoản"
            >
                👤
            </button>

            {/* DROPDOWN USER */}
            {user && open && (
                <div className="absolute right-0 top-10 w-48 bg-white shadow-lg rounded-lg p-4 text-sm z-50">
                <p className="font-medium mb-2">👋 {user.name}</p>
                <button
                    onClick={logout}
                    className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Đăng xuất
                </button>
                </div>
            )}
            </div>
        </div>
        </header>


      {/* ===== CONTENT ===== */}
      <main className="min-h-screen">{children}</main>

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
    </>
  );
}




