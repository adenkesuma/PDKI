"use client"
import { ChangeEvent, useState } from "react"
import { FormEvent } from "react"
import { TbX } from "react-icons/tb"
import { FormData } from "@/utils/interface"

interface GetConnectionProps {
  handleConnection: () => void
  setShow: (show: boolean) => void
}

const GetConnection = async ({ handleConnection, setShow } : GetConnectionProps) => {
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   email: ""
  // })

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   })
  // }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value
    }

    alert(`your name is ${formData.name} and your email is ${formData.email}`)

    try {
      const response = await fetch('http://localhost:8080/api/route/member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = response.json()
      console.log(result)
      
    } catch (err) {
      console.error('An error oncurred', err)
    }

  } 

  return (
    <div className="mx-auto z-50 fixed left-0 right-0 bottom-0 top-0 h-[100vh] w-[100%] opacity-95 bg-[#274698] flex flex-col justify-center gap-12 items-center">
      {/* back icon */}
      <div className="absolute top-8 right-8" onClick={handleConnection = () => setShow(false)}>
        <TbX className="w-[30px] h-[30px] text-blue-100" />
      </div>

      <div>
        <h2 className="text-[20px] md:text-[28px] lg:text-[46px] text-blue-100 font-bold text-center">Daftarkan Diri Anda</h2>
        <p className="text-[14px] md:text-[16px] text-center mt-4 lg:text-[18px] font-medium text-blue-100">Tetap selalu update dengan berita-berita dan konferensi terbaru dari PDKI</p>
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col items-center gap-8 mx-auto w-[80%] md:w-[60%] lg:w-[40%]"
      >
        <input 
          type="text" 
          id="name"
          name="name"
          // value={formData.name}
          // onChange={handleChange}
          placeholder="Masukan nama..." 
          required 
          className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" 
        />
        <input 
          type="email" 
          id="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          placeholder="Masukan email..." 
          required 
          className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" 
        />
        <button type="submit" className="bg-blue-100 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl">Daftar</button>
      </form>

      <div className="w-[90%] lg:w-[50%]">
        <p className="text-center text-blue-100 text-[14px]">
          Dengan mengirimkan informasi saya, saya setuju untuk menerima pembaruan personalisasi tentang berita ataupun konferensi PDKI, berdasarkan informasi,
          minat, aktifitas, kunjungan situs web dan data perangkat saya, sesuai dengan kebijakan privasi
        </p>
      </div>
    </div>
  )
}

export default GetConnection
