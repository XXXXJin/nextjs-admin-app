"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
  MdLogout,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function SideBar() {
  const pathName = usePathname();

  return (
    <div className="p-6">
      <div className="flex items-center gap-6 p-2">
        <Image
          src="/noavatar.png"
          alt={""}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span>Haixu.jin</span>
          <span className="text-xs">管理者</span>
        </div>
      </div>
      <ul>
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index}>
              <h3 className="py-3">{menuItem.title}</h3>

              {menuItem.list.map((listItem, index) => {
                return (
                  <Link
                    key={index}
                    href={listItem.path}
                    className={clsx(
                      "flex items-center gap-3 p-2 hover:bg-slate-800 rounded-md mt-1",
                      {
                        "bg-slate-800": listItem.path === pathName,
                      }
                    )}
                  >
                    {listItem.icon}
                    {listItem.title}
                  </Link>
                );
              })}
              {menuItem.title === "User" && (
                <button
                  key={index}
                  className={clsx(
                    "flex items-center gap-3 p-2 hover:bg-slate-800 rounded-md mt-1 w-full"
                  )}
                >
                  <MdLogout />
                  Logout
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
