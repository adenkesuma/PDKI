"use client"
import { TbArrowUpRight } from "react-icons/tb"
import Link from "next/link"
import Header from "@/components/header"
import Image from "next/image"
import { ConferenceProps } from "@/utils/interface"


async function fetchConference() {
  const res = await fetch('http://localhost:8080/api/route/conference', {
    cache: 'no-cache',
    next: {
      revalidate: 10
    }
  })

  if(!res.ok) {
    throw new Error("Failed to load")
  }

  const conference = await await res.json()

  return conference
}

const Conference = async () => {
  const getFetchConference = await fetchConference()

  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman berita */}
        <Header heading="PDKI" subheading="Konferensi dan Acara" />

        <section className="my-12">
          <h2 className="font-semibold text-[30px] mb-4">Konferensi</h2>
          <input type="text" />

          {/* news */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getFetchConference.data.map((item : ConferenceProps) => (
               <div key={item.id}>
                  <figure className="h-[160px] relative block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                    <Image 
                      width={300}
                      height={300}
                      className="duration-100 object-cover bg-cover h-full hover:scale-110 w-full rounded-tr-2xl rounded-tl-2xl"
                      src={item.image}
                      alt="news 1"
                    />
                    <div className="absolute top-5 right-5 p-2 rounded-[50%] bg-white">
                      <Link href="/news/:id">
                        <TbArrowUpRight className="w-[24px] h-[24px] text-[#274698]"/>
                      </Link>
                    </div>
                  </figure>
                  <div className="flex flex-col justify-between p-6 bg-[#274698] rounded-bl-2xl overflow-hidden rounded-br-2xl h-[140px]">
                    <div>
                      <h4 className="text-white font-semibold text-[16px] text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h4>
                      <p className="text-gray-300 text-[14px] font-medium text-ellipsis overflow-hidden whitespace-nowrap">{item.description}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-[14px] text-gray-100 font-medium">{item.startDate}</span>
                      <span className="text-[14px] text-gray-100 font-medium">{item.organizer}</span>
                    </div>
                  </div>
                </div>  
            ))} 
          </div>         
        </section>

      </main>
    </>
  )
}

export default Conference
