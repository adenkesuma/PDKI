import { cache } from "react"

export const fetchVideoDetail = cache(async (id: string) => {
    const res = await fetch(`${process.env.BASE_URL}/api/route/video/${id}`, {
        mode: 'cors',
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const videoDetail = await res.json()

    console.log(videoDetail[0]);

    return videoDetail[0]
})