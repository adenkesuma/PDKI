import './globals.css'
import { montserrat } from '@/utils/font'
import Navbar from "@/components/navbar.tsx"
import Footer from "@/components/footer.tsx"

export const metadata = {
  title: 'PDKI | Homepage',
  description: 'persatuan dokter keluarga indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
