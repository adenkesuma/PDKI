"use client"
import { FC, useState } from "react"
import GetConnection from "@/components/get-connection.tsx"
import Navigation from "../../components/navigation.tsx"
import Image from "next/image"
import Piagam from "@/../public/assets/images/piagam.jpg"
import Banner from "@/../public/assets/images/image-banner.jpg" 
import { studyGroupOne, studyGroupTwo } from "@/utils/constant.tsx"

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const [show, setShow] = useState<Boolean>(false)

  const handleGetConnection = () => {
    setShow(true)
  }

  return (
    <>
      <main className="container mx-auto">
        <Navigation />
        <figure className="relative">
            <Image 
              className="h-[400px] w-full xl:h-[600px] object-cover bg-cover rounded-br-3xl rounded-bl-3xl"
              src={Banner}
              alt="banner image"
            />
            <div className="flex flex-col items-center gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className="text-[240px] mb-2 lg:text-[40px] text-center font-bold text-white">Sejarah Kedokteran Keluarga Indonesia</h1>
              <button 
                className="px-6 duration-75 py-[8px] bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-center md:py-[12px] md:px-8 rounded-3xl text-[#274698] font-medium text-[16px] md:text-[18px]"
                onClick={handleGetConnection}
              >
                Tambah Koneksi
              </button>
            </div>
          </figure>

          <section className="my-8">
            <div className="flex justify-between items-start gap-12">
              <p className="text-[16px] font-medium text-[#333]">
                <span className="text-3xl font-bold text-[#274698]">I</span>ndonesia sebagai negara kepulauan terbesar di dunia yang terdiri tujuh belas ribu pulau yang tersebar, tentunya memiliki tantangan tersendiri dalam distribusi layanan Kesehatan. Wilayah yang luas dan terpencar-pencar menjadi alasan dibutuhkan banyak tenaga kesehatan yang tersebar di seluruh wilayah Indonesia untuk dapat memberikan pelayanan kesehatan yang optimal. Meskipun secara kuantitas belum memadai, namun penguatan sumber daya secara kualitas perlu dimaksimalkan.
              </p>
              <p className="text-[16px] font-medium text-[#333]">
                <span className="text-3xl font-bold text-[#274698]">K</span>eiinginan untuk mewujudkan pelayanan kesehatan tingkat primer yang berkualits, telah lama dicanangkan di Indonesia. Gagasan mengenai kedokteran keluarga muncul dari sejumlah Dokter di Fakultas Kedokteran Universitas Indonesia usai menghadiri International Conference of Family Medicine di Philipina tahun 1980-an. Kemudian pada 20 Desember  tahun 1981, para tokoh ini membentuk Kelompok Studi Dokter Keluarga (KSDK) di Jakarta.
              </p>
            </div>

            <div className="flex justify-between flex-col items-start gap-12 mt-8">
            <h2 className="text-[40px] font-bold text-[#1a1a1a]"><span className="text-[#274698]">Kelompok Studi Dokter Keluarga</span> <br/> Di dirikan oleh 16 orang</h2>
              <div className="flex justify-between items-start gap-12">
                <div className="w-[38%] flex justify-between items-start gap-6">
                  <ul className="flex flex-col gap-1">
                    {studyGroupOne.map((people, idx) => (
                      <li key={idx} className="font-medium text-[#333]">{idx+1}. {people}</li>
                    ))}   
                  </ul> 
                  <ul className="flex flex-col gap-1">
                    {studyGroupTwo.map((people, idx) => (
                        <li key={idx} className="font-medium text-[#333]">{idx+9}. {people}</li>
                    ))}
                  </ul>
                </div>
                <p className="font-medium text-[#333] w-[62%]">
                  Upaya-upaya ke arah pengembangan Dokter Keluarga di Indonesia terus dilakukan. Salah satu upaya yang dilakukan adalah dengan terus menjalin relasi dengan Organisasi Dokter Keluarga Internasional (WONCA). Pada tahun 1983, Dr.dr. Judilherry Justam, MM dan dr. Sudjoko Kuswadji menghadi WONCA (World Organization of National Colleges, Academies and Academic Associations of General Practitioners/Family Physicians) Conference di Singapura. Kemudian pada tahun 1986 ada sekitar 30 dokter dari Indonesia yang menghadiri WONCA Conference di London. <br /> <br />
                  Sebelum berganti nama menjadi Perhimpunan Dokter Keluarga Indonesia (PDKI) seperti sekarang, perhimpunan ini mengalami metamorphosis dan perkembangan dari waktu.
                </p>
              </div>
            </div>
          </section>
      </main>
      {show === true ? <GetConnection handleConnection={handleGetConnection} setShow={setShow}/> : ""}
    </>
  )
}

export default About
