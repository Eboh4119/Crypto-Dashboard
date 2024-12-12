"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dashboard from "../screen/Dashboard";
import Profile from "../screen/Profile";
import Leader from "../screen/Leader";

interface MenuItem {
  id: number;
  name: string;
  image: string;
  content: React.JSX.Element;
}

function SideNav() {
  const [IsActive, setIsActive] = useState<boolean>(false);
  const [SelectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [menuItems, setmenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: 'Dashboard',
      image: '/dashb.svg',
      content: <Dashboard />
    },
    {
      id: 2,
      name: 'Profile',
      image: '/prof.svg',
      content: <Profile />
    },
    {
      id: 3,
      name: 'LeaderBoard',
      image: '/lead.svg',
      content: <Leader />
    },
  ]);

  useEffect(() => {
    if (menuItems.length > 0) {
      setSelectedMenu(menuItems[0]);
    }
  }, [menuItems]);

  const HandleMenuClick = (menu: React.SetStateAction<MenuItem | null>) => {
    setSelectedMenu(menu);
  }

  return (
    <>
    <div className="flex justify-start items-center gap-8">
      <div className="w-[200px] h-[813px] border-r border-white1">
        <nav className={`w-[132px] h-[813px] ml-6 text-white1 ${IsActive ? 'active' : ""}`}>
          <ul>
            {menuItems.map((menu, index) => (
              <li key={menu.id}>
                <button className="flex gap-2 items-center font-semibold py-3"
                onClick={() => HandleMenuClick(menu)}
                >
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    height={14}
                    width={14}
                  />
                  <span>{menu.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main className="w-[860px] h-[762px]">
            {SelectedMenu?.content}
        </main>
    </div>  
    </>
  );
};

export default SideNav;