"use client"
import { ProvinsiIndonesia } from "@/utils/constant.tsx"
import Header from "@/components/header"
import LatestNews from "@/components/latest-news.tsx"
import PDKIConference from "@/components/latest-conference"

const PDKIRegions = () => {

  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman wilayah pdki */}
        <Header heading="PDKI" subheading="Lingkup dan Wilayah" />

        <section className="mt-8 px-6 mb-8">
          <h2 className="font-semibold text-[30px] mb-6">Region News</h2>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
            <h3 className="text-xl font-semibold text-[#333]">Filter sesuai provinsi</h3>
            <select className="rounded-xl p-2 bg-[#274698] text-white">
              {ProvinsiIndonesia.map((prov, idx) => (
                <option value={prov} key={idx}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
          <LatestNews />
          <PDKIConference />
        </section>
      </main>
    </>
  )
}

export default PDKIRegions
