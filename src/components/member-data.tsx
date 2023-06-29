"use client"
import { useState } from "react"
import { MemberProps } from "@/utils/interface"
import { TbDots, TbPlus } from "react-icons/tb"
import { CgArrowLongUp, CgArrowLongDown } from "react-icons/cg"
import PopupDetail from "./popup-detail"

const MemberData = ({ member }) => {
    const [selectedMemberClick, setSelectedMemberClick] = useState<number | null>(null)
    const [showDetail, setShowDetail] = useState<boolean>(false)

    const handleShowDetail = (id : number) => {
        setShowDetail(!showDetail)
        setSelectedMemberClick((prevId) => (prevId === id ? null : id))
    }

    // asc & desc logic
    const sortDataDescending = (data) => {
        return data.sort((a, b) => b.id - a.id)
    }

    const sortDataAscending = (data) => {
        return data.sort((a, b) => a.id - b.id)
    }

    return (
        <div>
            <div className="flex justify-end gap-4">
              <button
                className="flex items-center gap-2 bg-transparent border-2 border-[#274698] rounded-2xl px-4 py-2 text-[#274698] font-medium text-[16px] hover:bg-[#274698] hover:text-[#fff] duration-75"
              >
                <TbPlus className="text-lg" />
                Tambah Member
              </button>
            </div>

            <ul className="mt-6 flex justify-between px-6 items-center mb-6 font-semibold text-gray-800">
                <li className="w-[5%]">No</li>
                <li className="w-[60%]">Nama</li>
                <li className="w-[10%]">No Idi</li>
                <li className="w-[13%]">Npa PDKI</li>
                <li className="w-[10%]">No Seri</li>
                <li className="w-[2%]"></li>
            </ul>

            <div className="w-full">
                {member.map((item : MemberProps) => (
                    <ul key={item.memberId} className="p-6 mb-6 flex justify-between items-center font-medium text-gray-800 bg-[#fff] rounded-2xl shadow-md shadow-gray-200">
                        <li className="w-[5%]">{item.memberId}</li>
                        <li className="w-[60%]">{item.nama}</li>
                        <li className="w-[10%]">{item.noIdi}</li>
                        <li className="w-[13%]">{item.npaPdki}</li>
                        <li className="w-[10%]">{item.noSeri}</li>
                        <li className="w-[2%] relative">
                            <button className="cursor-pointer" onClick={() => handleShowDetail(item.memberId)}>
                                <TbDots />
                                {selectedMemberClick === item.memberId && <PopupDetail npaPdki={item.npaPdki} />}
                            </button>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default MemberData