import Sidebar from "@/components/sidebar"

const Dashboard = () => {
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

export default Dashboard