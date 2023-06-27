import Sidebar from "@/components/sidebar"
import Content from "@/components/content"

const Admin = () => {
  return (
    <main className="p-4">
      <div className="relative flex gap-8">
        <Sidebar />
        <Content />
      </div>
    </main>
  )
}

export default Admin