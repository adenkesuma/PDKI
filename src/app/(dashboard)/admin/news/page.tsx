import Sidebar from "@/components/sidebar"

const News = () => {
  return (
    <main className="p-4">
      <div className="relative flex gap-8">
        <Sidebar path={'news'} />
        <div className="h-[500vh] inherit ml-[280px]">
            <p>News</p>
        </div>
      </div>
    </main>
  )
}

export default News