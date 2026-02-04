"use client";


import Image from "next/image";
import { useState } from "react";


const slides = [
{
image: "/home/slide1.png",
title: "Giới thiệu về chúng tôi",
desc: `Mơ phố là dự án gây quỹ cho các hoạt động nhân đạo của
Hội Bác Sĩ Tình Nguyện.
Đến với Mơ Phố bạn sẽ được chìm trong không gian của coffee, trà, rượu quế,
âm nhạc, sách, hội họa.`
},
{
image: "/home/slide2.jpg",
title: "Không gian nghệ thuật",
desc: "Nơi kết nối âm nhạc, hội họa và những tâm hồn đồng điệu."
}
];


export default function HeroSlider() {
const [active, setActive] = useState(0);


return (
<section className="relative max-w-6xl mx-auto mt-6 rounded-xl overflow-hidden">
<div className="relative h-[620px]">
<Image
src={slides[active].image}
alt="Mơ Phố"
fill
priority
className="object-cover"
/>


{/* Overlay */}
<div className="absolute inset-0 bg-black/40" />


{/* Content */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">
{slides[active].title}
</h2>


{/* Logo */}
<div className="bg-white rounded-2xl p-3 mb-4 shadow">
<Image
src="/home/logo.jpg"
alt="Hội bác sĩ tình nguyện"
width={72}
height={72}
/>
</div>


<p className="text-sm md:text-base max-w-3xl leading-relaxed whitespace-pre-line">
{slides[active].desc}
</p>
</div>
</div>


{/* Dots */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
{slides.map((_, i) => (
<button
key={i}
onClick={() => setActive(i)}
className={`w-3 h-3 rounded-full transition ${
i === active ? "bg-red-400" : "bg-white/70"
}`}
/>
))}
</div>
</section>
);
}