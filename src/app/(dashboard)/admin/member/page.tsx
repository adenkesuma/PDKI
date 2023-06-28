"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbUser } from "react-icons/tb"
// import Image from "next/image"
import Search from "@/components/search"
import Sidebar from "@/components/sidebar"
import BarcodeGenerator from "@/components/barcode-generator"

const Member = () => {
  const [search, setSearch] = useState<string>('')
  const [member, setMember] = useState<[]>([]) 

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
    <main className="bg-gray-100">
      <div className="relative flex gap-8">
        <div className="p-4">
          <Sidebar path={'member'} />
        </div>
        <div className="h-[500vh] w-full inherit ml-[240px] flex flex-col gap-8 relative bg-gray-100">
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

          <div className="flex flex-col gap-6 mt-[92px] mr-[20px] bg-gray-100 pb-4">
            {member.map((item : MemberProps) => (
              <div key={item.memberId} className="bg-[#fff] rounded-2xl p-4 shadow-sm shadow-gray-300 flex justify-between items-center">
                <div>
                  <h3 className="text-[18px] font-medium">Nama : {item.nama}</h3>
                  <p className="text-[15px] font-medium text-[#666]">Asal Institusi : {item.asalInstitusi}</p>
                </div>
                <div className="flex gap-4 items-center">
                  {/* <Image 
                    width={200}
                    height={200}
                    className="w-[200px] h-[200px]"
                    src={`${item.pasFoto}`} 
                    alt={item.nama} 
                  /> */}
                  <BarcodeGenerator code={item.noIdi} />
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