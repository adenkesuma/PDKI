"use client"
import BackNavigate from "@/components/back-navigate"
import BarcodeGenerator from "@/components/barcode-generator"
import { MemberProps } from "@/utils/interface"
import Image from "next/image"
import { useEffect, useState } from "react"

const MemberDetil = ({
  params: { memberId }
}: {
  params: { memberId: string }
}) => {

  const [member, setMember] = useState<MemberProps>({
    nama: "",
    username: "",
    password: "",
    namaSertifikat: "",
    subspesialisasi: "",
    asalInstitusi: "",
    pasFoto: "",
    sertifikat: "",
    noSeri: "",
    noSerkom: "",
    tempatLahir: "",
    tanggalLahir: "",
    noIdi: "",
    npaPdki: null,
    createdAt: "",
    updatedAt: "",
    isExLeader: false,
    isLeader: false
  })

  useEffect(() => {
    const fetchMember = () => {
      fetch(`http://localhost:8080/api/route/admin/member/${memberId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
        .then((res) => res.json())
        .then((data) => {
          setMember(data)
        })
        .catch((err) => {
          console.log("Error fetching data", err);
        })
    }

    fetchMember()
  }, [member])

  return (
    <div className="w-full my-10 flex flex-col ml-[240px]">
      <BackNavigate path="/member" text="User Detail" />

      <div className="flex justify-evenly gap-8 bg-[#fff] py-12 px-8 rounded-2xl mr-8">
        <div>
          <Image
            className="w-[150px] h-[200px] object-cover rounded-xl"
            alt="profile user"
            src={member?.pasFoto}
            width={150}
            height={200}
          />
          <h2 className="mt-6 text-center font-semibold text-[20px] text-[#1a1a1a]">{member?.namaSertifikat}</h2>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[18px] text-[#333] font-medium">Nama: {member?.nama}</span>
          <span className="text-[18px] text-[#333] font-medium">Npa PDKI: {member?.npaPdki}</span>
          <span className="text-[18px] text-[#333] font-medium">Nomor Idi: {member?.noIdi}</span>
          <span className="text-[18px] text-[#333] font-medium">Nomor Seri: {member?.noSeri}</span>
          <span className="text-[18px] text-[#333] font-medium">Nomor Serkom: {member?.noSerkom}</span>
          <span className="text-[18px] text-[#333] font-medium">Tanggal Lahir: {member?.tanggalLahir}</span>
          <span className="text-[18px] text-[#333] font-medium">Tempat Lahir: {member?.tempatLahir}</span>
          <div className="mt-6 w-[200px]">
            <span className="text-[18px] text-[#333] font-medium">Barcode User</span>
            <BarcodeGenerator code={member?.npaPdki} />
          </div>
        </div>

        <div className="w-[35%] h-[500px] flex flex-col items-center gap-8">
          <div className="border border-gray-300 w-full h-full rounded-xl p-4 flex justify-center items-center">
            {member?.sertifikat ?
              <h2 className="text-center text-[#888] font-medium text-[18px]">Belum Memiliki Sertifikat</h2> :
              <Image
                width={300}
                height={300}
                src={member?.sertifikat}
                alt="sertifikat"
                className="w-full"
              />
            }
          </div>
          <a
            className="bg-[#274698] hover:bg-blue-700 duration-75 text-center rounded-xl py-2 px-4 text-[#fff] font-medium"
            href={member?.sertifikat}
            rel="noopener noreferrer"
            download={true}
          >
            Download Sertifikat
          </a>
        </div>

      </div>
    </div>
  )
}

export default MemberDetil