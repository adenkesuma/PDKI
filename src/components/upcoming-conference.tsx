import Image from "next/image"
import Link from "next/link"
import ConferenceImage from "../../public/assets/images/conference.svg"
import { TbArrowUpRight } from "react-icons/tb"
import { ConferenceProps } from "@/utils/interface"

async function fetchUpcomingConference() {
  const res = await fetch('http://localhost:8080/api/route/conference', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('fetching data failed')
  }

  const newConference = await res.json()

  return newConference
}

const UpcomingConference = async () => {
  const upcomingConference = await fetchUpcomingConference()

  const upcomingDataConference = await upcomingConference.data
  const data = upcomingDataConference[upcomingDataConference.length - 1]

  return (
    <div className="w-full">
      <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">Konferensi yang akan datang</h2>
      <div key={data.id} className="flex rounded-2xl bg-[#274698] h-[380px] lg:h-[410px]">
          <div>
            <div className="w-full h-[70%] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">  
              <Image
                width={400}
                height={400}
                className="hover:scale-110 duration-100 rounded-tl-2xl rounded-tr-2xl w-full h-full bg-cover object-cover" 
                src={data.image}
                alt="conference image"
              />
              <div className="absolute top-5 right-5 p-2 rounded-[50%] bg-white">
                <Link href={`/conference/${data.id}`}>
                  <TbArrowUpRight className="w-[24px] h-[24px] text-[#274698]"/>
                </Link>
              </div>
            </div>
            <div className="py-3 px-6 text-white flex flex-col justify-between gap-4 h-[30%]">
              <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-semibold">{data.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-[14px]">{data.location}</span>
                <span className="text-[14px]">{data.startDate}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpcomingConference
