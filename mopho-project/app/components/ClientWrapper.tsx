"use client";

import { usePathname } from "next/navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Admin route
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {/* ✅ User + Home có Header */}
      {!isAdmin && <Header />}

      {/* Nội dung */}
      {children}

      {/* ✅ User + Home có Footer */}
      {!isAdmin && <Footer />}
    </>
  );
}
