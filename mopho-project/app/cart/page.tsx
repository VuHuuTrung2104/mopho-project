import Image from "next/image";
import Link from "next/link";
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

const cartItems = [
    {
        id: 1,
        title: "Latte Hạt Sen",
        image: "/cafe/latte1.jpg",
        price: 50000,
        quantity: 1,
        desc: "Cà phê sữa"
    },
    {
        id: 2,
        title: "Latte Hạt Sen",
        image: "/cafe/latte2.jpg",
        price: 50000,
        quantity: 1,
        desc: "Cà phê sữa"
    }
];


export default function CartPage() {
    return (
        <main className="relative min-h-screen">

            {/* ===== Background toàn page ===== */}
            <div className="absolute inset-0 bg-[url('/background/background.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-[#f6f3ef]/85 backdrop-blur-[1px]" />

            <div className="relative z-10 px-6 py-10">

                {/* ===== Banner ===== */}
                <section className="max-w-6xl mx-auto mb-12">
                    <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden shadow-md">
                        <Image
                            src="/cafe-page/sample.jpg"
                            alt="Mơ Phố Cafe"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* ===== Tabs ===== */}
                <section className="max-w-6xl mx-auto mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Thực đơn</h2>

                    <div className="flex gap-6 text-sm text-gray-600">
                        {["Tất cả", "Đồ nóng", "Đồ lạnh", "Cafe", "Trà"].map(tab => (
                            <button
                                key={tab}
                                className="hover:text-orange-600 transition"
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </section>

                {/* ===== Cart ===== */}
                <section className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT: Cart items */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold mb-6">Giỏ hàng của bạn</h2>

                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm"
                                >
                                    {/* Info */}
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={64}
                                            height={64}
                                            className="rounded-lg object-cover"
                                        />

                                        <div>
                                            <h3 className="font-medium">{item.title}</h3>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                            <button className="text-xs text-orange-500 mt-1 hover:underline">
                                                Loại bỏ
                                            </button>
                                        </div>
                                    </div>

                                    {/* Price + qty */}
                                    <div className="text-right">
                                        <p className="font-medium">{item.price.toLocaleString()}đ</p>

                                        <div className="flex items-center gap-2 mt-2 justify-end">
                                            <button className="w-6 h-6 rounded-full border text-sm">-</button>
                                            <span className="text-sm">{item.quantity}</span>
                                            <button className="w-6 h-6 rounded-full border text-sm">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Summary */}
                    <div className="bg-white rounded-3xl p-6 shadow-md h-fit">
                        <h3 className="font-semibold mb-4">Tóm tắt đơn hàng</h3>

                        <div className="flex justify-between text-sm mb-2">
                            <span>Tạm tính (2 sản phẩm):</span>
                            <span>100.000đ</span>
                        </div>

                        <div className="flex justify-between text-sm mb-4">
                            <span>Phí vận chuyển:</span>
                            <span className="text-green-600">Miễn phí</span>
                        </div>

                        <div className="flex justify-between font-semibold text-lg border-t pt-4">
                            <span>Tổng cộng</span>
                            <span className="text-orange-600">100.000đ</span>
                        </div>

                        {/* Charity note */}
                        <div className="mt-6 bg-green-50 text-green-700 text-xs p-4 rounded-xl leading-relaxed">
                            🌱 Một phần doanh thu từ đơn hàng này sẽ được đóng góp
                            trực tiếp vào các dự án gieo ước mơ vùng cao.
                            Cảm ơn bạn đã cùng Mơ Phố gieo mầm ước mơ.
                        </div>

                        <Link href="/pay" className="block">
                            <button
                                className="w-full mt-6 bg-orange-600 hover:bg-orange-700 
               text-white py-3 rounded-full font-medium transition"
                            >
                                Xác nhận & Ủng hộ
                            </button>
                        </Link>
                    </div>
                </section>


                {/* ===== Meaning ===== */}
                <section className="max-w-6xl mx-auto mt-16">
                    <div className="bg-[#f4e8dc] rounded-3xl px-6 py-12 text-center shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Uống Cà Phê, Gieo Mầm Hạnh Phúc
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-700 italic text-sm md:text-base leading-relaxed">
                            “Tại Mơ Phố, toàn bộ số tiền thu được sẽ đóng góp vào
                            Quỹ thực hiện chương trình số 81 – khám chữa bệnh,
                            cấp thuốc miễn phí cho bà con tại vùng khó khăn.”
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