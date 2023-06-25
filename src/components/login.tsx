import { FC } from "react"
import { TbX } from "react-icons/tb"

interface LoginProps {
  handleShowLogin: () => void
  setShow: (show: boolean) => void
}

const Login: FC<LoginProps> = ({ handleShowLogin, setShow }) => {

  return (
    <div className="mx-auto fixed left-0 right-0 bottom-0 top-0 h-[100vh] w-[100%] opacity-95 bg-[#274698] flex flex-col justify-center gap-12 items-center z-50">
      {/* back icon */}
      <div className="absolute top-8 right-8" onClick={handleShowLogin = () => setShow(false)}>
        <TbX className="w-[30px] h-[30px] text-blue-100" />
      </div>

      <div>
        <h2 className="text-[46px] text-blue-100 font-bold text-center">Login</h2>
      </div>
      <form className="flex flex-col items-center gap-8 mx-auto w-[40%]">
        <input type="text" placeholder="Masukan nama..." className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" />
        <input type="email" placeholder="Masukan email..." className="w-full rounded-2xl py-3 px-4 text-blue-100 outline-none border-2 placeholder-blue-100 border-blue-100 bg-transparent" />
        <button type="submit" className="bg-blue-100 bg-rounded-3xl py-3 px-12 font-semibold text-[#274698] rounded-2xl">Masuk</button>
      </form>
      <div className="w-[40%]">
        <p className="text-center text-blue-100">
          Login hanya bisa dilakukan untuk yang sudah memiliki akun
        </p>
      </div>
    </div>
  )
}

export default Login