import { Metadata } from "next"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewsResults from "@/components/news-results"

// metadata for news page
export const metadata: Metadata = {
  title: 'PDKI | News',
  openGraph: {
    title: 'PDKI | News',
    description: 'All news information about PDKI here',
  }
}

const News = () => { 
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman berita */}
        <Header heading="PDKI" subheading="Berita dan Informasi" />

        {/* news data */}
        <NewsResults /> 
      </main>
      <Footer />
    </div>
  )
}

export default News
