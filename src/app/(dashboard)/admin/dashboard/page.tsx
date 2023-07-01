"use client"
import Sidebar from "@/components/sidebar"
import Search from "@/components/search"
import Link from "next/link"
import { TbUser } from "react-icons/tb"
import { getSession, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import DashboardData from "@/components/dashboard-data"
import { useEffect, useState } from "react"

const Dashboard = () => {
  const [news, setNews] = useState<[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/api/route/news')
    .then((res) => res.json())
    .then((data) => setNews(data.data))
    .catch((err) => console.log(err))
  }, [])

  // session
  const { data: session, status} = useSession()
  const router = useRouter()

  console.log(session?.user.username)

  if (status === "authenticated"){
    return (
      <div className="w-full inherit ml-[240px] flex flex-col gap-2 relative bg-gray-100">
        {/* navigation for dashboard data */}
        <nav className="sticky top-0 bg-gray-100 right-[14px] flex justify-between items-center pb-6 pr-4 pt-6 z-[999]">
          <h3 className="font-semibold text-[30px] text-[#1a1a1a]">Dashboard</h3>
  
          <div className="flex items-center justify-between gap-6">
            <div className="flex gap-4 items-center justify-between">
              <Link href={`#`} className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                <TbUser className="text-lg text-[#888]" />
              </Link>
            </div>              
          </div>
        </nav>

        <div className="mr-6 flex flex-col gap-6">
          <DashboardData news={news} />
        </div>
  
      </div> 
    )
  }
  if (status === "unauthenticated"){
    router.push("/")
  }
}
export default Dashboard