import { cache } from "react"

export const fetchMember = cache(async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/route/admin/member`, {
    mode: 'cors',
    method: 'GET'
  })


  if (!res.ok) {
    throw new Error("fetching data invalid")
  }

  const member = await res.json()

  return member
})
