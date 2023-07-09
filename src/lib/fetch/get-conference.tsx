import { cache } from "react"

export const fetchConference = cache(async () => {
  const res = await fetch('http://localhost:8080/api/route/conference', {
    mode: 'cors',
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error('fetching data failed')
  }

  const conference = await res.json()

  return conference
})