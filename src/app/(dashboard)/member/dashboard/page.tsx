"use client"
import { useState, useEffect } from "react"
import { useSession, getSession } from "next-auth/react"
import Image from "next/image"
import { MemberProps } from "@/utils/interface"
import BarcodeGenerator from "@/components/barcode-generator"
// import useDownloader from "react-use-downloader"

const MemberDashboard = async () => {
  const [user, setUser] = useState([])
  
  // user 
  const { data: session, status } = useSession()
  // const username = session?.user.nama.toLowerCase()
  const username = session?.user.namaSertifikat

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`http://localhost:8080/api/route/admin/member?nama=${username}`, {
        credentials: "include",
        headers: { 'Content-Type': 'application/json'},
        method: 'GET'
      })
      const data = await res.json()
      setUser(data)
    }

    getUser()
  }, [username])

  console.log(user)

  // const { download } = useDownloader()

  // dummy sertificate
  // const fileUrl = "/file.pdf"
  // const filename = "file.pdf"

  return (
    // <>
    //     <div className="flex gap-8 mt-8">
    //       <aside className="flex flex-col justify-center items-center">
    //         <h2 className="text-center mb-3 font-semibold">Foto Profile</h2>
    //         <div className="w-[350px] h-[350px]">
    //           <Image
    //             src={user.length < 1 ? '' : user[0]?.pasFoto}
    //             alt={user.length < 1 ? '' : user[0]?.nama}
    //             width={200}
    //             height={200}
    //             className="w-full h-full object-cover bg-cover rounded-2xl"
    //           />
              
    //         </div>
    //         {/* barcode */}
    //         <h2 className="text-center mt-8 mb-3 text-[18px] font-semibold">Barcode User</h2>
    //         <div className="w-[300px] border rounded-2xl flex justify-center">
    //           <BarcodeGenerator code={user.length < 1 ? '' : user[0]?.npaPdki} />
    //         </div>
    //       </aside>
    //       <main className="bg-[#fff] rounded-2xl w-full p-8">
    //         <div className="flex flex-col gap-6 ">
    //           <h2 className="text-[24px] font-semibold">Profil User</h2>

    //           <div className="flex flex-col gap-3">
    //             <h3 className="text-[16px] font-medium text-[#333]">Nama: {user.length < 1 ? '' : user[0]?.nama}</h3>
    //             <span className="font-medium text-[16px] text-[#333]">Tempat Lahir: {user.length < 1 ? '' : user[0]?.tempatLahir}</span>
    //             <span className="font-medium text-[16px] text-[#333]">Tanggal Lahir: {user.length < 1 ? '' : user[0]?.tanggalLahir}</span>
    //             <span className="font-medium text-[16px] text-[#333]">Subspesialisasi: {user.length < 1 ? '' : user[0]?.subspesialisasi}</span>
    //             <span className="font-medium text-[16px] text-[#333]">No Seri: {user.length < 1 ? '' : user[0]?.noSeri}</span>
    //             <span className="font-medium text-[16px] text-[#333]">No Serkom: {user.length < 1 ? '' : user[0]?.noSerkom}</span>
    //             <span className="font-medium text-[16px] text-[#333]">No Idi: {user.length < 1 ? '' : user[0]?.noIdi}</span>
    //             <span className="font-medium text-[16px] text-[#333]">Npa PDKI: {user.length < 1 ? '' : user[0]?.npaPdki}</span>
    //           </div>

    //           <h2 className="text-[24px] font-semibold">Sertifikat</h2>

    //           <div>
    //             <Image 
    //               src={user.length < 1 ? '' : user[0]?.sertifikat}
    //               alt="sertifikat"
    //             />
    //             <button
    //               className="text-[#fff] hover:bg-blue-600 bg-rounded-2xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl"
    //               // onClick={() => download(fileUrl, filename)}
    //             >
    //               Download Sertifikat
    //             </button>
    //           </div>

    //         </div>
    //       </main>
    //     </div>  
    // </>
    <></>
  )
}

export default MemberDashboard