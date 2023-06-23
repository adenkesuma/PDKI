"use client"
import { FC, useState } from "react"
import Link from "next/link"
import Navigation from "../../components/navigation.tsx"
import Image from "next/image"
import Banner from "@/../public/assets/images/image-banner.jpg"
import GetConnection from "@/components/get-connection.tsx"
import { ProvinsiIndonesia } from "@/utils/constant.tsx"
import { TbChevronRight } from "react-icons/tb"
import LatestNews from "@/components/latest-news.tsx"
import PDKIConference from "@/components/pdki-conference.tsx"

interface PDKIRegionsProps {}

const PDKIRegions: FC<PDKIRegionsProps> = () => {
  const [show, setShow] = useState<Boolean>(false)

  const handleGetConnection = () => setShow(true)
  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        <Navigation />
        <figure className="relative">
              <Image 
                className="w-full h-[600px] object-cover bg-cover rounded-br-3xl rounded-bl-3xl"
                src={Banner}
                alt="banner image"
              />
              <div className="flex flex-col items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-[50px] mb-2 text-center font-bold text-white">Wilayah PDKI</h1>
                <button 
                  className="px-6 duration-75 py-[8px] bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-center md:py-[12px] md:px-8 rounded-3xl text-[#274698] font-medium text-[16px] md:text-[18px]"
                  onClick={handleGetConnection}
                >
                  Tambah Koneksi
                </button>
              </div>
        </figure>  

        <section className="mt-8 px-6 mb-8">
          <h2 className="font-semibold text-[30px] mb-6">Region News</h2>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
            <h3 className="text-xl font-semibold text-[#333]">Filter sesuai provinsi</h3>
            <select className="rounded-xl p-2 bg-[#274698] text-white">
              {ProvinsiIndonesia.map((prov, idx) => (
                <option value={prov} key={idx}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
          <LatestNews />
          <PDKIConference />
        </section>
      </main>
      {show === true ? <GetConnection handleConnection={handleGetConnection} setShow={setShow}/> : ""}
    </>
  )
}

export default PDKIRegions
