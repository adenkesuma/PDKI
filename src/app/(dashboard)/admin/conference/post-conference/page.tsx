"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbUser } from "react-icons/tb"
import Link from "next/link"
import { getSession, useSession } from "next-auth/react"
import Search from "@/components/search"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"

const PostConference = () => {
  const [search, setSearch] = useState<string>('')
  const [preview, setPreview] = useState('')
  const [conferenceData, setConferenceData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    region: "",
    location: "",
    organizer: "",
    websiteUrl: "",
    registrationRequired: "",
    registrationDeadline: "",
    speakers: "",
    topic: '',
    file: ""
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
        formData.append("file", conferenceData.file)
        formData.append("title", conferenceData.title)
        formData.append("description", conferenceData.description)
        formData.append("startDate", conferenceData.startDate)
        formData.append("endDate", conferenceData.endDate)
        formData.append("location", conferenceData.location)
        formData.append("organizer", conferenceData.organizer)
        formData.append("websiteUrl", conferenceData.websiteUrl)
        formData.append("registrationRequired", conferenceData.registrationRequired)
        formData.append("registrationDeadline", conferenceData.registrationDeadline)
        formData.append("region", conferenceData.region)
        formData.append("speakers", conferenceData.speakers)
        formData.append("topic", conferenceData.topic)
        try{
            await fetch(`http://localhost:8080/api/route/admin/conference`,  {
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
        setConferenceData(prevState => ({
            ...prevState,
            file: image
        }))      
    }

    const handleChange = (event: any) => {
        const {name, value} = event.target
        setConferenceData(prevState => ({
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
    <div className="w-full">
        <label htmlFor="title">Judul Konferensi</label>
        <input 
            id="title"
            name="title"
            value={conferenceData.title}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Judul..." 
            className="w-full rounded-2xl py-3 px-4  border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="description">Deskripsi Konferensi</label>
        <input
            id="description"
            name="description"
            value={conferenceData.description}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Deskripsi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="image">Gambar Konferensi</label>
        <input 
            id="image"
            name="file"
            onChange={loadImage}
            type="file" 
            className="file-input" />
    
        {preview? (
            <figure className="image is-128x128">
                <Image src={preview} alt="preview" width={128} height={128} />
            </figure>
        ):  ("")}
    </div>
    <div className="w-full">
        <label htmlFor="startDate">Tanggal Mulai Konferensi</label>
        <input 
            id="startDate"
            name="startDate"
            value={conferenceData.startDate}
            onChange={handleChange}
            type="date" 
            placeholder="Masukan Tanggal Mulai Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="endDate">Gambar Konferensi</label>
        <input 
            id="endDate"
            name="endDate"
            value={conferenceData.endDate}
            onChange={handleChange}
            type="date" 
            placeholder="Masukan Tanggal Selesai Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="region">Region Konferensi</label>
        <input 
            id="region"
            type="text"
            name="region"
            value={conferenceData.region}
            onChange={handleChange}
            placeholder="Masukan Region Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="location">Lokasi Konferensi</label>
        <input 
            id="location"
            name="location"
            value={conferenceData.location}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Lokasi Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="organizer">Penyelenggara Konferensi</label>
        <input 
            id="organizer"
            name="organizer"
            value={conferenceData.organizer}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Penyelenggara Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="websiteUrl">Link Website Konferensi</label>
        <input 
            id="websiteUrl"
            name="websiteUrl"
            value={conferenceData.websiteUrl}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan URL Website Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full text-center">
        <label htmlFor="registrationRequired">Registrasi Konferensi</label>
       <div className="flex w-full space-x-96">
            <div className="flex gap-8">
                <input
                    type="radio"
                    name="registrationRequired"
                    value="true"
                    id="true"
                    checked={conferenceData.registrationRequired === "true"}
                    onChange={handleChange}
                />
                <label htmlFor="true">Perlu Registrasi</label>
            </div>
            <div className="flex gap-8">
                <input
                    type="radio"
                    name="registrationRequired"
                    value="false"
                    id="false"
                    checked={conferenceData.registrationRequired === "false"}
                    onChange={handleChange}
                />
                <label htmlFor="false">Tidak Perlu Registrasi</label>
            </div>
      </div>
    </div>
      {
        conferenceData.registrationRequired === "true"
        ?
        (
        <div className="w-full">
            <label htmlFor="registrationDeadline">Deadline Registrasi</label>
            <input 
                id="registrationDeadline"
                name="registrationDeadline"
                value={conferenceData.registrationDeadline}
                onChange={handleChange}
                type="date" 
                placeholder="Masukan Deadline Pendaftaran Konferensi..." 
                className="w-full rounded-2xl py-3 px-4 border-2" />
        </div>
        )
        :
        ("")
      }
    <div className="w-full">
        <label htmlFor="speakers">Pembicara</label>
        <input 
            id="speakers"
            name="speakers"
            value={conferenceData.speakers}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Pembicara Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="topic">Topik Konferensi</label>
        <input 
            id="topic"
            name="topic"
            value={conferenceData.topic}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Pembicara Konferensi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
        <button 
          type="submit" 
          className="bg-blue-100 hover:bg-blue-300 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl">
          Post Konferensi
        </button>
      </form >
    </div>
    )
  }

}

export default PostConference