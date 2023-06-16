import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { fakeData } from "../utils/fake-data.ts"
import fakeImage from "@/../public/assets/images/news-4.png"

interface TrendingVideoProps {}

const TrendingVideo: FC<TrendingVideoProps> = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">Video Pelatihan Populer</h2>
      <div className="h-[380px] bg-[#274698] rounded-2xl p-4 text-white flex flex-col gap-6">
        {fakeData.map((data) => (
          <div key={data.id} className="flex items-center gap-4 hover:bg-[#19388b] rounded-xl duration-75">
            <div className="w-[50px] h-[50px]">
              <Image
                className="w-full h-full object-cover bg-center rounded-xl border-2 border-white" 
                src={fakeImage} 
                alt="fake image"
              />
            </div>
            <Link href="/trending-video/:id">
              <h3 className="font-medium text-[16px] text-[#fff]">{data.text}</h3>
              <p className="font-medium text-[14px] text-[#cacaca]">{data.date}</p>
            </Link>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default TrendingVideo
