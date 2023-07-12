import { NextAuthProvider } from './provider'
import './globals.css'
import { montserrat } from '../utils/font'

export const metadata = {
  title: 'PDKI | perhimpunan dokter keluarga indonesia',
  description: 'perhimpunan dokter keluarga indonesia',
  icons: {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    url: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={`${montserrat.className} bg-gray-100`}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>

  )
}
