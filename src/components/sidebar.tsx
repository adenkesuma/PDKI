"use client"
import { useState, FC } from "react"
import { sidebarLinks } from "@/utils/links-text"
import Link from "next/link"

const Sidebar = ({ path }) => {
  const [navActive, setNavActive] = useState<string>('')

  const handleNavClick = (path: string) => {
    setNavActive(path)
  }

  return (
    <aside className="bg-[#274698] rounded-2xl p-6 h-[95vh] w-[250px] fixed">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((item) => (
          <button 
            key={item.id} 
            onClick={() => handleNavClick(item.link)}
            className={`w-full rounded-xl p-2 ${path === item.link ? 'active' : ''}`}
          >
            <Link 
              href={`${item.link}`}
              className={`text-left font-medium ${path === item.link ? 'font-semibold text-[#274698]' : 'text-[#fff]'}`}
            >
              {item.text}
            </Link>
          </button>
        ))}
      </div>
    </aside>
  ) 
}

export default Sidebar