export async function fetchVideo() {
  const res = await fetch('http://localhost:8080/api/route/video', {
    cache: 'no-store',
    mode: 'cors',
    next: {
        revalidate: 10,
        tags: ['video']
    },
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error("Something went wrong!")
  }

  const video = await res.json()

  return video
}