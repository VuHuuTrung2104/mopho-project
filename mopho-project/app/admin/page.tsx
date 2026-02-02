export default function AdminPage() {
  return (
    <div className="space-y-8">
      {/* ===== CARDS ===== */}
      <div className="grid grid-cols-4 gap-6">
        <Card title="DOANH THU TỔNG" value="15.000.000 VNĐ" note="+12.5% so với tháng trước" />
        <Card title="ĐƠN HÀNG MỚI" value="42" note="+2.5% hôm nay" />
        <Card title="SẢN PHẨM ĐANG BÁN" value="42" note="+3 vừa cập nhập" />
        <Card
          title="QUỸ GÂY QUỸ"
          value="45.000.000 VNĐ"
          note="+8.4% đạt 75% mục tiêu"
          highlight
        />
      </div>

      {/* ===== CHART + ORDERS ===== */}
      <div className="grid grid-cols-3 gap-6">
        {/* CHART */}
        <div className="col-span-2 bg-white rounded-xl p-6">
          <h3 className="font-semibold mb-1">Biểu đồ tăng trưởng</h3>
          <p className="text-sm text-gray-500 mb-4">
            Thống kê doanh thu & gây quỹ 6 tháng gần nhất
          </p>

          <div className="text-2xl font-bold mb-2">
            195.000.000 VNĐ <span className="text-green-500 text-sm">+10.2%</span>
          </div>

          {/* Fake chart */}
          <div className="h-48 bg-gradient-to-t from-blue-100 to-transparent rounded-lg" />
        </div>

        {/* ORDERS */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Đơn hàng gần đây</h3>
            <a className="text-blue-500 text-sm">Xem tất cả</a>
          </div>

          <Order name="Nguyễn Văn A" code="#ORD-5501" price="1.250k" status="XONG" />
          <Order name="Trần Thị B" code="#ORD-5498" price="890k" status="GIAO" />
          <Order name="Lê Văn C" code="#ORD-5495" price="450k" status="CHỜ" />
          <Order name="Phạm Minh D" code="#ORD-5492" price="2.100k" status="XONG" />

          <button className="mt-4 w-full border rounded-lg py-2 text-sm">
            Xuất báo cáo PDF
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function Card({
  title,
  value,
  note,
  highlight,
}: any) {
  return (
    <div
      className={`rounded-xl p-6 bg-white ${
        highlight ? "border border-blue-400" : ""
      }`}
    >
      <p className="text-xs text-gray-500 mb-2">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
      <p className="text-sm text-green-500 mt-2">{note}</p>
    </div>
  );
}

function Order({ name, code, price, status }: any) {
  return (
    <div className="flex justify-between items-center mb-3 text-sm">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-gray-500">Mã: {code}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{price}</p>
        <span
          className={`text-xs px-2 py-1 rounded ${
            status === "XONG"
              ? "bg-green-100 text-green-600"
              : status === "GIAO"
              ? "bg-blue-100 text-blue-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
