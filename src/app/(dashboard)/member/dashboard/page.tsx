"use client"
import { useState, useEffect } from "react"
import { useSession, getSession } from "next-auth/react"
import Image from "next/image"
import { MemberProps } from "@/utils/interface"
import BarcodeGenerator from "@/components/barcode-generator"
import Link from "next/link"

const MemberDashboard = async () => {
  const [user, setUser] = useState<MemberProps[]>([])
  
  // user 
  const { data: session, status } = useSession()
  const username = session?.user.nama.toLowerCase()

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`http://localhost:8080/api/route/admin/member?nama=${username}`)
      const data = await res.json()
      setUser(data.data)
    }

    getUser()
  }, [])
  console.log(username, 'username')

  return (
    <>
      {/* data user */}
      {user.map((item) => (
        <div key={item.memberId} className="flex gap-8">
          <aside>
            <div className="w-[350px] h-[350px]">
              <Image
                src={item.pasFoto}
                alt={item.nama}
                width={200}
                className="w-full h-full object-cover bg-cover rounded-2xl"
                height={200}
              />
            </div>
          </aside>
          <main className="bg-[#fff] rounded-2xl w-full p-8">
            <div className="flex justify-between gap-6 items-center">
              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-semibold text-[#1a1a1a]">Nama: {item.nama}</h3>
                <span className="font-medium text-[16px] text-[#333]">Tempat Lahir: {item.tempatLahir}</span>
                <span className="font-medium text-[16px] text-[#333]">Tanggal Lahir: {item.tanggalLahir}</span>
                <span className="font-medium text-[16px] text-[#333]">Subspesialisasi: {item.subspesialisasi}</span>
                <span className="font-medium text-[16px] text-[#333]">No Seri: {item.noSeri}</span>
                <span className="font-medium text-[16px] text-[#333]">No Serkom: {item.noSerkom}</span>
                <span className="font-medium text-[16px] text-[#333]">No Idi: {item.noIdi}</span>
                <span className="font-medium text-[16px] text-[#333]">Npa PDKI: {item.npaPdki}</span>
              </div>

              {/* barcode */}
              <div className="w-[300px] border rounded-2xl">
                <BarcodeGenerator code={item.npaPdki} />
              </div>
            </div>
          </main>
        </div>
      ))}
    </>
  )
}

export default MemberDashboard