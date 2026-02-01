'use client';

import styles from './Header.module.css';
import NextImage from 'next/image';
import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
        <div className={styles.container}>
           <Link href="/" className={styles.logo}>
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
            href="/sach"
            className={pathname === '/sach' ? styles.active : ''}
          >
            Sách
          </Link>

          <Link
            href="/do-cu"
            className={pathname === '/do-cu' ? styles.active : ''}
          >
            Đồ cũ
          </Link>

          <Link
            href="/suc-khoe"
            className={pathname === '/suc-khoe' ? styles.active : ''}
          >
            Sức Khỏe
          </Link>

          <Link
            href="/khoa-hoc"
            className={pathname === '/khoa-hoc' ? styles.active : ''}
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

          <button className={styles.icon} aria-label="Giỏ hàng">
            <FiShoppingCart />
            <span className={styles.badge}></span>
          </button>

          <button className={styles.icon} aria-label="Tài khoản">
            <FiUser />
          </button>
        </div>
      </div>
    </header>
  );
}