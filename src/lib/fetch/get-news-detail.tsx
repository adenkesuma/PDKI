import { cache } from "react"

export const fetchNewsDetail = cache(async (id: string) => {
    const res = await fetch(`http://localhost:8080/api/route/news/${id}`, {
        mode: 'cors',
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const newsDetail = await res.json()

    return newsDetail
})