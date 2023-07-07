"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbUpload, TbUser } from "react-icons/tb"
import Link from "next/link"
import { getSession, useSession } from "next-auth/react"
import Search from "@/components/search"
import newsData from "@/components/member-data"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"
import { MdArrowBackIosNew } from "react-icons/md"
import BackNavigate from "@/components/back-navigate"

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
    const router = useRouter()
    
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
                body : formData,
                credentials: "include"
            })

            if (formData !== null) {
                router.push("/admin/news")
            }
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

    const deleteImage = () => {
        setPreview("")
        setNewsData(prevState => ({
            ...prevState,
            file: ""
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
            <div className="w-full my-10 flex flex-col ml-[240px]">
                {/* arrow back  */}
                <BackNavigate path={"news"} text={"Upload Berita Baru"} />

                {/* form */}
                <form 
                    className="flex flex-col items-center gap-8 mx-auto w-[80%]"
                    onSubmit={addMember}
                >
                    <div className="w-full">
                        <label htmlFor="title" className="font-medium">Judul Berita</label>
                        <input 
                            name="title"
                            value={newsData.title}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Masukan Judul..." 
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2" 
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="content" className="font-medium">Konten Berita</label>
                        <textarea 
                            name="content"
                            value={newsData.content}
                            onChange={handleChange}
                            placeholder="Masukan Content..." 
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4]" 
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="font-medium">Deskripsi</label>
                        <textarea
                            name="description"
                            value={newsData.description}
                            onChange={handleChange}
                            placeholder="Masukan Deskripsi..." 
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2" 
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="publishedDate" className="font-medium">Tanggal Saat Membuat Berita</label>
                        <input 
                            name="publishedDate"
                            value={newsData.publishedDate}
                            onChange={handleChange}
                            type="date" 
                            placeholder="Masukan Nama Tanggal..." 
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]" 
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="image" className="font-medium">Gambar Terkait</label>
                        <div className="relative flex justify-center w-full flex-col items-center gap-8 space-x-24 border border-[#d4d4d4] bg-[#fff] rounded-2xl p-8 mt-2">    
                            {preview ? (
                                <figure className="image">
                                    <Image src={preview} alt="preview" width={200} height={200} />
                                </figure> ) : (
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <TbUpload className="text-[50px] text-[#888]" />
                                    <p className="text-center text-[14px] font-medium text-[#888]">Klik button untuk memasukan gambar</p>
                                </div> 
                            )}
                            <input 
                                name="file"
                                onChange={loadImage}
                                type="file" 
                                accept=".jpg,.jpeg,.png"
                                id="image"
                                className="file:bg-[#274698] file:px-4 file:py-2 file:rounded-xl file:border-none file:text-[#fff] file:font-medium file:text-[#14px] file:mr-6 hover:file:bg-blue-600"
                            />
                            {preview == "" && newsData.file == ""?
                                ("")
                                :
                                <button 
                                    className="absolute top-4 -left-20 border-solid border-2 rounded-xl bg-white font-medium px-4 py-2 hover:bg-gray-300" 
                                    onClick={deleteImage}
                                >
                                    Cancel
                                </button>     
                            }
                        </div>
                    </div>      
                    <div className="w-full">
                        <label htmlFor="video" className="font-medium">Video Terkait</label>
                        <input 
                            name="video"
                            value={newsData.video}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Masukan URL Video..." 
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="tags" className="font-medium">Tags Berita</label>
                        <input 
                            name="tags"
                            value={newsData.tags}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Masukan Tagline Berita..." 
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]" 
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="category" className="font-medium">Category Berita</label>
                        <input 
                            name="category"
                            value={newsData.category}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Masukan Kategori Berita..." 
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]" 
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="published" className="font-medium">Publish</label>
                        <div>
                            <div className="flex gap-8">
                                <input
                                type="radio"
                                name="published"
                                value="true"
                                id="true"
                                checked={newsData.published === "true"}
                                onChange={handleChange}
                                />
                                <label htmlFor="true" className="font-medium text-[14px]">Publish</label>
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
                                <label htmlFor="false" className="font-medium text-[14px]">Jangan Publish</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="region" className="font-medium">Wilayah Berita Terkait</label>
                        <input 
                            name="region"
                            value={newsData.region}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Masukan Region Berita..." 
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="text-[#fff] hover:bg-blue-600 bg-rounded-3xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl"
                    >
                        Tambah Berita
                    </button>
                </form >
            </div>
        
        )
    }

}

export default PostNews