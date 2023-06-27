import Header from "@/components/header.tsx"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { fetchVideo } from "@/lib/fetch/get-video"
import { TbArrowUpRight, TbBrandWhatsapp } from "react-icons/tb"
import { VideoProps } from "@/utils/interface"

const TrainingVideo = async () => { 
  const videoData = await fetchVideo()

  return (
    <>
      <Navbar />
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman video pelatihan */}
        <Header heading="PDKI" subheading="video pelatihan" /> 

        <section className="my-12 px-4 lg:px-6 xl:px-12">
          <h2 className="font-semibold text-[30px] mb-4">Video Pelatihan</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoData.data.map((vid: VideoProps) => (
              <div key={vid.id}>
                <div className="w-full relative">
                  <Image 
                    width={500}
                    height={400}
                    className="w-full h-full rounded-xl"
                    src={vid.thumbnailUrl} 
                    alt={vid.title}
                  />
                  {vid.isPrivate === true ?
                    <Link href="https://wa.me/08127616983" className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] duration-75 bg-white hover:bg-green-200 py-3 px-4 rounded-2xl flex justify-center items-center gap-2">
                      <span className="text-[16px] font-medium">Hubungi admin</span>
                      <TbBrandWhatsapp className="text-xl text-green-600" /> 
                    </Link>
                    :
                    <Link href={`training-video/${vid.id}`} className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] duration-75 bg-white hover:bg-gray-200 py-3 px-4 rounded-2xl flex justify-center items-center gap-2">
                      <span className="text-[16px] font-medium">Lihat Pelatihan</span>
                      <TbArrowUpRight className="text-xl text-[#222]" />
                    </Link>
                  }
                </div>
                <h2 className="font-semibold text-[18px] mt-6 mb-4">{vid.title}</h2>
                <p className="font-medium text-[16px] mb-4">{vid.description}</p>
                <p className="font-medium mb-4 text-[16px]">Instruktor : {vid.instructor}</p>
                  {vid.isPrivate === true ? 
                    <div className="bg-orange-200 rounded-2xl p-4">
                      <p className="p-2 rounded-xl font-medium text-center text-[16px] text-orange-700">Premium Video</p>
                      <p className="text-[14px] text-center font-medium text-orange-700">
                        Kamu harus melakukan pembayaran untuk mengakses video pelatihan ini, tekan tombol hubungi admin untuk info lebih lanjut terkait pembayaran    
                      </p> 
                    </div> :
                    <div className="bg-green-200 rounded-2xl p-4">
                      <p className="p-2 rounded-xl font-medium text-center text-[16px] text-green-700">Gratis</p>
                      <p className="text-[14px] text-center font-medium text-green-700">
                        Video pelatihan ini gratis, kamu bisa langsung akses video dengan menekan tombol lihat pelatihan
                      </p>
                    </div>
                  }
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TrainingVideo
