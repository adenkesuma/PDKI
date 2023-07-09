import { cache } from "react"

export const fetchMemberDetail = cache(async (id: string) => {
    const res = await fetch(`${process.env.BASE_URL}/api/route/admin/${id}`, {
        mode: 'cors',
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const memberDetail = await res.json()

    return memberDetail
})