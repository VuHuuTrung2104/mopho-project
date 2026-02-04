"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  status: "Đang bán" | "Ngừng bán";
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Trà sen Mơ Phố", category: "Foods", status: "Đang bán" },
    { id: 2, name: "Nấm đông cô hữu cơ", category: "Chay", status: "Ngừng bán" },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [filterCategory, setFilterCategory] = useState("Tất cả");
  const [filterStatus, setFilterStatus] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editForm, setEditForm] = useState<Product | null>(null);


  // Form thêm sản phẩm
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    origin: "",
    description: "",
    charity: "",
    active: true,
  });

  const filteredProducts = products.filter((p) => {
    return (
      (filterCategory === "Tất cả" || p.category === filterCategory) &&
      (filterStatus === "Tất cả" || p.status === filterStatus) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleAddProduct = () => {
    const product: Product = {
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      status: newProduct.active ? "Đang bán" : "Ngừng bán",
    };

    setProducts([...products, product]);
    setShowAddModal(false);
    setNewProduct({
      name: "",
      category: "",
      origin: "",
      description: "",
      charity: "",
      active: true,
    });
  };

  return (
    <div className="flex gap-6">
      {/* ===== LEFT ===== */}
      <div className="flex-1 space-y-4">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Quản lý sản phẩm</h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              + Thêm sản phẩm
            </button>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex gap-3">
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option>Tất cả</option>
            <option>Foods</option>
            <option>Chay</option>
          </select>

          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option>Tất cả</option>
            <option>Đang bán</option>
            <option>Ngừng bán</option>
          </select>

          <input
            className="border rounded-lg px-4 py-2 text-sm flex-1"
            placeholder="Tìm kiếm sản phẩm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="text-left px-4 py-3">SẢN PHẨM</th>
                <th>DANH MỤC</th>
                <th>TRẠNG THÁI</th>
                <th>THAO TÁC</th>
              </tr>
            </thead>
<tbody>
  {filteredProducts.map((p) => (
    <tr key={p.id} className="border-t hover:bg-gray-50">
      {/* TÊN */}
      <td className="px-4 py-3 font-medium">{p.name}</td>

      {/* DANH MỤC - KHÔNG SỬA */}
      <td className="text-center">
        <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">
          {p.category}
        </span>
      </td>

      {/* TRẠNG THÁI */}
      <td className="text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            p.status === "Đang bán"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {p.status}
        </span>
      </td>

      {/* THAO TÁC */}
      <td className="text-center">
        <button
          onClick={() => {
            setEditingProduct(p);
            setEditForm({ ...p }); // clone để sửa
          }}
          className="text-blue-600 hover:underline text-sm"
        >
          Quản lý
        </button>
      </td>
    </tr>
  ))}
</tbody>


          </table>
        </div>
      </div>

      {/* ===== MODAL ADD PRODUCT ===== */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
          <div className="w-[420px] bg-white h-full p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Thêm sản phẩm mới</h2>
              <button onClick={() => setShowAddModal(false)}>✕</button>
            </div>

            <input
              className="border rounded-lg px-4 py-2 w-full text-sm"
              placeholder="Tên sản phẩm"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <select
              className="border rounded-lg px-4 py-2 w-full text-sm"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            >
              <option value="">Chọn danh mục</option>
              <option>Foods</option>
              <option>Chay</option>
            </select>

            <input
              className="border rounded-lg px-4 py-2 w-full text-sm"
              placeholder="Xuất xứ"
              value={newProduct.origin}
              onChange={(e) =>
                setNewProduct({ ...newProduct, origin: e.target.value })
              }
            />

            <textarea
              className="border rounded-lg px-4 py-2 w-full text-sm"
              placeholder="Mô tả sản phẩm"
              rows={3}
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />

            <textarea
              className="border rounded-lg px-4 py-2 w-full text-sm"
              placeholder="Ý nghĩa gây quỹ"
              rows={2}
              value={newProduct.charity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, charity: e.target.value })
              }
            />

            <div className="flex justify-between items-center">
              <span className="text-sm">Trạng thái kinh doanh</span>
              <button
                onClick={() =>
                  setNewProduct({
                    ...newProduct,
                    active: !newProduct.active,
                  })
                }
                className={`w-10 h-6 rounded-full ${
                  newProduct.active ? "bg-blue-600" : "bg-gray-300"
                } relative`}
              >
                <span
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition ${
                    newProduct.active ? "right-0.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 border rounded-lg py-2 text-sm"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleAddProduct}
                className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm"
              >
                Lưu sản phẩm
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
