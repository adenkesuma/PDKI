import Link from "next/link"
import { MdArrowBackIosNew } from "react-icons/md"

interface Props {
    path: string;
    title: string;
}

const BackNavigate = ({ path, title }: Props) => {
    return (
        <div>
            <Link href={`/admin/${path}`} className="flex gap-6 items-center">
                    <MdArrowBackIosNew className="text-[24px]"/>
                    <Link href={`/admin/${path}`} className="text-[18px] font-medium text-[#1a1a1a]">Kembali</Link>
            </Link>
            <h2 className="text-center mt-8 mb-10 font-semibold text-[30px]">
                Masukan <span className="capitalize">{title}</span> Baru
            </h2> 
        </div>
    )
}

export default BackNavigate