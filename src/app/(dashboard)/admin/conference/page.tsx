"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import Sidebar from "@/components/sidebar"
import Search from "@/components/search"
import ConferenceData from "@/components/conference-data"
import Link from "next/link"
import { TbUser } from "react-icons/tb"
import NewsData from "@/components/news-data"

const Conference = () => {
  const [search, setSearch] = useState<string>('')
  const [conference, setConference] = useState<[]>([]) 

  useEffect(() => {
    fetch(`http://localhost:8080/api/route/conference?title=${search}`, {
      cache: 'no-store',
      mode: 'cors'
    })
    .then((res) => res.json())
    .then((data) => setConference(data.data))
    .catch((err) => {
      console.log(err)
    })
  }, [search]) 

  const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])  

  return (
    
        <div className="w-full inherit ml-[240px] flex flex-col gap-2 relative bg-gray-100 h-[5000px]">
          {/* navigation for conference data */}
          <nav className="sticky top-0 bg-gray-100 right-[14px] flex justify-between items-center pb-6 pr-4 pt-6 z-[999]">
            <h3 className="font-medium text-[22px]">Konferensi</h3>

            {/* search */}
            <div className="flex items-center justify-between gap-6">
              <Search search={search} onSetSearch={onSetSearch} />
              <div className="flex gap-4 items-center justify-between">
                <Link href={`#`} className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                  <TbUser className="text-lg text-[#888]" />
                </Link>
              </div>              

            </div>
          </nav>

          <div className="mr-6 flex flex-col gap-6">
            <ConferenceData conference={conference} />
          </div>
        </div>
  )
}

export default Conference

