"use client";

import { useState } from "react";

type Program = {
  id: number;
  name: string;
  time: string;
  status: "Upcoming" | "Completed";
  editing?: boolean;
};

export default function ContentPage() {
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: 1,
      name: "Sức khỏe Cộng đồng Q1",
      time: "10/01 - 20/01/2024",
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Khám sức khỏe người cao tuổi",
      time: "01/12 - 05/12/2023",
      status: "Completed",
      editing: true,
    },
    {
      id: 3,
      name: "Tư vấn Dinh dưỡng Học đường",
      time: "15/02 - 18/02/2024",
      status: "Upcoming",
    },
  ]);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Quản lý nội dung</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          + Thêm chương trình mới
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-4 py-3">Tên chương trình</th>
              <th>Thời gian</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {programs.map((p) => (
              <tr key={p.id} className="border-t hover:bg-gray-50">
                {/* NAME */}
                <td className="px-4 py-3 font-medium">{p.name}</td>

                {/* TIME */}
                <td className="text-center text-gray-600">{p.time}</td>

                {/* STATUS */}
                <td className="text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      p.status === "Upcoming"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                {/* ACTION */}
                <td className="text-center">
                  {p.editing ? (
                    <span className="px-3 py-1 rounded-lg text-xs bg-blue-100 text-blue-600 font-medium">
                      Đang sửa
                    </span>
                  ) : (
                    <button className="text-blue-600 hover:underline text-sm">
                      Quản lý
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
