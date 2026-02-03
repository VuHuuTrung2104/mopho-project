"use client";

import Link from "next/link";
import { useRef } from "react";
import { useParams } from "next/navigation";

/* ================= DATA THEO THÁNG ================= */
const PROGRAM_DATA = {
    "thang-1": {
        title: "Chương trình chăm sóc sức khỏe cộng đồng – Tháng 1",
        time: "01/02, 08:00 – 13:30",
        status: "Sắp diễn ra",
        images: [
            "/images/activity1.jpg",
            "/images/activity2.jpg",
            "/images/activity3.jpg",
        ],
    },
    "thang-5": {
        title: "Chương trình chăm sóc sức khỏe cộng đồng – Tháng 5",
        time: "05/02, 08:00 – 13:30",
        status: "Sắp diễn ra",
        images: [
            "/images/activity3.jpg",
            "/images/activity2.jpg",
            "/images/activity1.jpg",
        ],
    },
};

export default function HealthDetailPage() {
    const galleryRef = useRef(null);
    const { slug } = useParams();

    const data = PROGRAM_DATA[slug] || PROGRAM_DATA["thang-1"];

    return (
        <main className="bg-[#faf7f2] min-h-screen pb-32">

            {/* ================= HEADER ================= */}
            <section className="max-w-6xl mx-auto px-4 pt-10">
                <Link
                    href="/health"
                    className="inline-flex items-center gap-2 text-sm text-[#6d4c41] hover:opacity-70"
                >
                    ←
                    <span className="inline-block mb-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        {data.status}
                    </span>
                </Link>

                <h1 className="mt-6 text-3xl md:text-4xl font-bold text-[#3e2723] text-center leading-snug">
                    {data.title}
                </h1>

                {/* META */}
                <div className="mt-10 flex justify-center">
                    <div className="inline-flex gap-10 bg-white rounded-[32px] shadow px-10 py-6 text-center">
                        {[
                            { icon: "🕒", label: "Thời gian", value: data.time },
                            { icon: "📍", label: "Địa điểm", value: "54 Yên Lãng, Đống Đa" },
                            { icon: "👥", label: "Đối tượng", value: "Người cao tuổi, trẻ em" },
                            { icon: "❤️", label: "Đối tác", value: "Hội Bác Sĩ Tình Nguyện" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <p className="text-sm md:text-base font-semibold text-[#6d4c41] flex items-center gap-2">
                                    <span className="text-xl">{item.icon}</span>
                                    {item.label}
                                </p>
                                <p className="text-base md:text-lg text-[#3e2723] font-medium mt-2 whitespace-nowrap">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SỨ MỆNH ================= */}
            <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#e65100] mb-6">
                    Sứ mệnh chương trình
                </h2>
                    <p className="italic text-[#5d4037] text-base md:text-lg leading-[1.9]">
                        “Tại Mơ Phố, toàn bộ số tiền thu được sẽ đóng góp vào <br />
                        Quỹ thực hiện chương trình số 81 – khám chữa bệnh,<br />
                        cấp thuốc miễn phí cho bà con tại vùng khó khăn.”
                    </p>
            </section>

            {/* ================= HOẠT ĐỘNG CHÍNH ================= */}
            <section className="max-w-6xl mx-auto px-4 mt-20 grid md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-[4px] h-7 bg-[#c62828] rounded-full"></span>
                        <h2 className="text-2xl font-bold text-[#3e2723]">
                            Hoạt động chính
                        </h2>
                    </div>

                    <ul className="space-y-4">
                        {[
                            "Khám tổng quát miễn phí",
                            "Tư vấn sức khỏe chuyên sâu",
                            "Đo huyết áp – đường huyết",
                            "Cấp phát thuốc miễn phí",
                            "Hướng dẫn chăm sóc sức khỏe tại nhà",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow w-fit"
                            >
                                <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                    ✓
                                </span>
                                <span className="text-[#3e2723]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-[32px] overflow-hidden shadow-md">
                    <img
                        src={data.images[0]}
                        alt="Hoạt động"
                        className="w-full h-[360px] object-cover"
                    />
                </div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="max-w-6xl mx-auto px-4 mt-24">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-[4px] h-7 bg-[#c62828] rounded-full"></span>
                    <h2 className="text-2xl font-bold text-[#3e2723]">
                        Hình ảnh cộng đồng
                    </h2>
                </div>

                <div className="flex items-center gap-5">
                    <button
                        onClick={() =>
                            galleryRef.current?.scrollBy({ left: -320, behavior: "smooth" })
                        }
                        className="w-11 h-11 rounded-full bg-white shadow text-xl text-black"
                    >
                        ←
                    </button>

                    <div
                        ref={galleryRef}
                        className="flex gap-7 overflow-hidden scroll-smooth flex-1"
                    >
                        {data.images.map((img, i) => (
                            <div
                                key={i}
                                className="min-w-[320px] rounded-3xl overflow-hidden shadow"
                            >
                                <img src={img} className="w-full h-64 object-cover" />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() =>
                            galleryRef.current?.scrollBy({ left: 320, behavior: "smooth" })
                        }
                        className="w-11 h-11 rounded-full bg-white shadow text-xl text-black"
                    >
                        →
                    </button>
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
