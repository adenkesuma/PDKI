import { cache } from "react"

export const fetchConferenceDetail = cache(async (id: string) => {
    const res = await fetch(`${process.env.BASE_URL}/api/route/conference/${id}`, {
        mode: 'cors',
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const conferenceDetail = await res.json()

    return conferenceDetail
})