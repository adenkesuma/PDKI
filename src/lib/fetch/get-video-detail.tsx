import { cache } from "react"

export const fetchVideoDetail = cache(async (id: string) => {
    const res = await fetch(`http://localhost:8080/api/route/video/${id}`, {
        mode: 'cors',
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const videoDetail = await res.json()

    return videoDetail
})