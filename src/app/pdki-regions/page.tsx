import { Metadata } from "next"
import RegionData from "@/components/region-data"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RegionResults from "@/components/region-results"

// metadata for region page
export const metadata: Metadata = {
  title: 'PDKI | Regions',
  openGraph: {
    title: 'PDKI | Regions',
    description: 'Region information',
  }
}

const PDKIRegions = async () => { 
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman wilayah pdki */}
        <Header heading="PDKI" subheading="Lingkup dan Wilayah" />
 
        {/* region data */}
        <RegionResults />
      </main>
      <Footer />
    </div>
  )
}

export default PDKIRegions
