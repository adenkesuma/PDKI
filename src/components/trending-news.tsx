import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import fakeImage from "@/../public/assets/images/news-3.png"
import { fakeData } from "../utils/fake-data.ts"

interface TrendingNewsProps {}

const TrendingNews: FC<TrendingNewsProps> = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-[18px] lg:text-[20px] mb-4">Berita Populer</h2>
      <div className="h-[380px] lg:h-[430px] bg-[#274698] rounded-2xl p-4 text-white flex flex-col gap-6">
        {fakeData.map((data) => (
          <div key={data.id} className="flex items-center gap-4 hover:bg-[#19388b] rounded-xl duration-75">
            <div className="w-[50px] lg:h-[60px] lg:w-[60px] h-[50px]">
              <Image
                className="w-full h-full object-cover bg-center rounded-xl border-2 border-white" 
                src={fakeImage} 
                alt="fake image"
              />
            </div>
            <Link href="/news/:id">
              <h3 className="text-[16px] font-medium text-[#fff]">{data.text}</h3>
              <p className="font-medium text-[14px] text-[#cacaca]">{data.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingNews
