import NavbarAdmin from '@/components/navbar-admin'

export const metadata = {
  title: 'PDKI | Admin',
  description: 'perhimpunan dokter keluarga indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
  return (
    <main className='flex gap-8'>
        <NavbarAdmin /> 
        {children}
    </main>
  )
}