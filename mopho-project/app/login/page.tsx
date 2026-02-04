"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = () => {
    // ===== REGISTER (DEMO) =====
    if (isRegister) {
      alert("Tạo tài khoản thành công (demo)");
      setIsRegister(false);
      setName("");
      setEmail("");
      setPassword("");
      return;
    }

    // ===== ADMIN LOGIN =====
    if (name === "admin" && password === "123") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          role: "admin",
          name: "Admin",
        })
      );
      router.push("/admin");
      return;
    }

    // ===== USER LOGIN =====
    if (name && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          role: "user",
          name,
        })
      );
      router.push("/"); // 👉 về trang chủ (layout user)
      return;
    }

    alert("Vui lòng nhập đầy đủ thông tin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2] px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        {/* ===== TITLE ===== */}
        <h2 className="text-2xl font-semibold mb-1">
          {isRegister ? "Tạo Tài Khoản" : "Đăng Nhập"}
        </h2>

        {/* ===== NAME ===== */}
        <input
          className="w-full mb-3 px-3 py-2 border rounded-md text-sm"
          placeholder="Tên đăng nhập"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* ===== EMAIL (REGISTER) ===== */}
        {isRegister && (
          <input
            className="w-full mb-3 px-3 py-2 border rounded-md text-sm"
            placeholder="Email hoặc Số Điện Thoại"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}

        {/* ===== PASSWORD ===== */}
        <input
          type="password"
          className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ===== SUBMIT ===== */}
        <button
          onClick={handleSubmit}
          className={`w-full py-2 text-white rounded-md font-medium transition
            ${
              isRegister
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
          {isRegister ? "Tạo Tài Khoản" : "Đăng nhập"}
        </button>
               {/* ===== GOOGLE ===== */}
         <button
          className="w-full mt-3 py-2 border rounded-md flex justify-center items-center gap-2 text-sm"
          onClick={() => alert("Google Login (demo)")}
        >
          <span className="font-bold text-lg">G</span>
          Sign up with Google
        </button>

        {/* ===== SWITCH MODE ===== */}
        <p
          className="mt-4 text-sm text-center cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? (
            <>
              Đã có tài khoản?{" "}
              <span className="text-blue-600 font-medium">
                Đăng nhập
              </span>
            </>
          ) : (
            <>
              Chưa có tài khoản?{" "}
              <span className="text-blue-600 font-medium">
                Đăng ký
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}