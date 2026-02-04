import Image from "next/image";

interface CafeCardProps {
  image: string;
  title: string;
  price: string;
  desc: string;
  badge?: string;
}

export default function CafeCard({
  image,
  title,
  price,
  desc,
  badge = "Nổi bật"
}: CafeCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-4 flex gap-5 items-center">
      {/* Image */}
      <div className="relative w-28 h-28 shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />

        {badge && (
          <span className="absolute bottom-0 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="text-orange-500 font-semibold text-sm">
            {price}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          “{desc}”
        </p> 

        <button
          className="mt-4 inline-flex items-center gap-2
                     bg-orange-500 text-white
                     px-4 py-2 rounded-full text-sm
                     hover:bg-orange-600 transition"
        >
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}
