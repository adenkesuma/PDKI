"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbUser } from "react-icons/tb"
import Link from "next/link"
import { getSession, useSession } from "next-auth/react"
import Search from "@/components/search"
import newsData from "@/components/member-data"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"

const PostNews = () => {
  const [search, setSearch] = useState<string>('')
  const [preview, setPreview] = useState('')
  const [newsData, setNewsData] = useState({
    title: "",
    content: "",
    description: "",
    publishedDate: "",
    video: "",
    tags: "",
    category: "",
    published: "",
    region: "",
    file: "",
  }) 
  
  // session 
  const { data: session, status} = useSession({
    required: true,
    onUnauthenticated(){
        redirect("/")
    }
  })

    const addMember = async (event: any) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("file", newsData.file)
        formData.append("title", newsData.title)
        formData.append("description", newsData.description)
        formData.append("content", newsData.content)
        formData.append("publishedDate", newsData.publishedDate)
        formData.append("video", newsData.video)
        formData.append("tags", newsData.tags)
        formData.append("category", newsData.category)
        formData.append("published", newsData.published)
        formData.append("region", newsData.region)
        try{
            await fetch(`http://localhost:8080/api/route/admin/news`,  {
                method: "POST",
                body : formData
            })
        }catch(err){
            console.log(err);
            
        }
    } 

    const loadImage = (event: any) => {
        const image = event.target.files[0]
        setPreview(URL.createObjectURL(image))
        setNewsData(prevState => ({
            ...prevState,
            file: image
        }))      
    }

    const handleChange = (event: any) => {
        const {name, value} = event.target
        setNewsData(prevState => ({
            ...prevState,
            [name]: value
        }))
        
    }

  const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  if (status === "authenticated") {
    return (   
    <div className="w-full my-10">
        <form className="flex flex-col items-center gap-8 mx-auto w-[80%] md:w-[60%] lg:w-[40%]"
        onSubmit={addMember}
      >
        <input 
            name="title"
            value={newsData.title}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Judul..." 
            className="w-full rounded-2xl py-3 px-4  border-2" />
        <textarea 
            name="content"
          value={newsData.content}
          onChange={handleChange}
          placeholder="Masukan Content..." 
          className="w-full rounded-2xl py-3 px-4 border-2" />
        <input
            name="description"
            value={newsData.description}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Deskripsi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="publishedDate"
            value={newsData.publishedDate}
            onChange={handleChange}
            type="date" 
            placeholder="Masukan Nama Tanggal..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="file"
            onChange={loadImage}
            type="file" 
            placeholder="Masukan Gambar..." 
            className="file-input" />
        {preview? (

            <figure className="image is-128x128">
                <Image src={preview} alt="preview" width={128} height={128} />
            </figure>
        ):  ("")}
        <input 
            name="video"
            value={newsData.video}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan URL Video..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="tags"
            value={newsData.tags}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Tagline Berita..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="category"
            value={newsData.category}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Kategori Berita..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
       <div className="flex w-full space-x-96">
            <div className="flex gap-8">
                <input
                type="radio"
                name="published"
                value="true"
                id="true"
                checked={newsData.published === "true"}
                onChange={handleChange}
                />
                <label htmlFor="true">Publish</label>
            </div>
            <div className="flex gap-8">
                <input
                    type="radio"
                    name="published"
                    value="false"
                    id="false"
                    checked={newsData.published === "false"}
                    onChange={handleChange}
                />
                <label htmlFor="false">Jangan Publish</label>
            </div>
      </div>
        <input 
            name="region"
            value={newsData.region}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Region Berita..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <button 
          type="submit" 
          className="bg-blue-100 hover:bg-blue-300 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl">
          Tambah Berita
        </button>
      </form >
    </div>
    )
  }

}

export default PostNews