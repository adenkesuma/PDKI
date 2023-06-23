

async function getData( id: string ) {
    const res = await fetch(`http://localhost:8080/api/route/news/${id}`)

    if(!res.ok) {
        throw new Error('Fetch failed')
    }

    const data = await res.json()

    return data
}

const newsId = async ({ 
    params: { id }, 
} : {
    params: { id: string }
}) => {
    const fetchNewId = await getData(id)
    console.log(id)

    console.log(fetchNewId)

    return (
        <div>News id : {id}</div>
    )
}

export default newsId