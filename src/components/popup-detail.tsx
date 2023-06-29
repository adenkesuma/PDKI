import { TbEdit, TbEye } from "react-icons/tb"
import { MdOutlineDelete } from "react-icons/md"
import Link from "next/link"

const PopupDetail = ({ npaPdki }) => {
  return (
    <div className="absolute right-6 bg-[#274698] rounded-2xl py-4 px-4 text-[#1a1a1a] flex flex-col gap-3">
        <Link href={`member/${npaPdki}`} className="flex gap-3 items-center justify-start bg-[#fff] rounded-xl py-2 px-4 text-[#1a1a1a]">
            <TbEye className="text-[20px] text-[#666]" />
            <p className="text-[16px] font-medium">Lihat</p>
        </Link>
        <Link href={`member/${npaPdki}/edit`} className="flex gap-3 items-center justify-start bg-[#fff] rounded-xl py-2 px-4 text-[#1a1a1a]">
            <TbEdit className="text-[20px] text-[#666]" />
            <p className="text-[16px] font-medium">Edit</p>
        </Link>
        <button className="flex gap-3 items-center justify-start bg-[#fff] rounded-xl py-2 px-4 text-red-600">
            <MdOutlineDelete className="text-[20px] text-[#666]"/>
            <p className="text-[16px] font-medium">Hapus</p>
        </button>
    </div>
  )
}

export default PopupDetail