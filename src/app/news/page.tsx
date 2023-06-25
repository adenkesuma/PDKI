// "use client"
// import { useState, useEffect, useCallback, ChangeEvent } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Image from "next/image"
import { TbSearch } from "react-icons/tb"
import { TbArrowUpRight } from "react-icons/tb"
import { NewsProps } from "@/utils/interface"
import { fetchNews } from "@/lib/fetch/get-news"

const News = async () => {
  // const [search, setSearch] = useState<string>('')
  // const [newsData, setNewsData] = useState<NewsProps[]>([])

  const getFetchNews = await fetchNews()

  // useEffect(() => {
  //   fetch(`http:localhost:8080/api/route/news?q=${search}`)
  //   .then((res) => res.json())
  //   .then((data) => setNewsData(data))
  // }, [search]) 

  // const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(event.target.value)
  // }, [])

  // console.log(newsData)

  return (
    <>
      <main className="container px-4 sm:px-0 mx-auto">
        {/* header dari halaman berita */}
        <Header heading="PDKI" subheading="Berita dan Informasi" />

        <section className="my-12 px-4 lg:px-6">
          <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
            <h2 className="font-semibold text-[30px] mb-4">News</h2>
            <div className="relative">   
              <input 
                className="bg-gray-100 border-[1.6px] border-[#666] rounded-2xl py-2 pl-4 pr-8 w-[80%] sm:w-[350px]"
                type="text" 
                placeholder="Ketikan judul berita ..."
                // value={search}
                // onChange={onSetSearch}
              />
              <TbSearch className="absolute top-[10px] right-3 text-xl text-[#666]"/>
            </div>
          </div>

          {/* news */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {getFetchNews.data.map((item : NewsProps) => (
               <div key={item.id}>
                  <figure className="h-[160px] relative block overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                    <Image 
                      width={300}
                      height={300}
                      className="duration-100 object-cover bg-cover h-full hover:scale-110 w-full rounded-tr-2xl rounded-tl-2xl"
                      src={item.image}
                      alt="news 1"
                    />
                    <div className="absolute top-5 right-5 p-2 rounded-[50%] bg-white">
                      <Link href={`/news/${item.id}`}>
                        <TbArrowUpRight className="w-[24px] h-[24px] text-[#274698]"/>
                      </Link>
                    </div>
                  </figure>
                  <div className="flex flex-col justify-between p-6 bg-[#274698] rounded-bl-2xl overflow-hidden rounded-br-2xl h-[140px]">
                    <div>
                      <h4 className="text-white font-semibold text-[16px] text-ellipsis overflow-hidden whitespace-nowrap">{item.title}</h4>
                      <p className="text-gray-300 text-[14px] font-medium text-ellipsis overflow-hidden whitespace-nowrap">{item.description}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-[14px] text-gray-100 font-medium">{item.publishedDate}</span>
                      <span className="text-[14px] text-gray-100 font-medium">{item.tags}</span>
                    </div>
                  </div>
                </div>  
            ))} 
          </div>         
        </section>

      </main>
    </>
  )
}

export default News
