"use client"
import { ChangeEvent, useState } from "react"
import { ProvinsiIndonesia } from "@/utils/constant.tsx"
import Header from "@/components/header"

const PDKIRegions = async () => {
  const [chooseRegion, setChooseRegion] = useState("")
  const [regionData, setRegionData] = useState([])

  // handle dropdown change and fetch the news data
  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setChooseRegion(region)

    fetch(`http://localhost:8080/api/route/news?region=${region}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRegionData(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman wilayah pdki */}
        <Header heading="PDKI" subheading="Lingkup dan Wilayah" />

        <section className="mt-8 px-6 mb-8">
          <h2 className="font-semibold text-[30px] mb-6">Region News</h2>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
            <h3 className="text-xl font-semibold text-[#333]">Filter sesuai provinsi</h3>
            <select 
              value={chooseRegion} 
              className="rounded-xl p-2 bg-[#274698] text-white"
              onChange={handleDropdownChange} 
              >
              {ProvinsiIndonesia.map((prov, idx) => (
                <option value={prov} key={idx}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
        </section>
      </main>
    </>
  )
}

export default PDKIRegions
