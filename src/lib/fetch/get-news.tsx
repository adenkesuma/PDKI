export async function fetchNews() {
    const res = await fetch("http://localhost:8080/api/route/news", {
      cache: 'no-store',
      mode: 'cors',
      next: {
        revalidate: 10
      },
      method: 'GET'
    })
  
    if (!res.ok) {
      throw new Error("fetching data invalid")
    }
  
    const news = await res.json()
  
    return news
}