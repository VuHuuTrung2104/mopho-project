export default function HomePage() {
  return (
    <div className="bg-[#f2e3c3] text-gray-800">
      {/* ===== BANNER ===== */}
      <section className="relative mt-4 px-10">
        <div className="relative rounded-xl overflow-hidden">
          <img
            className="w-full h-[380px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
            <h2 className="text-2xl font-semibold mb-4">
              Giới thiệu về chúng tôi
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed">
              Mơ Phố là dự án gây quỹ cho hoạt động nhân đạo của Hội Bác Sĩ
              Tình Nguyện. Không gian cà phê – tri thức – nghệ thuật, nơi
              kết nối con người và lan tỏa giá trị tử tế.
            </p>

            <div className="flex gap-2 mt-4">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white/50 rounded-full" />
              <span className="w-2 h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY TITLE ===== */}
      <section className="px-10 py-10">
        <h2 className="text-xl font-semibold text-center mb-8">
          Khám Phá Không Gian Mơ Phố
        </h2>

        {/* ===== CATEGORIES ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <Category
            title="Hương vị của sự tĩnh lặng"
            subtitle="Lan tỏa tri thức và học tập bền vững"
            icon="/icons/education.png"
            href="/education"
          />

          <Category
            title="Cafe"
            subtitle="Từng hạt cafe được tuyển chọn kỹ lưỡng"
            icon="/icons/cafe.png"
            href="/cafe"
          />

          <Category
            title="Sách"
            subtitle="Không gian đọc sách yên tĩnh"
            icon="/icons/books.png"
            href="/books"
          />

          <Category
            title="Sức khỏe"
            subtitle="Chăm sóc sức khỏe từ những điều giản dị"
            icon="/icons/health.png"
            href="/health"
          />

          <Category
            title="Âm nhạc"
            subtitle="Âm thanh chữa lành, kết nối cảm xúc"
            icon="/icons/music.png"
            href="/music"
          />

          <Category
            title="Đồ cũ"
            subtitle="Tái sử dụng đồ dùng"
            icon="/icons/gift.png"
            href="/gift"
          />
        </div>
      </section>
    </div>
    
  );
}

/* ===== CATEGORY COMPONENT ===== */
function Category({
  title,
  subtitle,
  icon,
  href,
}: {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-[#f8f5ee] p-5 rounded-xl shadow-sm
                 hover:shadow-md transition
                 flex flex-col items-center text-center gap-2"
    >
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />

      <h3 className="font-semibold leading-snug">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-snug">
        {subtitle}
      </p>
    </a>
  );
}
