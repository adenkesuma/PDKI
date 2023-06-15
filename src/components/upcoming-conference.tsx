import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import ConferenceImage from "../../public/assets/images/conference.svg"
import { TbShare } from "react-icons/tb"

interface UpcomingConferenceProps {}

const UpcomingConference: FC<UpcomingConferenceProps> = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-[20px] lg:text-[22px] mb-4">Konferensi yang akan datang</h2>
      <div className="rounded-2xl bg-[#274698] h-[400px]">
        <figure className="w-full h-[70%] relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">  
          <Image
            className="hover:scale-110 duration-100 rounded-tl-2xl rounded-tr-2xl w-full h-full bg-cover object-cover" 
            src={ConferenceImage}
            alt="conference image"
          />
          <div className="absolute top-5 right-5 p-2 rounded-[50%] bg-white">
            <Link href="#">
              <TbShare className="w-[24px] h-[24px] text-[#274698]"/>
            </Link>
          </div>
        </figure>
        <div className="py-3 px-6 text-white flex flex-col gap-3">
          <h3 className="text-[20px] font-medium">28th WONCA Europe Conference 2023</h3>
          <div className="flex justify-between items-center">
            <span className="text-[14px]">Brussels, Belgium</span>
            <span className="text-[14px]">07 jun - 10 jun 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingConference
