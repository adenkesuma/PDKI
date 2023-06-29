export async function fetchMemberDetail(id: string) {
    const res = await fetch(`http://localhost:8080/api/route/admin/${id}`, {
        cache: 'no-store',
        mode: 'cors',
        next: {
            revalidate: 10,
            tags: ['memberId'],            
        }
    })

    if (!res.ok) {
        throw new Error('fetching data invalid')
    }

    const memberDetail = await res.json()

    return memberDetail
}