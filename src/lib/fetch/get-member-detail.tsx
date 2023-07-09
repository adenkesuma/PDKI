import { cache } from "react"

export const fetchMemberDetail = cache(async (id: string) => {
    const res = await fetch(`http://localhost:8080/api/route/admin/${id}`, {
        mode: 'cors',
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const memberDetail = await res.json()

    return memberDetail
})