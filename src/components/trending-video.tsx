import { FC } from "react"
import { fakeData } from "../utils/fake-data.ts"

interface TrendingVideoProps {}

const TrendingVideo: FC<TrendingVideoProps> = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-[20px] lg:text-[22px] mb-4">Video Pelatihan Populer</h2>
      <div className="h-[400px] bg-[#274698] rounded-2xl p-4 text-white flex flex-col gap-8">
        {fakeData.map((data) => (
          <div key={data.id}>
            <h3>{data.text}</h3>
            <p>{data.date}</p>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default TrendingVideo
