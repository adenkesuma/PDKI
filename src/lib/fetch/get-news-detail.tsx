export async function fetchNewsDetail(id: string) {
    const res = await fetch(`http://localhost:8080/api/route/news/${id}`, {
        cache: 'no-store',
        mode: 'cors',
        // next: {
        //     revalidate: 10,
        //     tags: ['newsId']
        // },
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const newsDetail = await res.json()

    return newsDetail
}