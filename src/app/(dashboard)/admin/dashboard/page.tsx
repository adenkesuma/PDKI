"use client"
import Sidebar from "@/components/sidebar"
import Search from "@/components/search"
import Link from "next/link"
import { TbUser } from "react-icons/tb"
import { getSession, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import DashboardData from "@/components/dashboard-data"
import { useEffect, useState } from "react"
import { fetchData, options } from "@/lib/fetch/dashboard-fetch"

const Dashboard = () => {
  const [member, setMember] = useState([])
  const [news, setNews] = useState([])
  const [conference, setConference] = useState([])

  // session
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })

  useEffect(() => {

    const fetchAllData = async () => {
      const memberUrl = "http://localhost:8080/api/route/admin/member"
      const newsUrl = "http://localhost:8080/api/route/news"
      const conferenceUrl = "http://localhost:8080/api/route/conference"

      // fetching member data
      const memberData = await fetchData(
        `${memberUrl}`,
        options
      )
      setMember(memberData.data)
      // fetching news data
      const newsData = await fetchData(
        `${newsUrl}`,
        options
      )
      setNews(newsData.data)

      // fetching conference data
      const conferenceData = await fetchData(
        `${conferenceUrl}`,
        options
      )
      setConference(conferenceData.data)
    }

    fetchAllData()
  }, [])

  const totalMember = member?.length
  const totalNews = news?.length
  const totalConference = conference?.length

  if (status === "authenticated") {
    return (
      <div className="w-full inherit flex flex-col gap-2 relative bg-gray-100">
        {/* navigation for dashboard data */}
        <nav className="sticky top-0 ml-[236px] bg-gray-100 right-[14px] flex justify-between items-center pb-6 pr-4 pt-6 z-[999]">
          <h3 className="font-semibold text-[30px] text-[#1a1a1a]">Dashboard</h3>

          <div className="flex items-center justify-between gap-6">
            <div className="flex gap-4 items-center justify-between">
              <Link href={`#`} className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                <TbUser className="text-lg text-[#888]" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="mr-6 flex flex-col ml-[240px] gap-6">
          <DashboardData
            news={news}
            conference={conference}
            member={member}
            totalNews={totalNews}
            totalMember={totalMember}
            totalConference={totalConference}
          />
        </div>

      </div>
    )
  }
}

export default Dashboard
