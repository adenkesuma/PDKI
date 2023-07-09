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
>>>>>>> 5bbc18b1efb8df76556fae834a2f2a71cf67c49d
