import { FC } from "react"
import Navigation from "../components/navigation.tsx"
import Image from "next/image"
import Banner from "../../public/assets/images/banner-image.jpg"
import TrendingVideo from "../components/trending-video.tsx"
import TrendingNews from "../components/trending-news.tsx"
import UpcomingConference from "../components/upcoming-conference.tsx"
import Quote from "../components/quote.tsx"
import PopularNews from "../components/popular-news.tsx"

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main>
      <Navigation />
      <figure className="relative">
        <Image 
          className="h-[400px] w-full xl:h-[600px] object-cover bg-cover bg-center rounded-br-3xl rounded-bl-3xl"
          src={Banner}
          alt="banner image"
        />
        <div className="absolute left-10 bottom-10 xl:left-24 xl:bottom-24">
          <h1 className="text-[40px] xl:text-[70px] font-bold text-white">PDKI</h1>
          <figcaption className="text-[22px] xl:text-[26px] font-semibold text-white">
            Perhimpunan Dokter Keluarga Indonesia
          </figcaption>
        </div>
      </figure>

      <section className="flex flex-col lg:flex-row justify-between gap-6 items-start mt-12">
        <TrendingVideo />
        <UpcomingConference />
        <TrendingNews />
      </section>

      <section className="mt-8">
        <Quote />
      </section>

      <section className="mt-8">
        <PopularNews />
      </section>
    </main>
  )
}

export default Home
