import { FC } from "react"
import News1 from "../../public/assets/images/news-1.png"
import Link from "next/link"
import Image from "next/image"
import { TbChevronRight } from "react-icons/tb"

interface PDKIConferenceProps {}

const PDKIConference: FC<PDKIConferenceProps> = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] lg:text-[22px] font-semibold text-black">Konferensi</h2>
        <Link href="/news" className="flex justify-between items-center gap-2 font-medium text-[14px] md:font-[16px] lg:font-[18px]">
          Lihat semua konferensi
          <TbChevronRight
            className="w-8 h-8 font-semibold text-black"
          />
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-8 justify-self-start">
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">01</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
           <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">02</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">03</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">04</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">05</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="text-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
        </div>

        <figure className="h-full w-full justify-self-center">
          <Image 
            className="w-full h-full object-cover bg-center rounded-2xl"
            src={News1}
            alt="testing image"
          />
        </figure> 

        <div className="flex flex-col gap-8 justify-self-end">
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">06</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
           <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">07</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">08</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">09</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="font-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-[30px] font-bold text-[#274698]">10</h3>
            <div>
              <h4 className="font-semibold text-[16px] text-[#1a1a1a]">Education for Primary Care</h4>
              <p className="text-medium text-[14px] text-[#333]">Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PDKIConference
