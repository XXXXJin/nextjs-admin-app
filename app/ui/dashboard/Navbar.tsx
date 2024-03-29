"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
export default function Navbar() {
  const pathName = usePathname();
  const getPageName = (pathName: string) => {
    const name = pathName.split("/").pop();
    if (name === "dashboard") return "デジタルダッシュボード";
    if (name === "users") return "ユーザー一覧";
    if (name === "products") return "商品一覧";
    if (name === "addProducts") return "新規商品追加";
    if (name === "addUsers") return "新規ユーザー追加";
  };
  const pageName = getPageName(pathName);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 rounded-md">
      <p>{pageName}</p>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-md">
          <MdSearch />
          <input
            type="text"
            placeholder="何かをお探しですか？"
            className="bg-transparent border-none focus:outline-none"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
