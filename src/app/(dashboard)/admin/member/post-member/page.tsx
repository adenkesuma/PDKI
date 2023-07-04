"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbUser } from "react-icons/tb"
import Link from "next/link"
import { getSession, useSession } from "next-auth/react"
import Search from "@/components/search"
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
        setPreview(URL?.createObjectURL(image))
        setMemberData(prevState => ({
            ...prevState,
            file: image
        }))   
    }

    const deleteImage = () => {
        setPreview("")
        setMemberData(prevState => ({
            ...prevState,
            file: ""
        }))
    }

    const handleChange = (event: any) => {
        const {name, value} = event.target
        setMemberData(prevState => ({
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
        <label htmlFor="nama">Nama Lengkap</label>
        <input 
            id="nama"
            name="nama"
            value={memberData.nama}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nama Member..." 
            className="w-full rounded-2xl py-3 px-4  border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="username">Username</label>
        <input 
            id="username"
            name="username"
            value={memberData.username}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Username..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="password">Password</label>
        <input
            id="password"
            name="password"
            value={memberData.password}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Password..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="namaSertifikat">Nama Sertifikat</label>
        <input 
            id="namaSertifikat"
            name="namaSertifikat"
            value={memberData.namaSertifikat}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nama Sertifikat Member..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full text-center">
        <label htmlFor="subspesialisasi">Subspesialisasi</label>
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
                <label htmlFor="copc">COPC</label>
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
                <label htmlFor="fomc">FOMC</label>
            </div>
        </div>
    </div>
    <div className="w-full">
        <label htmlFor="asalInstitusi">Asal Institusi</label>
        <input 
            id="asalInstitusi"
            name="asalInstitusi"
            value={memberData.asalInstitusi}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Asal Institusi..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
    <div className="w-full">
        <label htmlFor="image">Pas Foto</label>
        <div className="flex space-x-24">    
            <input 
                name="file"
                onChange={loadImage}
                type="file" 
                accept=".jpg,.jpeg,.png"
                id="image"
            />
    </div>
            {preview == "" && memberData.file == ""?
            ("")
            :
            <button className="border-solid border-2 rounded-md bg-white font-semibold p-3 hover:bg-gray-300" onClick={deleteImage}>cancel</button>     
        }
        </div>    
        {preview? (

            <figure className="image">
                <Image src={preview} alt="preview" width={128} height={128} />
            </figure>
        ):  ("")}

      
    <div className="w-full">
        <label htmlFor="noSeri">Nomor Seri</label>
        <input 
            id="noSeri"
            name="noSeri"
            value={memberData.noSeri}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nomor Seri..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>    
    <div className="w-full">
        <label htmlFor="noSerkom">Nomor Serkom</label>
        <input 
            id="noSerkom"
            name="noSerkom"
            value={memberData.noSerkom}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Nomor Serkom..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>    
    <div className="w-full">
        <label htmlFor="tempatLahir">Kota Kelahiran</label>
        <input 
            id="tempatLahir"
            name="tempatLahir"
            value={memberData.tempatLahir}
            onChange={handleChange}
            type="text" 
            placeholder="Masukan Tempat Lahir..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
        </div>
    <div className="w-full">
        <label htmlFor="tanggalLahir">Tanggal Lahir</label>
        <input 
            name="tanggalLahir"
            value={memberData.tanggalLahir}
            onChange={handleChange}
            type="date" 
            placeholder="Masukan Tanggal Lahir..." 
            className="w-full rounded-2xl py-3 px-4 border-2" />
    </div>
        <div className="w-full">
            <label htmlFor="noIdi">Nomor IDI</label>
            <input 
                id="noIdi"
                name="noIdi"
                value={memberData.noIdi}
                onChange={handleChange}
                type="text" 
                placeholder="Masukan Nomor IDI..." 
                className="w-full rounded-2xl py-3 px-4 border-2" />
        </div>
        <div className="w-full">
            <label htmlFor="npaPdki">NPA PDKI</label>
            <input 
                id="npaPdki"
                name="npaPdki"
                value={memberData.npaPdki}
                onChange={handleChange}
                type="text" 
                placeholder="Masukan NPA PDKI..." 
                className="w-full rounded-2xl py-3 px-4 border-2" />
        </div>
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