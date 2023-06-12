"use client"
import { FC, useState } from "react"
import GetConnection from "../components/get-connection.tsx"
import Navigation from "../components/navigation.tsx"
import Image from "next/image"
import Banner from "../../public/assets/images/banner-image.jpg"
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
    <main className="relative">
      <Navigation />
      <figure className="relative">
        <Image 
          className="h-[400px] w-full xl:h-[600px] object-cover bg-cover bg-center rounded-br-3xl rounded-bl-3xl"
          src={Banner}
          alt="banner image"
        />
        <div className="flex flex-col items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="-mb-8 text-[40px] xl:text-[70px] text-center font-bold text-white">PDKI</h1>
          <figcaption className="text-[22px] xl:text-[26px] font-semibold text-white">
            Perhimpunan Dokter Keluarga Indonesia
          </figcaption>
          <button 
            className="bg-[#274698] text-center py-[12px] px-8 rounded-3xl text-white font-semibold text-[18px]"
            onClick={handleGetConnection}
          >
            Tambah Koneksi
          </button>
        </div>
      </figure>
    {show === true ? <GetConnection /> : ""}

      <section className="flex flex-col lg:flex-row justify-between gap-6 items-start mt-12">
        <TrendingVideo />
        <UpcomingConference />
        <TrendingNews />
      </section>

      <section className="mt-8 mb-8">
        <Quote />
        <LatestNews />
        <PDKIConference />
      </section>
    </main>
  )
}

export default Home
