import { cache } from "react"

export const fetchConference = cache(async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/route/conference`, {
    mode: 'cors',
    method: 'GET'
  })

  if (!res.ok) {
    throw new Error('fetching data failed')
  }

  const conference = await res.json()

  return conference
})
