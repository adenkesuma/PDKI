import './globals.css'
import { montserrat } from '@/utils/font'

export const metadata = {
  title: 'PDKI | perhimpunan dokter keluarga indonesia',
  description: 'perhimpunan dokter keluarga indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-100`}>
          {children}
      </body>
    </html>
  )
}
