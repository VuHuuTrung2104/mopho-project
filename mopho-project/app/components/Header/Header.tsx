'use client';

import styles from './Header.module.css';
import NextImage from 'next/image';
import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

import { Sriracha } from "next/font/google";

export const logoFont = Sriracha({
  subsets: ["latin", "vietnamese"],
  weight: ["400"], 
});

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href="/"
          className={`${styles.logo} ${logoFont.className}`}
        >
          Mơ Phố
        </Link>

        {/* Menu */}
        <nav className={styles.nav}>
          <Link
            href="/"
            className={pathname === '/' ? styles.active : ''}
          >
            Trang chủ
          </Link>

          <Link
            href="/cafe"
            className={pathname === '/cafe' ? styles.active : ''}
          >
            Cafe
          </Link>

          <Link
            href="/books"
            className={pathname === '/books' ? styles.active : ''}
          >
            Sách
          </Link>

          <Link
            href="/2hand"
            className={pathname === '/2hand' ? styles.active : ''}
          >
            Đồ cũ
          </Link>

          <Link
            href="/health"
            className={pathname === '/health' ? styles.active : ''}
          >
            Sức Khỏe
          </Link>

          <Link
            href="/education"
            className={pathname === '/education' ? styles.active : ''}
          >
            Khóa Học
          </Link>

          <Link
            href="/am-nhac"
            className={pathname === '/am-nhac' ? styles.active : ''}
          >
            Âm Nhạc
          </Link>
        </nav>

        {/* Icons */}
        <div className={styles.icons}>
          <button className={styles.icon} aria-label="Yêu thích">
            <FiHeart />
          </button>

          <Link href="/cart" aria-label="Giỏ hàng">
            <button className={styles.icon}>
              <FiShoppingCart />
              <span className={styles.badge}></span>
            </button>
          </Link>

          <button className={styles.icon} aria-label="Tài khoản">
            <FiUser />
          </button>
        </div>
      </div>
    </header>
  );
}