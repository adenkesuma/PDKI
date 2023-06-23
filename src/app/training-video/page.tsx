import Header from "@/components/header.tsx";

interface TrainingVideoProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  thumnailUrl: string;
  isPrivate: boolean;
  harga: number;
  publishedDate: string;
  categories: string;
  tags: string;
  view: number;
  instructor: string;
}

async function fetchVideo() {
  const res = await fetch('http://localhost:8080/api/route/video')

  if (!res.ok) {
    throw new Error("Something went wrong!")
  }

  const data = await res.json()

  return data.data
}

const TrainingVideo = async () => { 

  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman video pelatihan */}
        <Header heading="PDKI" subheading="video pelatihan" /> 

      </main>
    </>
  )
}

export default TrainingVideo
