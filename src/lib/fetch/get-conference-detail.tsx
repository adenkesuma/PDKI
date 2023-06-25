export async function fetchConferenceDetail(id: string) {
    const res = await fetch(`http://localhost:8080/api/route/conference/${id}`, {
        cache: 'no-store',
        next: {
            revalidate: 10
        }
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const conferenceDetail = await res.json()

    return conferenceDetail
}