import Image from "next/image"
import Link from "next/link"
import TrendingNews from "../components/trending-news.tsx"
import UpcomingConference from "../components/upcoming-conference.tsx"
import Quote from "../components/quote.tsx"
import LatestNews from "../components/latest-news.tsx"
import Header from "@/components/header.tsx"
import TrendingVideo from "@/components/trending-video.tsx"
import LatestConference from "../components/latest-conference.tsx"

const Home = () => {

  return (
    <>
      <main className="relative px-4 sm:px-0 container mx-auto">
        {/* header dari halaman awal */}
        <Header heading="PDKI" subheading="Perhimpunan Keluarga Dokter Indonesia" />        

        <section className="mt-8 grid gap-6 md:grid-cols-3 px-6 xl:px-12">
          <TrendingVideo /> 
          <UpcomingConference />
          <TrendingNews />
        </section>

        <section className="mt-8 mb-8 px-6 xl:px-12">
          <Quote />
          <LatestConference />
          <LatestNews />
        </section>
      </main>
    </>
  )
}

export default Home
