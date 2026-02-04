import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
const exploreItems = [
  {
    title: "Cafe",
    image: "/cafe-page/mopho.png",
    href: "/cafe",
    desc: "Hương vị của sự tĩnh lặng\n\nTừng hạt cà phê được tuyển chọn kỹ lưỡng,\nmang đến sự tỉnh thức nhẹ nhàng."
  },
  {
    title: "Books",
    image: "/cafe-page/mophobook.png",
    href: "/books",
    desc: "Hương vị của sự tĩnh lặng\n\nKhông gian đọc sách yên tĩnh, nơi tri thức và cảm xúc được nuôi dưỡng."
  },
  {
    title: "Health",
    image: "/cafe-page/health.png",
    href: "/health",
    desc: "Hương vị của sự tĩnh lặng\n\nChăm sóc sức khỏe từ những điều giản dị và chân thành."
  },
  {
    title: "Music",
    image: "/cafe-page/mophomusic.png",
    href: "/music",
    desc: "Hương vị của sự tĩnh lặng\n\nÂm nhạc chữa lành, kết nối cảm xúc trong từng khoảnh khắc."
  },
  {
    title: "Education",
    image: "/cafe-page/mophoeducation.png",
    href: "/education",
    desc: "Hương vị của sự tĩnh lặng\n\nLan tỏa tri thức và giá trị học tập bền vững."
  },
  {
    title: "Đồ Cũ",
    image: "/cafe-page/mophodocu.png",
    href: "/docu",
    desc: "Hương vị của sự tĩnh lặng\n\nTái sử dụng – trao đi – tiếp nối vòng đời yêu thương."
  }
];
export default function Home() {
  return (
    <main className="min-h-screen bg-[#efe3c8]">

      <HeroSlider />

      <div className="max-w-6xl mx-auto my-16 border-t border-black/10" />
      
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Khám Phá Không Gian Mơ Phố
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exploreItems.map(item => (
              <Link
                key={item.title}
                href={item.href}
                className="group"
              >
                <div
                  className="h-full bg-white/90 backdrop-blur
                             rounded-2xl p-6 shadow-sm
                             cursor-pointer transition
                             hover:shadow-md hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="inline-flex items-center gap-4 bg-[#f4f0eb]
                                  rounded-full px-5 py-3 mb-4">

                    {/* Icon */}
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 bg-black/60 rounded-full
                                   opacity-0 group-hover:opacity-100
                                   flex items-center justify-center
                                   text-white text-xs font-medium transition"
                      >
                        Khám phá →
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold whitespace-nowrap">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}