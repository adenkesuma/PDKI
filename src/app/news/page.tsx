import Navigation from "@/components/navigation"

interface NewsProps {}

async function getData() {
  const res = await fetch('http://localhost:8080/api/admin/berita')

  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

const News = async () => {
  const data = await getData()
  console.log(data)
  return (
    <>
      <Navigation />
      <h1>Testing News</h1>
      </>
  )
}

export default News
