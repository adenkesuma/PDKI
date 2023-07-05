import Link from "next/link"

export const metadata = {
  title: 'PDKI | Member',
  description: 'perhimpunan dokter keluarga indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
  return (
     <div className="container mx-auto mb-2">
      {/* navbar */}
      <nav className="flex justify-between items-center">
        <h1 className="text-[28px] font-semibold text-center my-6">User Data</h1>

        <ul className="flex items-center justify-between gap-6">
          <Link className="font-medium text-[18px] cursor-pointer text-[#1a1a1a] hover:text-[#888] duration-75" href="/member/dashboard">
            User
          </Link>
          <Link className="font-medium text-[18px] cursor-pointer text-[#1a1a1a] hover:text-[#888] duration-75" href="/member/dashboard/sertificate">
            Sertificate
          </Link>
        </ul>
      </nav>

      {children}

      <footer className="mt-10">
        <p>&copy; Copyright PDKI 2023, All rights reserved</p>
      </footer>
    </div> 
  )
}