import { cache } from "react"

export const fetchNews = cache(async () => {
  const res = await fetch("http://localhost:8080/api/route/news", {
    mode: 'cors',
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error("fetching data invalid")
  }

  const news = await res.json()

  return news
})