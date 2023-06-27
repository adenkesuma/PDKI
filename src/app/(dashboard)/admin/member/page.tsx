import Sidebar from "@/components/sidebar"

const Member = () => {
  return (
    <main className="p-4">
      <div className="relative flex gap-8">
        <Sidebar path={'member'} />
        <div className="h-[500vh] inherit ml-[280px]">
            <p>Member</p>
        </div>
      </div>
    </main>
  )
}

export default Member