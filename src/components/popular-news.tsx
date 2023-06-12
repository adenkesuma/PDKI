import { FC } from "react"
import News1 from "../../public/assets/images/news-1.png"
import Link from "next/link"
import Image from "next/image"
import { TbChevronRight } from "react-icons/tb"

interface PopularNewsProps {}

const PopularNews: FC<PopularNewsProps> = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[26px] font-semibold text-black">Popular News</h2>
        <div className="flex justify-between items-center">
          <Link href="/news" className="font-medium text-[18px]">View All</Link>
          <TbChevronRight
            className="w-8 h-8 font-semibold text-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <figure className="block relative rounded-tl-2xl rounded-tr-2xl">
            <Image 
              className="w-full rounded-tr-2xl rounded-tl-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="rounded-[50%] hidden bg-white p-4">
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-bl-2xl rounded-br-2xl">
            <h4 className="text-white">Education for primary care</h4>
            <p className="text-white">Free access</p>
            <div clasName="flex justify-between items-center">
              <span>Jun 23</span>
              <span>200 reader</span>
            </div>
          </div>
        </div>

	      <div className="rounded-lg">
          <figure className="block relative rounded-tl-2xl rounded-tr-2xl">
            <Image
              className="w-full rounded-tr-2xl rounded-tl-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="rounded-[50%] hidden bg-white p-4">
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-bl-2xl rounded-br-2xl">
            <h4 className="text-white">Education for primary care</h4>
            <p className="text-white">Free access</p>
            <div clasName="flex justify-between items-center">
              <span>Jun 23</span>
              <span>200 reader</span>
            </div>
          </div>
        </div>

	      <div className="rounded-lg">
          <figure className="block relative rounded-tl-2xl rounded-tr-2xl">
            <Image
              className="w-full rounded-tr-2xl rounded-tl-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="rounded-[50%] hidden bg-white p-4">
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-br-2xl rounded-bl-2xl">
            <h4 className="text-white">Education for primary care</h4>
            <p className="text-white">Free access</p>
            <div clasName="flex justify-between items-center">
              <span>Jun 23</span>
              <span>200 reader</span>
            </div>
          </div>
        </div>

	      <div className="rounded-lg">
          <figure className="block relative rounded-tl-2xl rounded-tr-2xl">
            <Image
              className="w-full rounded-tl-2xl rounded-tr-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="rounded-[50%] hidden bg-white p-4">
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-br-2xl rounded-bl-2xl">
            <h4 className="text-white">Education for primary care</h4>
            <p className="text-white">Free access</p>
            <div clasName="flex justify-between items-center">
              <span>Jun 23</span>
              <span>200 reader</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PopularNews