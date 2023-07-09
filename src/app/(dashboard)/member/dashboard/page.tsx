"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import BarcodeGenerator from "@/components/barcode-generator"
import { redirect } from "next/navigation"

const MemberDashboard = async () => {
<<<<<<< HEAD
  const [user, setUser] = useState([])
  
  // user 
  const { data: session, status } = useSession()
  // const username = session?.user.nama.toLowerCase()
  const username = session?.user.namaSertifikat

  // useEffect(() => {
  //   const getUser = async () => {
  //     const res = await fetch(`http://localhost:8080/api/route/admin/member?nama=${username}`, {
  //       credentials: "include",
  //       headers: { 'Content-Type': 'application/json'},
  //       method: 'GET'
  //     })
  //     const data = await res.json()
  //     setUser(data)
  //   }

  //   getUser()
  // }, [username])

  // console.log(user)
=======
>>>>>>> 3116bfafe9e2dae2870cb71865d30968b34862ad

  // user 
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    },
  })

  const user = session?.user


<<<<<<< HEAD
  // dummy sertificate
  // const fileUrl = "/file.pdf"

  return (
=======
>>>>>>> 3116bfafe9e2dae2870cb71865d30968b34862ad
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
<<<<<<< HEAD
              <h2 className="text-[24px] font-semibold">Profil User?</h2>
=======
              <h2 className="text-[24px] font-semibold">Profil Member</h2>
>>>>>>> 3116bfafe9e2dae2870cb71865d30968b34862ad

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

<<<<<<< HEAD
             <div>
=======
              <div className="w-[300px]">
                {user?.sertifikat ? 
                <div className="p-2 w-[300px] h-[400px] border border-gray-800 rounded-2xl flex justify-center items-center">
                  <h2 className="text-[#888] font-medium text-[18px]">Belum Memiliki Sertifikat</h2>
                </div>
                :
                <>
>>>>>>> 3116bfafe9e2dae2870cb71865d30968b34862ad
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