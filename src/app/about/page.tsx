"use client"
import { FC, useState } from "react"
import GetConnection from "@/components/get-connection.tsx"
import Navigation from "../../components/navigation.tsx"
import Image from "next/image"
import Metaporfosis from "@/../public/assets/svg/metaporfosis.svg"
import PDKILeader from "@/../public/assets/images/pdki-leader.png"
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

          <section className="my-8 px-6">
            <div className="flex justify-between items-start gap-12">
              <p className="text-[16px] font-medium text-[#333]">
                <span className="text-3xl font-bold text-[#274698]">I</span>ndonesia sebagai negara kepulauan terbesar di dunia yang terdiri tujuh belas ribu pulau yang tersebar, tentunya memiliki tantangan tersendiri dalam distribusi layanan Kesehatan. Wilayah yang luas dan terpencar-pencar menjadi alasan dibutuhkan banyak tenaga kesehatan yang tersebar di seluruh wilayah Indonesia untuk dapat memberikan pelayanan kesehatan yang optimal. Meskipun secara kuantitas belum memadai, namun penguatan sumber daya secara kualitas perlu dimaksimalkan.
              </p>
              <p className="text-[16px] font-medium text-[#333]">
                <span className="text-3xl font-bold text-[#274698]">K</span>einginan untuk mewujudkan pelayanan kesehatan tingkat primer yang berkualits, telah lama dicanangkan di Indonesia. Gagasan mengenai kedokteran keluarga muncul dari sejumlah Dokter di Fakultas Kedokteran Universitas Indonesia usai menghadiri International Conference of Family Medicine di Philipina tahun 1980-an. Kemudian pada 20 Desember  tahun 1981, para tokoh ini membentuk Kelompok Studi Dokter Keluarga (KSDK) di Jakarta.
              </p>
            </div>

            <div className="flex justify-between flex-col items-start gap-12 mt-8">
              <h2 className="text-[30px] font-bold text-[#1a1a1a]"><span className="text-[#274698]">Kelompok Studi Dokter Keluarga</span> <br/> Di dirikan oleh 16 orang</h2>
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

            <div className="flex justify-between flex-col gap-12 mt-8">
              <h2 className="text-[30px] font-bold text-[#1a1a1a]">Metamorfosis Perhimpunan Dokter Keluarga Indonesia</h2>
              <Image 
                className="w-[80%] mx-auto"
                src={Metaporfosis} 
                alt="metahorfosis PDKI siklus" 
              />
              <div> 
                <p className="font-medium text-[#333] text-[16px]">
                  Pada tahun 1990, Kelompok Studi Dokter Keluarga (KSDK) berubah nama menjadi Kolese Dokter Keluarga Indonesia (KDKI) dari hasil Kongres Ke-2 di Bali. Pada Tahun 1996, Dokter Keluarga di Indonesia mulai diakui oleh pemerintah dengan adanya Keputusan Menteri No. 56/Menkes/SK/I/1996 perihal Dokter Keluarga dalam pengelolaan JPKM. Kemudian pada tahun 1997, terbit Permenkes No. 916/Menkes/Per/VIII/1997 tentang surat izin praktek Dokter atau dokter gigi yang diarahkan menjadi Dokter Keluarga.
                </p>
                <br />
                <p className="font-medium text-[#333] text-[16px]">
                  Di tahun 2003, Kolese Dokter Keluarga Indonesia (KDKI) berubah nama menjadi Perhimpunan Dokter Keluarga Indonesia (PDKI) berdasarkan hasil.
                  <br />
                  <br />
                  Seiring dengan pengembangan kurikulum Kedokteran Keluarga dan pendirian jenjang Spesialis Kedokteran Keluarga di beberapa Universitas di Indonesia, maka PDKI pada tahun 2023 ini mengusulkan pergantian nama menjadi Perhimpunan Dokter Spesialis Kedokteran Keluarga. Usulan ini sedang dalam proses di MPPK PB-IDI.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-8">
              <h2 className="font-bold text-[30px] text-[#1a1a1a]">Ketua Perhimpunan Keluarga Indonesia</h2>
              <Image 
                className="w-[80%] mx-auto"
                src={PDKILeader}
                alt="PDKI Leader image"
              />
              <p>
                Perjalanan PDKI bukanlah perjalanan yang mudah, namun penuh dinamika dan tantangan. PDKI menyadari bahwa dalam mewujudkan Pelayanan Kesehatan Tingkat Primer yang optimal memerlukan Kerjasama dari berbagai stakeholder. Untuk itu, PDKI berupaya dengan terus menjalin komunikasi dan relasi dengan berbagai pihak. Pada saat PDKI sedang fokus dalam penyusunan Standar Kompetensi Spesialis Famili Medisin, hampir bersamaan dengan lahirnya UU Pendidikan Kedokteran yang salah satu pasalnya mencantumkan tentang <strong>pengembangan dokter layanan primer.</strong> Untuk itu, Pemerintah dalam hal ini Kemenkes melakukan persiapan untuk meng-implementasikan UU Dikdok melalui koordinasi dengan IDI Sebagai Organisasi Profesi untuk “konsep dokter layanan primer”. IDI kemudian menugaskan anggota Perhimpunan Dokter Pelayanan Primer (PDPP) yang terdiri dari PDKI dan PDUI untuk masing-masing menyiapkan konsepnya. 
                <br />
                <br />
                Kemenkes kemudian mengundang PDKI dan PDUI untuk mempresentasikan konsep dokter layanan primer. Konsep kedokteran keluarga kemudian dipilih menjadi konsep dokter layanan primer. 
              </p>
            </div>
          </section>
      </main>
      {show === true ? <GetConnection handleConnection={handleGetConnection} setShow={setShow}/> : ""}
    </>
  )
}

export default About
