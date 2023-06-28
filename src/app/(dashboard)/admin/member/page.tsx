"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import Search from "@/components/search"
import Sidebar from "@/components/sidebar"
import { TbUser } from "react-icons/tb"
import { MemberProps } from "@/utils/interface"

const Member = () => {
  const [search, setSearch] = useState<string>('')
  const [member, setMember] = useState<[]>([]) 

  useEffect(() => {
    fetch(`http://localhost:8080/api/route/admin/member?title=${search}`, {
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
    <main className="bg-gray-100">
      <div className="relative flex gap-8">
        <div className="p-4">
          <Sidebar path={'member'} />
        </div>
        <div className="h-[500vh] w-full inherit ml-[240px] flex flex-col gap-8 relative">
          <nav className="fixed w-[76.6%] bg-gray-100 right-[14px] flex justify-between items-center pb-6 pr-4 pt-6">
            <p className="font-medium text-[20px]">Member</p>

            {/* search */}
            <div className="flex items-center justify-between gap-6">
              <Search search={search} onSetSearch={onSetSearch} />
              <div className="flex gap-4 items-center justify-between">
                <div className="rounded-2xl bg-[#fff] shadow-md shadow-gray-300 p-3">
                  <TbUser className="text-lg text-black" />
                </div>
                <p className="">Nama Admin</p>
              </div>              
            </div>
          </nav>

          <div className="flex flex-col gap-6 mt-[92px] mr-[20px]">
            {member.map((item : MemberProps) => (
              <div key={item.memberId} className="bg-[#fff] rounded-2xl p-4 shadow-sm shadow-gray-300">
                <div>
                  <h3>Nama : {item.nama}</h3>
                  <p>Asal Institusi : {item.asalInstitusi}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}

export default Member