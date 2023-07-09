export async function fetchConference() {
    const res = await fetch('http://localhost:8080/api/route/conference', {
      cache: 'no-store',
      mode: 'cors',
      // next: {
      //   revalidate: 10
      // },
      method: 'GET'
    })
  
    if (!res.ok) {
      throw new Error('fetching data failed')
    }
  
    const conference = await res.json()
  
    return conference
}