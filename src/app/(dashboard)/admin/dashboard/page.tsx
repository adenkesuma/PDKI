"use client";
import Sidebar from "@/components/sidebar"
import { NextPage } from "next"
import { getSession, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading"){
    return (
      <h1>Loading...</h1>
    )
  }

  if (status === "authenticated"){
    return (
      <main className="p-4">
        <div className="relative flex gap-8">
          <Sidebar path={'dashboard'} />
          <div className="h-[500vh] inherit ml-[280px]">
              <p>Dashboard</p>
          </div>
        </div>
      </main>
    )
  }
  if (status === "unauthenticated"){
    router.push('/')
  }
}

// export async function getServerSideProps(context: any){
//   const session = await getSession(context)

//   if(!session){
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {session}
//   }
// }

export default Dashboard