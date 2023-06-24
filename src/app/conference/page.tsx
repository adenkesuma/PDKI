"use client"
import { useState } from "react"
import { TbArrowUpRight } from "react-icons/tb"
import { filterDropdownConference } from "@/utils/constant"
import Link from "next/link"
import Navigation from "@/components/navigation"
import GetConnection from "@/components/get-connection"
import Image from "next/image"
import Banner from "@/../public/assets/images/image-banner.jpg"

interface ConferenceProps {
  id: number;
  title: string;
  content: string;
  description: string;
  publishedDate: string;
  image: string;
  video: string;
  tags: string;
  categories: string;
  published: boolean;
}

async function getData() {
  const res = await fetch('http://localhost:8080/api/route/conference')

  if(!res.ok) {
    throw new Error("Failed to load")
  }

  const data = await res.json()

  return data.data
}

const Conference = async () => {
  const [show, setShow] = useState(false)
  const fetchConference = await getData()

  console.log(fetchConference)

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
                <h1 className="text-[50px] mb-2 text-center font-bold text-white">PDKI Konferensi</h1>
                <button 
                  className="px-6 duration-75 py-[8px] bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-center md:py-[12px] md:px-8 rounded-3xl text-[#274698] font-medium text-[16px] md:text-[18px]"
                  onClick={handleGetConnection}
                >
                  Tambah Koneksi
                </button>
              </div>
        </figure>  

        <section className="my-12">
          <h2 className="font-semibold text-[30px] mb-4">Konferensi</h2>

          {/* filter data by dropdown */}
          <div className="mb-8 flex flex-col items-start sm:flex-row sm:items-center gap-6">
            <h3 className="text-xl font-semibold text-[#333]">Filter Konferensi</h3>
            <select className="rounded-xl p-2 bg-[#274698] text-white">
              {filterDropdownConference.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </select>
          </div> 

          {/* confernce */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fetchConference?.map((item : ConferenceProps) => (
               <div key={item.id} className="bg-[#274698] rounded-2xl">
                    <figure className="relative block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                        <Image 
                        width={400}
                        height={400}
                        className="duration-100 hover:scale-110 w-[400px] h-[200px] rounded-tr-2xl rounded-tl-2xl object-cover bg-cover"
                        src={item.image}
                        alt="news 1"
                        />
                        <div className="shadow-sm shadow-[#999] absolute top-5 right-5 p-2 rounded-[50%] bg-white">
                            <Link href={`/news/${item.id}`}>
                                <TbArrowUpRight className="w-[24px] h-[24px] text-[#274698]"/>
                            </Link>
                        </div>
                    </figure>
                    <div className="relative p-6 min-h-[220px] max-h-[260px] overflow-hidden bg-[#274698] rounded-bl-2xl rounded-br-2xl flex flex-col justify-between">
                        <div>
                            <h4 className="text-white font-semibold text-[16px]">{item.title}</h4>
                            <p className="text-gray-100 text-[14px] font-medium text-ellipsis whitespace-nowrap overflow-hidden">{item.description}</p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-[14px] text-gray-100 font-medium">{item.publishedDate}</span>
                            <span className="text-[14px] text-gray-100 font-medium">{item.tags}</span>
                        </div>
                    </div>
                </div> 
            ))} 
          </div>         
        </section>

      </main>
      {show === true ? <GetConnection handleConnection={handleGetConnection} setShow={setShow}/> : ""}
    </>
  )
}

export default Conference