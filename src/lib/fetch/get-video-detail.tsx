export async function fetchVideoDetail(id: string) {
    const res = await fetch(`http://localhost:8080/api/route/video/${id}`, {
        cache: 'no-store',
        mode: 'cors',
        next: {
            revalidate: 10,
            tags: ['conferenceId'],            
        },
        method: 'GET'
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const videoDetail = await res.json()

    return videoDetail
}