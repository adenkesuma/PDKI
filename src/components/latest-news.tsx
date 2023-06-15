import { FC } from "react"
import News1 from "../../public/assets/images/news-1.png"
import Link from "next/link"
import Image from "next/image"
import { TbChevronRight, TbShare } from "react-icons/tb"

interface LatestNewsProps {}

const LatestNews: FC<LatestNewsProps> = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] lg:text-[22px] font-semibold text-black">Berita Terbaru</h2>
        <Link href="/news" className="flex justify-between items-center gap-2 font-medium text-[14px] md:text-[16px] lg:text-[18px]">
          Lihat semua berita
          <TbChevronRight
            className="w-8 h-8 font-semibold text-black"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <figure className="block relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
            <Image 
              className="duration-100 hover:scale-110 w-full rounded-tr-2xl rounded-tl-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="absolute top-5 right-5 rounded-[50%] bg-white p-2">
              <Link href="#">
                <TbShare className="w-[24px] h-[24px] text-[#274698] text-center" />
              </Link>
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-bl-2xl rounded-br-2xl">
            <h4 className="text-white font-semibold text-lg">Education for primary care</h4>
            <p className="text-gray-100 text-[16px] font-medium">Free access</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[14px] text-gray-100 font-medium">Jun 23</span>
              <span className="text-[14px] text-gray-100 font-medium">200 reader</span>
            </div>
          </div>
        </div>

	      <div className="rounded-lg">
          <figure className="block relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
            <Image
              className="duration-100 hover:scale-110 w-full rounded-tr-2xl rounded-tl-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="absolute top-5 right-5 rounded-[50%] bg-white p-2">
              <Link href="#">
                <TbShare className="w-[24px] h-[24px] text-[#274698] text-center" />
              </Link>
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-bl-2xl rounded-br-2xl">
            <h4 className="text-white font-semibold text-lg">Education for primary care</h4>
            <p className="text-gray-100 text-[16px] font-medium">Free access</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[14px] text-gray-100 font-medium">Jun 23</span>
              <span className="text-[14px] text-gray-100 font-medium">200 reader</span>
            </div>
          </div>
        </div>

	      <div className="rounded-lg">
          <figure className="block relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
            <Image
              className="duration-100 hover:scale-110 w-full rounded-tr-2xl rounded-tl-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="absolute top-5 right-5 rounded-[50%] bg-white p-2">
              <Link href="#">
                <TbShare className="w-[24px] h-[24px] text-[#274698] text-center" />
              </Link>
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-br-2xl rounded-bl-2xl">
            <h4 className="text-white font-semibold text-lg">Education for primary care</h4>
            <p className="text-gray-100 text-[16px] font-medium">Free access</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[14px] text-gray-100 font-medium">Jun 23</span>
              <span className="text-[14px] text-gray-100 font-medium">200 reader</span>
            </div>
          </div>
        </div>

	      <div className="rounded-lg">
          <figure className="block relative overflow-hidden rounded-tl-2xl rounded-tr-2xl">
            <Image
              className="duration-100 hover:scale-110 w-full rounded-tl-2xl rounded-tr-2xl"
              src={News1}
              alt="news 1"
            />
            <div className="absolute top-5 right-5 rounded-[50%] bg-white p-2">
              <Link href="#">
                <TbShare className="w-[24px] h-[24px] text-[#274698] text-center" />
              </Link>
            </div>
          </figure>
          <div className="p-6 bg-[#274698] rounded-br-2xl rounded-bl-2xl">
            <h4 className="text-white font-semibold text-lg">Education for primary care</h4>
            <p className="text-gray-100 text-[16px] font-medium">Free access</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[14px] text-gray-100 font-medium">Jun 23</span>
              <span className="text-[14px] text-gray-100 font-medium">200 reader</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LatestNews
