"use client";

import { useState } from "react";

type Status = "Mới" | "Đã liên hệ" | "Hoàn tất" | "Đã hủy";

interface Order {
  id: number;
  code: string;
  customer: string;
  phone: string;
  products: string;
  date: string;
  time: string;
  total: number;
  status: Status;
}

const MOCK_ORDERS: Order[] = [
  {
    id: 1,
    code: "#MP-1024",
    customer: "Nguyễn Văn An",
    phone: "0987-654-321",
    products: "Mơ Ngâm (2), Trà Đào (1)",
    date: "14/05/2024",
    time: "09:30",
    total: 385000,
    status: "Mới",
  },
  {
    id: 2,
    code: "#MP-1023",
    customer: "Trần Thị Bình",
    phone: "0901-222-333",
    products: "Mơ Sấy Dẻo (5)",
    date: "13/05/2024",
    time: "15:45",
    total: 890000,
    status: "Đã liên hệ",
  },
  {
    id: 3,
    code: "#MP-1022",
    customer: "Lê Văn C",
    phone: "0912-888-999",
    products: "Rượu Mơ (1)",
    date: "13/05/2024",
    time: "10:20",
    total: 450000,
    status: "Đã hủy",
  },
];

const TABS = ["Tất cả", "Mới", "Đã liên hệ", "Đã hủy"];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [status, setStatus] = useState<Status>("Mới");

  const filteredOrders =
    activeTab === "Tất cả"
      ? orders
      : orders.filter((o) => o.status === activeTab);

  const selectOrder = (order: Order) => {
    setSelectedOrder(order);
    setStatus(order.status);
  };

  const updateOrder = () => {
    if (!selectedOrder) return;

    setOrders((prev) =>
      prev.map((o) =>
        o.id === selectedOrder.id ? { ...o, status } : o
      )
    );

    setSelectedOrder({ ...selectedOrder, status });
    alert("✅ Đã cập nhật trạng thái đơn hàng");
  };

  return (
    <div className="flex gap-6">
      {/* ===== LEFT: ORDER LIST ===== */}
      <div className="flex-1 bg-white rounded-xl border">
        {/* FILTER TABS */}
        <div className="flex gap-2 px-6 py-4 border-b">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-sm rounded-md
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TABLE */}
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-6 py-3">Mã đơn</th>
              <th className="text-left px-6 py-3">Khách hàng</th>
              <th className="text-left px-6 py-3">Sản phẩm</th>
              <th className="text-left px-6 py-3">Ngày đặt</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o) => {
              const active = selectedOrder?.id === o.id;

              return (
                <tr
                  key={o.id}
                  onClick={() => selectOrder(o)}
                  className={`cursor-pointer border-t
                    ${
                      active
                        ? "bg-blue-50 border-l-4 border-l-blue-500"
                        : "hover:bg-gray-50"
                    }`}
                >
                  <td className="px-6 py-4 font-semibold text-blue-600">
                    {o.code}
                  </td>
                  <td className="px-6 py-4">
                    <div>{o.customer}</div>
                    <div className="text-xs text-gray-500">
                      {o.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">{o.products}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {o.date}
                    <br />
                    {o.time}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ===== RIGHT: DETAIL PANEL ===== */}
      {selectedOrder && (
        <div className="w-96 bg-white rounded-xl border p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">
              {selectedOrder.code}
            </h3>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
              {selectedOrder.status}
            </span>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs">Khách hàng</p>
              <p className="font-medium">{selectedOrder.customer}</p>
              <p className="text-gray-500">{selectedOrder.phone}</p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">Sản phẩm</p>
              <p>{selectedOrder.products}</p>
            </div>

            <div className="font-semibold text-blue-600">
              Tổng cộng: {selectedOrder.total.toLocaleString()}đ
            </div>

            <div>
              <p className="text-gray-500 text-xs mb-1">
                Cập nhật trạng thái
              </p>
              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as Status)
                }
                className="w-full border rounded-md px-3 py-2"
              >
                <option>Mới</option>
                <option>Đã liên hệ</option>
                <option>Hoàn tất</option>
                <option>Đã hủy</option>
              </select>
            </div>

            <button
              onClick={updateOrder}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
            >
              Cập nhật đơn hàng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
