"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = () => {
    if (isRegister) {
      alert("Đăng ký thành công (demo)");
      setIsRegister(false);
      return;
    }

    // Demo admin
    if (name === "admin" && password === "123") {
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "admin", name })
      );
      router.push("/admin");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#faf7f2]">
      <div className="w-[360px] bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">
          {isRegister ? "Đăng ký" : "Đăng nhập"}
        </h2>

        <label className="text-sm font-medium">Họ Tên</label>
        <input
          className="w-full mt-2 mb-4 px-3 py-2 border rounded-md"
          placeholder="e.g. Nguyễn Cung"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-sm font-medium">Mật Khẩu</label>
        <input
          type="password"
          className="w-full mt-2 mb-4 px-3 py-2 border rounded-md"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-500 text-white rounded-md"
        >
          {isRegister ? "Đăng ký" : "Đăng nhập"}
        </button>

        <p
          className="mt-4 text-sm text-center text-blue-600 cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Đã có tài khoản? Đăng nhập"
            : "Bạn chưa có tài khoản? Đăng ký"}
        </p>

        <button
          className="w-full mt-3 py-2 border rounded-md flex justify-center gap-2 text-sm"
          onClick={() => alert("Google Login (demo)")}
        >
          <span>G</span> Sign up with Google
        </button>
      </div>
    </div>
  );
}
