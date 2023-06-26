"use client"
import { useEffect, useState } from "react"
import { FormEvent } from "react"
import { TbX } from "react-icons/tb"
import PopUpSuccess from "./pop-up-success"

interface GetConnectionProps {
  handleConnection: () => void
  setShow: (show: boolean) => void
}

const GetConnection = ({ handleConnection, setShow } : GetConnectionProps) => {
  const [nama, setNama] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const res = await fetch('http://localhost:8080/api/route/get-connected', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nama, email })
      })

      if (res.ok) {
        const data =  await res.json()
        setIsSubmitted(true)
        // setShow(false)
      } else {
        console.error('failed to load data')
      } 
    } catch (err) {
      console.error('An error oncurred', err)
    }
  } 

  // // popup statment
  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false)
        setShow(false)
      }, 5000)
    }
  }, [isSubmitted])

  return (
    <>
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
            id="nama"
            name="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukan nama..." 
            required 
            className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" 
          />
          <input 
            type="email" 
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukan email..." 
            required 
            className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" 
          />
          <button type="submit" className="bg-blue-100 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl hover:bg-blue-200">Daftar</button>
        </form>

        <div className="w-[90%] lg:w-[50%]">
          <p className="text-center text-blue-100 text-[14px]">
            Dengan mengirimkan informasi saya, saya setuju untuk menerima pembaruan personalisasi tentang berita ataupun konferensi PDKI, berdasarkan informasi,
            minat, aktifitas, kunjungan situs web dan data perangkat saya, sesuai dengan kebijakan privasi
          </p>
        </div>

        {isSubmitted && <PopUpSuccess />}
      </div>
    </>
  )
}

export default GetConnection
