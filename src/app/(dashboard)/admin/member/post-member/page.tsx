"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbUser } from "react-icons/tb"
import Link from "next/link"
import { getSession, useSession } from "next-auth/react"
import Search from "@/components/search"
import MemberData from "@/components/member-data"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"

const PostMember = () => {
  const [search, setSearch] = useState<string>('')
  const [preview, setPreview] = useState('')
  const [memberData, setMemberData] = useState({
    nama: "",
    username: "",
    password: "",
    namaSertifikat: "",
    subspesialisasi: "",
    asalInstitusi: "",
    noSeri: "",
    noSerkom: "",
    tempatLahir: "",
    tanggalLahir: "",
    noIdi: "",
    npaPdki: "",
    file: "",
  }) 
  
  // session 
  const { data: session, status} = useSession({
    required: true,
    onUnauthenticated(){
        redirect("/")
    }
  })
  const router = useRouter() 

    const addMember = async (event: any) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("file", memberData.file)
        formData.append("nama", memberData.nama)
        formData.append("namaSertifikat", memberData.namaSertifikat)
        formData.append("username", memberData.username)
        formData.append("password", memberData.password)
        formData.append("asalInstitusi", memberData.asalInstitusi)
        formData.append("subspesialisasi", memberData.subspesialisasi)
        formData.append("tanggalLahir", memberData.tanggalLahir)
        formData.append("tempatLahir", memberData.tempatLahir)
        formData.append("noSeri", memberData.noSeri)
        formData.append("noIdi", memberData.noIdi)
        formData.append("noSerkom", memberData.noSerkom)
        formData.append("npaPdki", memberData.npaPdki)
        try{
            await fetch(`http://localhost:8080/api/route/admin/member`,  {
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
        setMemberData(prevState => ({
            ...prevState,
            file: image
        }))
        console.log(new Date(memberData.tanggalLahir).toISOString());
        
    }

    const handleChange = (event: any) => {
        const {name, value} = event.target
        setMemberData(prevState => ({
            ...prevState,
            [name]: value
        }))
        
    }

    const convertDate  = (event: any) => {

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
            name="nama"
            value={memberData.nama}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan nama..." 
            className="w-full rounded-2xl py-3 px-4  border-2" />
        <input 
            name="username"
          value={memberData.username}
          onChange={handleChange}
          type="text" 
          placeholder="Masukan username..." 
          className="w-full rounded-2xl py-3 px-4 border-2" />
        <input
            name="password"
            value={memberData.password}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan password..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="namaSertifikat"
            value={memberData.namaSertifikat}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nama Sertifikat..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <div className="flex w-full space-x-96">
            <div className="flex gap-8">
                <input
                type="radio"
                name="subspesialisasi"
                value="Community Oriented Primary Care (COPC)"
                id="copc"
                checked={memberData.subspesialisasi === "Community Oriented Primary Care (COPC)"}
                onChange={handleChange}
                />
                <label htmlFor="regular">COPC</label>
            </div>
            <div className="flex gap-8">
                <input
                    type="radio"
                    name="subspesialisasi"
                    value="Family Oriented Medical Care (FOMC)"
                    id="fomc"
                    checked={memberData.subspesialisasi === "Family Oriented Medical Care (FOMC)"}
                    onChange={handleChange}
                />
                <label htmlFor="">FOMC</label>
            </div>
      </div>
        <input 
            name="asalInstitusi"
            value={memberData.asalInstitusi}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Asal Institusi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="file"
            onChange={loadImage}
            type="file" 
            placeholder="Masukan Pas Foto..." 
            className="file-input" />
        {preview? (

            <figure className="image is-128x128">
                <Image src={preview} alt="preview" width={128} height={128} />
            </figure>
        ):  ("")}
        <input 
            name="noSeri"
            value={memberData.noSeri}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nomor Seri..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="noSerkom"
            value={memberData.noSerkom}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nomor Serkom..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="tempatLahir"
            value={memberData.tempatLahir}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Tempat Lahir..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="tanggalLahir"
            value={memberData.tanggalLahir}
            onChange={handleChange}
            type="date" 
            placeholder="Masukan Tanggal Lahir..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="noIdi"
            value={memberData.noIdi}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nomor IDI..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <input 
            name="npaPdki"
            value={memberData.npaPdki}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan NPA PDKI..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        <button 
          type="submit" 
          className="bg-blue-100 hover:bg-blue-300 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl">
          Tambah Member
        </button>
      </form >
    </div>
    )
  }

}

export default PostMember