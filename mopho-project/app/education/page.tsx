"use client";

import Link from "next/link";
import { useState } from "react";

export default function EducationPage() {
    /* ================= DATA ================= */
    const activities = [
        { title: "Giáo dục giới tính", date: "Tháng 5, 2026", img: "/images/edu1.png" },
        { title: "Sơ cấp cứu", date: "Tháng 4, 2026", img: "/images/edu2.jpg" },
        { title: "Văn hóa đọc sách", date: "Tháng 3, 2026", img: "/images/edu3.jpg" },
        { title: "Giáo dục giới tính", date: "Tháng 2, 2026", img: "/images/edu1.png" },
        { title: "Giáo dục giới tính", date: "Tháng 3, 2026", img: "/images/edu1.png" },
    ];

    /* ================= SLIDER CONFIG ================= */
    const CARD_WIDTH = 260;
    const GAP = 24;
    const VISIBLE = 3;
    const STEP = CARD_WIDTH + GAP;

    const [offset, setOffset] = useState(0);

    const maxOffset = Math.max(0, activities.length * STEP - VISIBLE * STEP);

    const next = () => {
        setOffset((prev) => Math.min(prev + STEP, maxOffset));
    };

    const prev = () => {
        setOffset((prev) => Math.max(prev - STEP, 0));
    };

    return (
        <main className="bg-[#faf7f2] min-h-screen pb-32 text-[#1f1f1f]">

            {/* ================= BANNER ================= */}
            <section className="max-w-7xl mx-auto px-4 pt-10">
                <div
                    className="
            relative
            rounded-[40px]
            overflow-hidden
            shadow-[0_16px_40px_rgba(0,0,0,0.14)]
            h-[340px] md:h-[380px]
        "
                >
                    <img
                        src="/images/banner2.jpg"
                        alt="MoPho Education"
                        className="
        absolute inset-0
        w-full h-full
        object-cover
        object-[center_30%]
    "
                    />
                </div>
            </section>



            {/* ===== DIVIDER ===== */}
            <div className="max-w-6xl mx-auto px-4 mt-24">
                <div className="h-px bg-[#e0d6c8]" />
            </div>

            {/* ================= CHƯƠNG TRÌNH SẮP TỚI ================= */}
            <section className="max-w-6xl mx-auto px-4 mt-20">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-[4px] h-6 bg-[#c62828] rounded-full" />
                    <h2 className="text-xl md:text-2xl font-bold text-[#3e2723]">
                        Chương trình sắp tới
                    </h2>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            title: "Sơ cấp cứu ban đầu",
                            date: "09:00 · 10/06/2026",
                            img: "/images/edu6.jpg",
                        },
                        {
                            title: "Giáo dục giới tính",
                            date: "15:00 · 18/06/2026",
                            img: "/images/edu5.jpg",
                        },
                        {
                            title: "Văn hóa đọc sách",
                            date: "08:30 · 25/06/2026",
                            img: "/images/edu4.jpg",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative bg-white rounded-2xl px-5 py-4 shadow-sm
                flex items-center justify-between hover:shadow transition"
                        >
                            {/* BADGE */}
                            <span className="
                                absolute -top-3 left-6
                                text-xs font-semibold
                                text-green-700
                                bg-green-100
                                px-3 py-1
                                rounded-full
                                shadow-sm
                                ">
                                Sắp diễn ra
                            </span>

                            <div className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-14 h-14 rounded-xl object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{item.title}</p>

                                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                        <div className="flex items-center gap-1">
                                            <span>📅</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>📍</span>
                                            <span>Mơ Phố · Trung Hòa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="#"
                                className="flex items-center gap-2 text-sm font-semibold hover:underline whitespace-nowrap"
                            >
                                <span>Xem chi tiết</span>
                                <span className="text-lg">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= HOẠT ĐỘNG ĐÃ DIỄN RA ================= */}
            <section className="max-w-6xl mx-auto px-4 mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-[4px] h-6 bg-[#c62828] rounded-full" />
                    <h2 className="text-xl md:text-2xl font-bold text-[#3e2723]">
                        Hoạt động đã diễn ra
                    </h2>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-6 transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${offset}px)` }}
                        >
                            {activities.map((item, i) => (
                                <div
                                    key={i}
                                    className="min-w-[260px] bg-white rounded-3xl shadow overflow-hidden"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LEFT ARROW */}
                    <button
                        onClick={prev}
                        disabled={offset === 0}
                        className={`
                            absolute -left-10 top-1/2 -translate-y-1/2
                            text-2xl font-bold
                            transition
                            ${offset === 0 ? "opacity-30" : "hover:scale-125"}
                        `}
                    >
                        ←
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={next}
                        disabled={offset >= maxOffset}
                        className={`
                            absolute -right-10 top-1/2 -translate-y-1/2
                            text-2xl font-bold
                            transition
                            ${offset >= maxOffset ? "opacity-30" : "hover:scale-125"}
                        `}
                    >
                        →
                    </button>
                </div>
            </section>
            {/* ===== QUOTE===== */}
            <section className="max-w-4xl mx-auto px-4 mt-24">
                <div className="bg-[#efe5d8] rounded-3xl p-10 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#4e342e] leading-snug">
                        Khám Phá Sách, Gieo Mầm Hạnh Phúc
                    </p>
                    <p className="italic text-[#5d4037] text-base md:text-lg leading-[1.9]">
                        “Tại Mơ Phố, toàn bộ số tiền thu được sẽ đóng góp vào <br />
                        Quỹ thực hiện chương trình số 81 – khám chữa bệnh,<br />
                        cấp thuốc miễn phí cho bà con tại vùng khó khăn.”
                    </p>
                </div>
            </section>

            {/* ===== DIVIDER ===== */}
            <div className="max-w-6xl mx-auto px-4 mt-24">
                <div className="h-px bg-[#e0d6c8]" />
            </div>

            {/* ===== KHÁM PHÁ KHÔNG GIAN MƠ PHỐ ===== */}
            <section className="max-w-7xl mx-auto px-4 mt-24">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#2e2e2e] mb-12">
                    Khám Phá Không Gian Mơ Phố
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {[
                        { title: "Cafe", logo: "/images/logo-cafe.png" },
                        { title: "Books", logo: "/images/logo-books.png" },
                        { title: "Health", logo: "/images/logo-health.png" },
                        { title: "Music", logo: "/images/logo-music.png" },
                        { title: "Education", logo: "/images/logo-education.png" },
                        { title: "Đồ Cũ", logo: "/images/logo-old.png" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-[28px] p-5 shadow-sm hover:shadow-md transition"
                        >
                            {/* HEADER */}
                            <div className="inline-flex items-center gap-4 bg-[#e6e1df] rounded-2xl px-5 py-3 mb-4">

                                {/* LOGO – TO HƠN NHƯNG VẪN GỌN */}
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                    <img
                                        src={item.logo}
                                        alt={item.title}
                                        className="w-9 h-9 object-contain"
                                    />
                                </div>

                                {/* TEXT */}
                                <span className="font-semibold text-[#2e2e2e] text-base">
                                    {item.title}
                                </span>
                            </div>

                            {/* DESCRIPTION */}
                            <p className="text-sm text-[#6f6f6f] leading-relaxed">
                                <span className="italic block mb-1 text-[#4e4e4e]">
                                    Hương vị của sự tĩnh lặng
                                </span>
                                Không gian được chăm chút kỹ lưỡng,
                                mang đến cảm giác bình yên và kết nối.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}
