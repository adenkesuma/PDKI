import { FC, useState } from "react"
import { TbX } from "react-icons/tb"

interface LoginProps {
  handleShowLogin: () => void
  setShow: (show: boolean) => void
}

const Login: FC<LoginProps> = ({ handleShowLogin, setShow }) => {

  return (
    <>
      <div className="mx-auto fixed left-0 right-0 bottom-0 top-0 h-[100vh] w-[100%] opacity-95 bg-[#274698] flex flex-col justify-center gap-12 items-center z-50">
        {/* back icon */}
        <div className="absolute top-8 right-8" onClick={handleShowLogin = () => setShow(false)}>
          <TbX className="w-[30px] h-[30px] text-blue-100" />
        </div>

        <div>
          <h2 className="text-[46px] text-blue-100 font-bold text-center">Login</h2>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-blue-100 font-medium text-[16px]">Login Sebagai</p>
            <select 
              name="role" 
              id="role"
              className="bg-blue-100 outline-none font-medium text-[#333] py-[6px] px-3 rounded-xl"
            >
              <option value="admin" className="p-2 rounded-md">Admin</option>
              <option value="member" className="p-2 rounded-md">Member</option>
            </select>
          </div>
        </div>
        <form className="flex flex-col items-center gap-8 mx-auto w-[80%] md:w-[60%] lg:w-[40%]">
          <input 
            type="text" 
            placeholder="Masukan nama..." 
            className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" />
          <input 
            type="email" 
            placeholder="Masukan email..." 
            className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" />
          <button 
            type="submit" 
            className="bg-blue-100 hover:bg-blue-300 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl">
            Masuk
          </button>
        </form>
        <div className="w-[90%] md:w-[60%] lg:w-[50%]">
          <p className="text-center text-blue-100">
            Login hanya bisa dilakukan untuk yang sudah memiliki akun
          </p>
        </div>
      </div>
    </>
  )
}

export default Login