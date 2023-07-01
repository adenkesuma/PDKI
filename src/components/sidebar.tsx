"use client"
import { useState } from "react"
import { sidebarLinks } from "@/utils/links-text"
import { TbLayoutDashboard, TbLogout, TbNews, TbUsersGroup, TbVideo } from "react-icons/tb"
import Link from "next/link"
import { GiVideoConference } from "react-icons/gi"
import { signOut } from "next-auth/react"
// import { MemberLinkSidebar } from "@/utils/constant"

interface Props {
  selectedCategory: string;
  setSelectedCategory: (props: string) => void;
}

const Sidebar = ({ selectedCategory, setSelectedCategory } : Props) => {

  return (
    <aside className="bg-[#274698] rounded-2xl p-6 h-[95vh] w-[250px] fixed flex flex-col justify-between">
      <div>
        <h2 className="pl-6 text-[30px] font-bold text-[#fff]">PDKI</h2>

        <div className="flex flex-col gap-6 mt-14">
          {sidebarLinks.map((item) => (
            <div key={item.id}>
              <button 
                onClick={() => setSelectedCategory(item.link)}
                className={`flex flex-start gap-4 items-center pl-6 w-full rounded-xl p-2 ${selectedCategory === item.link ? 'active' : ''}`}
              >
                {
                  item.link === 'dashboard' ? <TbLayoutDashboard className={`text-lg ${selectedCategory === item.link ? 'text-[#274698]' : 'text-[#fff]'}`}/> : 
                  item.link === 'member' ? <TbUsersGroup className={`text-lg ${selectedCategory === item.link ? 'text-[#274698]' : 'text-[#fff]'}`}/> :
                  item.link === 'news' ? <TbNews className={`text-lg ${selectedCategory === item.link ? 'text-[#274698]' : 'text-[#fff]'}`}/> :
                  item.link === 'conference' ? <GiVideoConference className={`text-lg ${selectedCategory === item.link ? 'text-[#274698]' : 'text-[#fff]'}`}/> :
                  item.link === 'video' ? <TbVideo className={`text-lg ${selectedCategory === item.link ? 'text-[#274698]' : 'text-[#fff]'}`}/> : ''
                }
                <Link 
                  href={`${item.link}`}
                  className={`text-left font-medium ${selectedCategory === item.link ? 'font-semibold text-[#274698]' : 'text-[#fff]'}`}
                >
                  {item.text}
                </Link>
              </button> 
            </div>
          ))}
        </div>
      </div>

      <button 
      onClick={() => signOut({callbackUrl: '/'})}
      className="hover:bg-[#fff] hover:font-semibold hover:text-[#274698] duration-75 font-medium text-[#fff] flex justify-start pl-6 gap-4 items-center rounded-xl p-2">
        <TbLogout 
          className="text-lg"
        />
        <p>Logout</p>
      </button>
    </aside>
  ) 
}

export default Sidebar