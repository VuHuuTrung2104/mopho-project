import Image from "next/image";
import Link from "next/link";
import CafeCard from "@/app/components/Cardprd/CafeCard";

const menuTabs = ["Tất cả", "Đồ nóng", "Đồ lạnh", "Cafe", "Trà"];

const products = [
  {
    image: "/cafe/b1.jpg",
    title: "Latte Hạt Sen",
    price: "50,000đ",
    desc: "Sự kết hợp tinh tế giữa cà phê Ý hiện đại và hương sen Việt trong từng ngụm sâu lắng."
  },
  {
    image: "/cafe/b2.jpg",
    title: "Latte Hạt Sen",
    price: "50,000đ",
    desc: "Sự kết hợp tinh tế giữa cà phê Ý hiện đại và hương sen Việt trong từng ngụm sâu lắng."
  },
  {
    image: "/cafe/b3.jpg",
    title: "Latte Hạt Sen",
    price: "50,000đ",
    desc: "Sự kết hợp tinh tế giữa cà phê Ý hiện đại và hương sen Việt trong từng ngụm sâu lắng."
  },
  {
    image: "/cafe/b4.jpg",
    title: "Latte Hạt Sen",
    price: "50,000đ",
    desc: "Sự kết hợp tinh tế giữa cà phê Ý hiện đại và hương sen Việt trong từng ngụm sâu lắng."
  },
  {
    image: "/cafe/b5.jpg",
    title: "Latte Hạt Sen",
    price: "50,000đ",
    desc: "Sự kết hợp tinh tế giữa cà phê Ý hiện đại và hương sen Việt trong từng ngụm sâu lắng."
  },
  {
    image: "/cafe/b6.jpg",
    title: "Latte Hạt Sen",
    price: "50,000đ",
    desc: "Sự kết hợp tinh tế giữa cà phê Ý hiện đại và hương sen Việt trong từng ngụm sâu lắng."
  }
];
const exploreItems = [
  {
    title: "Cafe",
    image: "/cafe-page/mopho.png",
    href: "/cafe",
    desc:
      "Hương vị của sự tĩnh lặng\n\nTừng hạt cà phê được tuyển chọn kỹ lưỡng,\nmang đến sự tỉnh thức nhẹ nhàng."
  },
  {
    title: "Books",
    image: "/cafe-page/mophobook.png",
    href: "/books",
    desc:
      "Hương vị của sự tĩnh lặng\n\nKhông gian đọc sách yên tĩnh, nơi tri thức và cảm xúc được nuôi dưỡng."
  },
  {
    title: "Health",
    image: "/cafe-page/health.png",
    href: "/health",
    desc:
      "Hương vị của sự tĩnh lặng\n\nChăm sóc sức khỏe từ những điều giản dị và chân thành."
  },
  {
    title: "Music",
    image: "/cafe-page/mophomusic.png",
    href: "/music",
    desc:
      "Hương vị của sự tĩnh lặng\n\nÂm nhạc chữa lành, kết nối cảm xúc trong từng khoảnh khắc."
  },
  {
    title: "Education",
    image: "/cafe-page/mophoeducation.png",
    href: "/education",
    desc:
      "Hương vị của sự tĩnh lặng\n\nLan tỏa tri thức và giá trị học tập bền vững."
  },
  {
    title: "Đồ Cũ",
    image: "/cafe-page/mophodocu.png",
    href: "/2hand",
    desc:
      "Hương vị của sự tĩnh lặng\n\nTái sử dụng – trao đi – tiếp nối vòng đời yêu thương."
  }
];

export default function SecondHandPage() {
  return (
    <main className="bg-[#f6f3ef] min-h-screen px-6 py-10">

      {/* ===== Banner ===== */}
      <section className="max-w-6xl mx-auto mb-10">
        <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden">
          <Image
            src="/cafe-page/sample_3.png"
            alt="Đồ cũ gây quỹ"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* ===== Tabs ===== */}
      <section className="max-w-6xl mx-auto mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Đồ cũ gây quỹ</h2>

        <div className="flex gap-6 text-sm text-gray-600">
          {["Tất cả", "Đồ sứ", "Điện tử", "Nhựa", "Dụng cụ"].map(tab => (
            <button
              key={tab}
              className="hover:text-orange-600 transition"
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12 relative">
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300" />

          {products.map((item, index) => (
            <CafeCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* ===== Load more ===== */}
      <div className="flex justify-center mt-10">
        <button className="border px-6 py-2 rounded-full bg-white/80 hover:bg-white transition">
          Xem thêm sản phẩm ↓
        </button>
      </div>

      {/* ===== Meaning ===== */}
      <section className="max-w-6xl mx-auto mt-16">
        <div className="bg-[#f4e8dc] rounded-3xl px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Đồ Cũ – Giá Trị Mới
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 italic text-sm md:text-base leading-relaxed">
            “Mỗi món đồ được trao đi là một hành động yêu thương.
            Toàn bộ số tiền gây quỹ sẽ được dùng cho các chương trình
            thiện nguyện và hỗ trợ cộng đồng.”
          </p>
        </div>
      </section>

      <hr className="max-w-6xl mx-auto my-16 border-gray-300" />

      {/* ===== Explore ===== */}
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
                className="h-full bg-white rounded-2xl p-6 shadow-sm
                           cursor-pointer transition
                           hover:shadow-md hover:-translate-y-1"
              >
                {/* Header */}
                <div className="inline-flex items-center gap-4 bg-[#f4f0eb] rounded-full px-5 py-3 mb-4">
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

    </main>
  );
}
