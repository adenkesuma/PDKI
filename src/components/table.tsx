import { MemberProps } from "@/utils/interface"
import { TbDots } from "react-icons/tb"
import PopupDetail from "./popup-detail"

const Table = ({ member, showDetail, handleShowDetail }) => {
    return (
        <div>
            <ul className="flex justify-between px-6 items-center mb-6 font-semibold text-gray-800">
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
                            <button className="cursor-pointer" onClick={handleShowDetail}>
                                <TbDots />
                                {showDetail && <PopupDetail memberId={item.memberId} />}
                            </button>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Table