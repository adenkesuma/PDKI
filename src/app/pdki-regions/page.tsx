"use client"
import Link from "next/link"
import { ChangeEvent, useEffect, useState } from "react"
import { ProvinsiIndonesia } from "@/utils/constant.tsx"
import RegionData from "@/components/region-data"
import Header from "@/components/header"

const PDKIRegions = async () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("All Region")

  const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value)
  }

  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman wilayah pdki */}
        <Header heading="PDKI" subheading="Lingkup dan Wilayah" />

        <section className="mt-8 px-6 mb-8 flex items-center gap-4 flex-col md:flex-row md:justify-between">
          <h2 className="font-semibold text-[30px] mb-6">Region News</h2>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
            <h3 className="text-lg font-medium text-[#1a1a1a]">Filter sesuai provinsi</h3>
            <select 
              value={selectedRegion} 
              className="rounded-xl p-2 bg-[#274698] text-white"
              onChange={handleRegionChange} 
              >
              {ProvinsiIndonesia.map((prov, idx) => (
                <option value={prov} key={idx}>
                  {prov}
                </option>
              ))}
            </select>
          </div>

        </section>

        <section className="mb-8 px-6">
          {/* data region */}
          <RegionData selectedRegion={selectedRegion} />

          <div className="mt-6">
            <h3 className="text-[18px] font-medium text-[#1a1a1a]">
              Contact Admin klik : 
              <Link href="https://wa.me/081276169833" className="text-[#274698]"> disini</Link>
            </h3>
          </div>
        </section>
      </main>
    </>
  )
}

export default PDKIRegions
