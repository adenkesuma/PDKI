"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import BarcodeGenerator from "@/components/barcode-generator"
import { redirect } from "next/navigation"

const MemberDashboard = async () => {

  // user 
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })

  const user = session?.user


  if (user?.npaPdki !== undefined) {
    return (
      <>
        {/* data user */}
        <div key={user?.npaPdki} className="flex items-start gap-8 mt-8">
          <aside className="flex flex-col justify-center items-center">
            <div className="w-[350px] h-[450px]">
              <Image
                src={user?.pasFoto}
                alt={user?.nama}
                width={200}
                className="w-full h-full object-cover bg-cover rounded-2xl"
                height={200}
              />

            </div>
            {/* barcode */}
            <h2 className="text-center mt-8 mb-3 text-[18px] font-semibold">Barcode User</h2>
            <div className="w-[300px] border rounded-2xl flex justify-center">
              <BarcodeGenerator code={user?.npaPdki} />
            </div>
          </aside>
          <main className="bg-[#fff] rounded-2xl w-full p-8">
            <div className="flex flex-col gap-6 ">
              <h2 className="text-[24px] font-semibold">Profil Member</h2>

              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] font-medium text-[#333]">Nama: {user?.nama}</h3>
                <span className="font-medium text-[16px] text-[#333]">Tempat Lahir: {user?.tempatLahir}</span>
                <span className="font-medium text-[16px] text-[#333]">Tanggal Lahir: {user?.tanggalLahir}</span>
                <span className="font-medium text-[16px] text-[#333]">Subspesialisasi: {user?.subspesialisasi}</span>
                <span className="font-medium text-[16px] text-[#333]">No Seri: {user?.noSeri}</span>
                <span className="font-medium text-[16px] text-[#333]">No Serkom: {user?.noSerkom}</span>
                <span className="font-medium text-[16px] text-[#333]">No Idi: {user?.noIdi}</span>
                <span className="font-medium text-[16px] text-[#333]">Npa PDKI: {user?.npaPdki}</span>
              </div>

              <h2 className="text-[24px] font-semibold">Sertifikat</h2>

              <div className="w-[300px]">
                {user?.sertifikat ? 
                <div className="p-2 w-[300px] h-[400px] border border-gray-800 rounded-2xl flex justify-center items-center">
                  <h2 className="text-[#888] font-medium text-[18px]">Belum Memiliki Sertifikat</h2>
                </div>
                :
                <>
                <Image
                  src={user?.sertifikat}
                  alt="sertifikat"
                  width={300}
                  height={400}
                />
                <button
                  className="text-[#fff] hover:bg-blue-600 bg-rounded-2xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl mt-6 w-full"
                // onClick={() => download(fileUrl, filename)}
                >
                  Download Sertifikat
                </button>
                </>
                }
                
                
              </div>

            </div>
          </main>
        </div>
      </>
    )
  } else {
    redirect('/');
  }
}

export default MemberDashboard