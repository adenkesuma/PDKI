"use client"
import { FC, useState } from "react"
import Navigation from "../../components/navigation.tsx"
import Image from "next/image"
import Banner from "@/../public/assets/images/image-banner.jpg"
import GetConnection from "@/components/get-connection.tsx"

interface TrainingVideoProps {}

const TrainingVideo: FC<TrainingVideoProps> = () => {
  const [show, setShow] = useState<Boolean>(false)

  const handleGetConnection = () => setShow(true)

  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        <Navigation />
        <figure className="relative">
          <Image 
            className="w-full h-[600px] object-cover bg-cover rounded-3xl md:rounded-br-3xl md:rounded-bl-3xl"
            src={Banner}
            alt="banner image"
          />
          <div className="flex flex-col items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-[50px] mb-2 text-center font-bold text-white">Video Pelatihan</h1>
            <button 
              className="px-6 duration-75 py-[8px] bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-center md:py-[12px] md:px-8 rounded-3xl text-[#274698] font-medium text-[16px] md:text-[18px]"
              onClick={handleGetConnection}
            >
              Tambah Koneksi
            </button>
          </div>
        </figure> 

        <h2 className="text-3xl font-bold my-12 text-center">Fitur lagi mainteinence</h2>
      </main>
      {show === true ? <GetConnection handleConnection={handleGetConnection} setShow={setShow}/> : ""}
    </>
  )
}

export default TrainingVideo
