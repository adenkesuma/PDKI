import Link from "next/link"
import Image from "next/image"
import { TbChevronRight, TbArrowUpRight } from "react-icons/tb"
import { ConferenceProps } from "@/utils/interface"

interface Item {
  id: number;
}

async function fetchLatestConference() {
  const res = await fetch('http://localhost:8080/api/route/conference', { 
    cache: 'no-store',
    next: {
      revalidate: 10
    }
  })

  if(!res.ok) {
    throw new Error('fetching data invalid')
  }

  const latestConference = await res.json()

  return latestConference
}

const LatestConference = async () => {
  const getLatestConference = await fetchLatestConference()

  const sortedData = await getLatestConference.data.sort((a: Item, b: Item) => b.id - a.id)

  const fourLatestConference = await sortedData.slice(0, 4)

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] lg:text-[22px] font-semibold text-black">Konferensi Terbaru</h2>
        <Link href="/news" className="flex justify-between items-center gap-2 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
          Lihat semua konferensi
          <TbChevronRight
            className="w-8 h-8 font-semibold text-black"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fourLatestConference.map((item: ConferenceProps) => (
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
    </div>
  )
}

export default LatestConference
