export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2e3c3] text-gray-800">

      {/* ===== BANNER ===== */}
      <section className="relative mt-4 px-10">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/banner.jpg"
            alt="Mơ Phố"
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

    </div>
  );
}
