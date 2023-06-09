import { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ConferenceResults from "@/components/conference-results"

// metadata for conference page
export const metadata: Metadata = {
  title: 'PDKI | Conference',
  openGraph: {
    title: 'PDKI | Conference',
    description: 'PDKI event and conference information',
  }
}

const Conference = () => { 
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header */}
        <Header heading="PDKI" subheading="Konferensi dan Acara" />

        {/* conference */}
        <ConferenceResults />
      </main>
      <Footer />
    </div>
  )
}

export default Conference
