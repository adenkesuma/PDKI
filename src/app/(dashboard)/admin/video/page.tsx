import Sidebar from "@/components/sidebar"

const Video = () => {
  return (
    <main className="p-4">
      <div className="relative flex gap-8">
        <Sidebar path={'video'} />
        <div className="h-[500vh] inherit ml-[280px]">
            <p>Video</p>
        </div>
      </div>
    </main>
  )
}

export default Video