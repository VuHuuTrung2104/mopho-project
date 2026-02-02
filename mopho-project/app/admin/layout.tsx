"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [showNotify, setShowNotify] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const notifyRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  // ===== LOGOUT =====
  const logout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  // ===== CLICK OUTSIDE =====
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifyRef.current && !notifyRef.current.contains(e.target as Node)) {
        setShowNotify(false);
      }
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setShowLogout(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ===== SIDEBAR MENU =====
  const menu = [
    { label: "Trang chủ", icon: "🏠", href: "/admin" },
    { label: "Quản lý sản phẩm", icon: "📦", href: "/admin/products" },
    { label: "Quản lý đơn hàng", icon: "🧾", href: "/admin/orders" },
    { label: "Quản lý nội dung", icon: "📝", href: "/admin/content" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f6f6f6]">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 bg-white border-r px-6 py-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-orange-500">Mơ Phố</h2>
          <p className="text-xs text-gray-500">Hệ thống quản trị</p>
        </div>

        <nav className="space-y-2 text-sm">
          {menu.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
                  ${
                    active
                      ? "bg-orange-100 text-orange-600 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ===== MAIN ===== */}
      <div className="flex-1">
        {/* ===== HEADER (GIỮ NGUYÊN – KHÔNG ĐỔI) ===== */}
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
          <h1 className="font-semibold text-lg">Tổng quan hệ thống</h1>

          <div className="flex items-center gap-4 relative">
            {/* SEARCH */}
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm đơn hàng, sản phẩm..."
                className="pl-9 pr-3 py-2 text-sm border rounded-md focus:outline-none"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>

            {/* NOTIFICATION */}
            <div ref={notifyRef} className="relative">
              <button
                onClick={() => setShowNotify(!showNotify)}
                className="text-xl relative"
              >
                🔔
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {showNotify && (
                <div className="absolute right-0 mt-3 w-64 bg-white border rounded-lg shadow-lg p-3 text-sm z-50">
                  <p className="font-semibold mb-2">Thông báo</p>
                  <ul className="space-y-2">
                    <li>📦 Đơn hàng mới</li>
                    <li>💰 Có giao dịch gây quỹ</li>
                    <li>📢 Cập nhật hệ thống</li>
                  </ul>
                </div>
              )}
            </div>

            {/* ADMIN NAME */}
            <span className="text-sm font-medium">Admin Mơ Phố</span>

            {/* AVATAR + LOGOUT */}
            <div ref={avatarRef} className="relative">
              <button
                onClick={() => setShowLogout(!showLogout)}
                className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center"
              >
                👤
              </button>

              {showLogout && (
                <button
                  onClick={logout}
                  className="absolute right-0 mt-3 px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 shadow-md"
                >
                  Đăng xuất
                </button>
              )}
            </div>
          </div>
        </header>

        {/* ===== CONTENT ===== */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
