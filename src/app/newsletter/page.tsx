import { Metadata } from "next"
import Header from "@/components/header.tsx"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// metadata for newsletter page
export const metadata: Metadata = {
  title: 'PDKI | Newsletter',
  openGraph: {
    title: 'PDKI | Newsletter',
    description: 'PDKI newsletter'
  }
}

const Newsletter = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman catatan  */}
        <Header heading="PDKI" subheading="Buletin" /> 

        <section>
          <h1 className="text-center text-lg font-semibold my-20">still process</h1>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Newsletter
