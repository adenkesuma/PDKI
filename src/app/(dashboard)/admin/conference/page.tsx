import Sidebar from "@/components/sidebar"

const Conference = () => {
  return (
    <main className="p-4">
      <div className="relative flex gap-8">
        <Sidebar path={'conference'} />
        <div className="h-[500vh] inherit ml-[280px]">
            <p>Conference</p>
        </div>
      </div>
    </main>
  )
}

export default Conference