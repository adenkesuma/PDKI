import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "@/components/navbar.tsx"
import Footer from "@/components/footer.tsx"

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className}`}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
