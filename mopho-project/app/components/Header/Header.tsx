"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Sriracha } from "next/font/google";

export const logoFont = Sriracha({
  subsets: ["latin", "vietnamese"],
  weight: ["400"], 
});

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  // ✅ LOAD USER giống branch thuong (luôn sync theo route)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [pathname]); // 🔥 FIX quan trọng

  // ✅ LOGOUT chuẩn
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);

    router.push("/");
    router.refresh(); // 🔥 ép header cập nhật ngay
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* <Link
          href="/"
          className={`${styles.logo} ${logoFont.className}`}
        > */}
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          Mơ Phố
        </Link>

        {/* MENU */}
        <nav className={styles.nav}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Trang chủ
          </Link>

          <Link
            href="/cafe"
            className={pathname === "/cafe" ? styles.active : ""}
          >
            Cafe
          </Link>

          <Link
            href="/books"
            className={pathname === "/books" ? styles.active : ""}
          >
            Sách
          </Link>

          <Link
            href="/2hand"
            className={pathname === "/2hand" ? styles.active : ""}
          >
            Đồ cũ
          </Link>

          <Link
            href="/health"
            className={pathname === "/health" ? styles.active : ""}
          >
            Sức Khỏe
          </Link>

          <Link
            href="/education"
            className={pathname === "/education" ? styles.active : ""}
          >
            Khóa Học
          </Link>

          <Link
            href="/music"
            className={pathname === "/music" ? styles.active : ""}
          >
            Âm Nhạc
          </Link>
        </nav>

        {/* ICONS */}
        <div className={`${styles.icons} relative`}>
          {/* FAVORITE */}
          <button className={styles.icon}>
            <FiHeart />
          </button>

          {/* CART */}
          <Link href="/cart">
            <button className={styles.icon}>
              <FiShoppingCart />
              <span className={styles.badge}></span>
            </button>
          </Link>

          {/* USER ICON */}
          {!user ? (
            // ❌ chưa login → link login
            <Link href="/login">
              <button className={styles.icon}>
                <FiUser />
              </button>
            </Link>
          ) : (
            // ✅ đã login → dropdown
            <button
              className={styles.icon}
              onClick={() => setOpen(!open)}
            >
              <FiUser />
            </button>
          )}

          {/* DROPDOWN */}
          {user && open && (
            <div className="absolute right-0 top-10 w-48 bg-white shadow-lg rounded-lg p-4 text-sm z-50">
              <p className="font-medium mb-3">
                👋 Xin chào {user.username ?? user.name}
              </p>

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
  );
}
