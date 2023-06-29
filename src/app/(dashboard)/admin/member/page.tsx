"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbPlus, TbUser } from "react-icons/tb"
import Link from "next/link"
import Image from "next/image"
import Search from "@/components/search"
import Sidebar from "@/components/sidebar"
import Table from "@/components/table"

const Member = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [member, setMember] = useState<[]>([]) 

  const handleShowDetail = () => (
    setShowDetail(!showDetail)
  )

  useEffect(() => {
    fetch(`http://localhost:8080/api/route/admin/member?nama=${search}`, {
      cache: 'no-store',
      mode: 'cors'
    })
    .then((res) => res.json())
    .then((data) => setMember(data.data))
    .catch((err) => {
      console.log(err)
    })
  }, [search]) 

  const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  return (
    <main className="bg-gray-100 h-full">
      <div className="flex gap-8 bg-gray-100">
        <div className="p-4 bg-gray-100 relative">
          <Sidebar path={'member'} />
        </div>
        <div className="h-[500vh] w-full inherit ml-[240px] flex flex-col gap-8 relative bg-gray-100">
          {/* navigation for member data */}
          <nav className="fixed w-[76.6%] bg-gray-100 right-[14px] flex justify-between items-center pb-6 pr-4 pt-6">
            <h3 className="font-medium text-[22px]">Membership</h3>

            {/* search */}
            <div className="flex items-center justify-between gap-6">
              <Search search={search} onSetSearch={onSetSearch} />
              <div className="flex gap-4 items-center justify-between">
                <Link href={`#`} className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                  <TbUser className="text-lg text-black" />
                </Link>
              </div>              

            </div>
          </nav>

          <div className="mt-[90px] mr-6 flex flex-col gap-6">
            <div className="flex justify-end">
              <button
                className="flex items-center gap-2 bg-transparent border-2 border-green-600 rounded-2xl px-4 py-2 text-green-600 font-medium text-[16px] hover:bg-green-600 hover:text-[#fff] duration-75"
              >
                <TbPlus className="text-lg" />
                Add Member
              </button>
            </div>

            <Table member={member} showDetail={showDetail} handleShowDetail={handleShowDetail}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Member