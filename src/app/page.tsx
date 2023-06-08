import Navigation from "../components/navigation.tsx"
import Image from "next/image"
import Banner from "../../public/assets/images/banner-image.jpg"

interface HomeProps {}

const Home = () => {
  return (
    <main>
      <Navigation />
      <figure className="relative">
        <Image 
          className="h-[400px] w-full xl:h-[600px] bg-cover bg-center rounded-br-3xl rounded-bl-3xl"
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
    </main>
  )
}

export default Home
