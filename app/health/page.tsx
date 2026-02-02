"use client";
import Link from "next/link";
import { useRef } from "react";

export default function HealthPage() {
    const activityRef = useRef(null);

    const scrollLeft = () => {
        activityRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        activityRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <main className="bg-[#f7f3ea] min-h-screen pb-28">



            {/* ===== BANNER PHIẾU KHÁM BỆNH NHÂN ĐẠO ===== */}
            <section className="max-w-6xl mx-auto px-4 pt-10">
                <div
                    className="
                        rounded-[28px]
                        px-10 py-7
                        flex items-center gap-4
                        bg-gradient-to-r
                        from-[#fff7a8]
                        via-[#fff066]
                        to-[#ffeb3b]
                        shadow-md
                        ">

                    {/* LOGO TRÁI */}
                    <div className="w-50 h-50 flex-shrink-0 flex items-center justify-center">
                        <img
                            src="/images/logo-tinhnguyen.png"
                            alt="Hội bác sĩ tình nguyện"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* NỘI DUNG */}
                    <div className="flex-1 pl-0">

                        {/* TÊN HỘI */}
                        <p className="text-[20px] md:text-[22px] font-extrabold text-[#c62828] uppercase leading-tight">
                            HỘI BÁC SỸ TÌNH NGUYỆN
                        </p>

                        {/* TRỤ SỞ – 1 DÒNG */}
                        <p className="text-[16px] md:text-[18px] text-black font-semibold mt-1 uppercase leading-tight whitespace-nowrap">
                            TRỤ SỞ: SỐ 54, NGÕ 82, NGÁCH 15, YÊN LÃNG, THỊNH QUANG, ĐỐNG ĐA, HÀ NỘI
                        </p>

                        {/* ĐIỆN THOẠI */}
                        <p className="text-[16px] md:text-[18px] text-black font-semibold uppercase leading-tight">
                            ĐT: 0989.640.115
                        </p>

                        {/* TIÊU ĐỀ*/}
                        <div className="text-center mt-4">
                            <h1 className="text-[26px] md:text-[32px] font-extrabold text-[#d32f2f] uppercase">
                                PHIẾU KHÁM BỆNH NHÂN ĐẠO
                            </h1>

                            <p className="text-[17px] md:text-[18px] font-semibold text-black mt-1">
                                (Dành cho đối tượng có hoàn cảnh khó khăn)
                            </p>
                        </div>
                    </div>

                    {/* LOGO PHẢI */}
                    <div className="w-30 h-30 flex-shrink-0 flex items-center justify-center">
                        <img
                            src="/images/logo-health.png"
                            alt="Health"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </section>



            {/* ===== DIVIDER ===== */}
            <div className="max-w-6xl mx-auto px-4 mt-20">
                <div className="h-px bg-[#e0d6c8]" />
            </div>

            {/* ===== CHƯƠNG TRÌNH SẮP TỚI ===== */}
            <section className="max-w-6xl mx-auto px-4 mt-16">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-[4px] h-6 bg-[#c62828] rounded-full"></span>
                    <h2 className="text-xl md:text-2xl font-bold text-[#3e2723]">
                        Chương trình sắp tới
                    </h2>
                </div>

                <div className="space-y-5">
                    {[
                        {
                            title: "Khám bệnh cho người cao tuổi, người khó khăn",
                            date: "01/02/2026",
                            location: "Số 54 Yên Lãng, Đống Đa",
                            image: "/images/activity1.jpg",
                            slug: "/health/thang-1",


                        },
                        {
                            title: "Khám bệnh cho người cao tuổi, người khó khăn",
                            date: "05/02/2026",
                            location: "Số 54 Yên Lãng, Đống Đa",
                            image: "/images/activity2.jpg",
                            slug: "/health/thang-5",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-sm px-5 py-4 flex gap-5 items-center hover:shadow-md transition"
                        >
                            <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <span className="inline-block mb-1 text-xs px-2 py-[2px] rounded-full bg-green-100 text-green-700 font-medium">
                                    Sắp diễn ra
                                </span>

                                <p className="font-semibold text-sm text-[#3e2723] leading-snug">
                                    {item.title}
                                </p>

                                <div className="flex flex-wrap gap-4 text-xs text-[#8d6e63] mt-1">
                                    <span>📅 {item.date}</span>
                                    <span>📍 {item.location}</span>
                                </div>
                            </div>

                            <Link
                                href={item.slug}
                                className="text-[#3e2723] text-xl hover:translate-x-1 transition"
                            >
                                →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== HOẠT ĐỘNG ĐÃ DIỄN RA ===== */}
            <section className="max-w-6xl mx-auto px-4 mt-20 relative">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-[4px] h-6 bg-[#c62828] rounded-full"></span>
                    <h2 className="text-xl md:text-2xl font-bold text-[#3e2723]">
                        Hoạt động đã diễn ra
                    </h2>
                </div>

                {/* MŨI TÊN TRÁI */}
                <button
                    onClick={scrollLeft}
                    className="
            hidden md:flex
            absolute -left-4 top-1/2 -translate-y-1/2
            w-10 h-10
            bg-white rounded-full shadow
            items-center justify-center
            text-xl font-bold text-black
            hover:bg-gray-100 transition
        "
                >
                    ←
                </button>

                {/* MŨI TÊN PHẢI */}
                <button
                    onClick={scrollRight}
                    className="
            hidden md:flex
            absolute -right-4 top-1/2 -translate-y-1/2
            w-10 h-10
            bg-white rounded-full shadow
            items-center justify-center
            text-xl font-bold text-black
            hover:bg-gray-100 transition
        "
                >
                    →
                </button>

                <div
                    ref={activityRef}
                    className="flex gap-6 overflow-hidden scroll-smooth"
                >
                    {[
                        {
                            title: "Đo huyết áp",
                            date: "Tháng 12, 2025",
                            image: "/images/activity1.jpg",
                        },
                        {
                            title: "Khám tổng quát",
                            date: "Tháng 9, 2025",
                            image: "/images/activity2.jpg",
                        },
                        {
                            title: "Cấp thuốc miễn phí",
                            date: "Tháng 8, 2025",
                            image: "/images/activity1.jpg",
                        },
                        {
                            title: "Đo huyết áp",
                            date: "Tháng 2, 2025",
                            image: "/images/activity1.jpg",
                        },
                        {
                            title: "Cấp thuốc miễn phí",
                            date: "Tháng 8, 2025",
                            image: "/images/activity1.jpg",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[260px] bg-white rounded-3xl shadow-sm overflow-hidden"
                        >
                            <div className="h-52">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <p className="font-semibold text-[#3e2723]">
                                    {item.title}
                                </p>
                                <p className="text-sm text-[#8d6e63] mt-1">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
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

            {/* ================= FOOTER (gắn sau) ================= */}
            {/* <Footer /> */}
        </main>
    );
}
