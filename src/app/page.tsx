"use client"
import { FC, useState } from "react"
import GetConnection from "../components/get-connection.tsx"
import Navigation from "../components/navigation.tsx"
import Image from "next/image"
import Banner from "../../public/assets/images/image-banner.jpg"
import TrendingVideo from "../components/trending-video.tsx"
import TrendingNews from "../components/trending-news.tsx"
import UpcomingConference from "../components/upcoming-conference.tsx"
import Quote from "../components/quote.tsx"
import LatestNews from "../components/latest-news.tsx"
import PDKIConference from "../components/pdki-conference.tsx"

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [show, setShow] = useState<Boolean>(false)

  const handleGetConnection = () => setShow(true)

  return (
    <>
      <main className="relative px-4 sm:px-0 container mx-auto">
        <Navigation />
        <figure className="relative">
          <Image 
            className="h-[400px] w-full xl:h-[600px] object-cover bg-cover rounded-br-3xl rounded-bl-3xl"
            src={Banner}
            alt="banner image"
          />
          <div className="flex flex-col items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="-m-4 md:-m-8 text-[50px] lg:text-[80px] text-center font-bold text-white">PDKI</h1>
            <p className="text-center text-[22px] lg:text-[30px] font-semibold text-white">
              Perhimpunan Dokter Keluarga Indonesia
            </p>
            <button 
              className="px-6 duration-75 py-[8px] bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-center md:py-[12px] md:px-8 rounded-3xl text-[#274698] font-medium text-[16px] md:text-[18px]"
              onClick={handleGetConnection}
            >
              Tambah Koneksi
            </button>
          </div>
        </figure>

        <section className="mt-8 grid gap-6 lg:grid-cols-3 px-6">
          <TrendingVideo />
          <UpcomingConference />
          <TrendingNews />
        </section>

        <section className="mt-8 mb-8 px-6">
          <Quote />
          <LatestNews />
          <PDKIConference />
        </section>
      </main>
      {show === true ? <GetConnection handleConnection={handleGetConnection} setShow={setShow}/> : ""}
    </>
  )
}

export default Home
