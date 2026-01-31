import Image from "next/image";
const exploreItems = [
  {
    title: "Cafe",
    image: "/cafe-page/mopho.png",
    desc: "Hương vị của sự tĩnh lặng\n\nTừng hạt cà phê được tuyển chọn kỹ lưỡng,\nmang đến sự tỉnh thức nhẹ nhàng."

  },
  {
    title: "Books",
    image: "/cafe-page/mophobook.png",
    desc: "Hương vị của sự tĩnh lặng\n\nKhông gian đọc sách yên tĩnh, nơi tri thức và cảm xúc được nuôi dưỡng."
  },
  {
    title: "Health",
    image: "/cafe-page/health.png",
    desc: "Hương vị của sự tĩnh lặng\n\nChăm sóc sức khỏe từ những điều giản dị và chân thành."
  },
  {
    title: "Music",
    image: "/cafe-page/mophomusic.png",
    desc: "Hương vị của sự tĩnh lặng\n\nÂm nhạc chữa lành, kết nối cảm xúc trong từng khoảnh khắc."
  },
  {
    title: "Education",
    image: "/cafe-page/mophoeducation.png",
    desc: "Hương vị của sự tĩnh lặng\n\nLan tỏa tri thức và giá trị học tập bền vững."
  },
  {
    title: "Đồ Cũ",
    image: "/cafe-page/mophodocu.png",
    desc: "Hương vị của sự tĩnh lặng\n\nTái sử dụng – trao đi – tiếp nối vòng đời yêu thương."
  }
];


export default function BookPage() {
  return (
    <main className="bg-[#f6f3ef] min-h-screen px-6 py-10">

      {/* Banner */}
      <section className="max-w-6xl mx-auto mb-10">
        <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden">

          {/* Background image */}
          <Image
            src="/cafe-page/sample_3.png"
            alt="Mơ Phố Cafe"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl mx-auto mb-6 flex items-center justify-between">

        {/* Left title */}
        <h2 className="text-2xl font-semibold">Đồ cũ gây quỹ</h2>

        {/* Right tabs */}
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

      {/* Product Grid */}
      {/* <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <CafeCard key={i} />
        ))}
      </section> */}

      {/* Load more */}
      <div className="flex justify-center mt-10">
        <button className="border px-6 py-2 rounded-full hover:bg-gray-100">
          Xem thêm sản phẩm ↓
        </button>
      </div>

      {/* Meaning section */}
      <section className="max-w-6xl mx-auto mt-16">
        <div className="bg-[#f4e8dc] rounded-3xl px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Khám phá sách, Gieo Mầm Hạnh Phúc
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 italic text-sm md:text-base leading-relaxed">
            “Tại Mơ Phố, toàn bộ số tiền thu được sẽ đóng góp vào
            Quỹ thực hiện chương trình số 81 – khám chữa bệnh,
            cấp thuốc miễn phí cho bà con tại vùng khó khăn.”
          </p>
        </div>
      </section>

      <hr className="max-w-6xl mx-auto my-16 border-gray-300" />

      {/* Explore section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Khám Phá Không Gian Mơ Phố
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploreItems.map(item => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="inline-flex items-center gap-4 bg-[#f4f0eb] rounded-full px-5 py-3 mb-4">

                {/* Icon */}
                <div className="w-25 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold whitespace-nowrap">
                  {item.title}
                </h3>

              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-2 whitespace-pre-line">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </section>


    </main>
  );
}
