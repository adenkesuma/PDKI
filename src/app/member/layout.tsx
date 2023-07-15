import Footer from '@/components/footer'
import {NextAuthProvider} from '../provider'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import MemberPdki from '@/components/member-pdki'

export const metadata = {
  title: 'PDKI | Member',
  description: 'Member Perhimpunan dokter keluarga indonesia',
}

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div className='bg-gray-100'>
            <NextAuthProvider>
                <Navbar />
                <main className="container px-4 sm:px-0 mx-auto">
                    {/* header */}
                    <Header heading="PDKI" subheading="Member Perhimpunan Dokter Keluarga Indonesia" />

                    {/* children */}
                    <div>
                      <MemberPdki />
                      {children}
                    </div>
                </main>
                <Footer />
            </NextAuthProvider>
        </div>
    )
}
