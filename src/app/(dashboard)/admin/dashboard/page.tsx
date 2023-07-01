"use client";
import Sidebar from "@/components/sidebar"
import { getSession, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Dashboard = () => {
  // session 
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "authenticated"){
    return (
      <main className="p-4">
        <div className="relative flex gap-8">
          {/* <Sidebar path={'dashboard'} /> */}
          <div className="h-[500vh] inherit ml-[280px]">
              <p>Dashboard</p>
          </div>
        </div>
      </main>
    )
  }
  if (status === "unauthenticated"){
    router.push("/")
  }
}
export default Dashboard