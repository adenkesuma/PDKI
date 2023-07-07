"use client"
import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from "react"
import { MemberProps } from "@/utils/interface"
import { TbUpload, TbUser } from "react-icons/tb"
import { getSession, useSession } from "next-auth/react"
import Search from "@/components/search"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"
import { MdArrowBackIosNew } from "react-icons/md"
import BackNavigate from "@/components/back-navigate"
import { fetchData, options } from "@/lib/fetch/dashboard-fetch"

const EditMember = ({
    params: { memberId }
}: {
    params: { memberId: string }
}) => {
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
        imageFile: "",
        pdfFile: ""
    })

    useEffect(() => {
        const fetchDataMember = async () => {
            const getMemberData = await fetchData(
                `http://localhost:8080/api/route/admin/member/${memberId}`,
                options
            )
            setMemberData({
                nama: getMemberData.data.nama,
                username: getMemberData.data.username,
                password: "",
                namaSertifikat: getMemberData.data.namaSertifikat,
                subspesialisasi: getMemberData.data.subspesialisasi,
                asalInstitusi: getMemberData.data.asalInstitusi,
                noSeri: getMemberData.data.noSeri,
                noSerkom: getMemberData.data.noSerkom,
                tempatLahir: getMemberData.data.tempatLahir,
                tanggalLahir: getMemberData.data.tanggalLahir,
                noIdi: getMemberData.data.noIdi,
                npaPdki: getMemberData.data.npaPdki,
                imageFile: getMemberData.data.pasFoto,
                pdfFile: getMemberData.data.sertifikat
            })
        }

        fetchDataMember()
    }, [])

    // session 
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        }
    })
    const router = useRouter()

    const updatedMember = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("imageFile", memberData.imageFile)
        formData.append("pdfFile", memberData.pdfFile)
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

        // post data
        try {
            await fetch(`http://localhost:8080/api/route/admin/member/${memberId}`, {
                method: "PUT",
                body: formData,
                credentials: "include"
            })

            if (formData !== null) {
                router.push("/admin/member")
            }
        } catch (err) {
            console.log(err);

        }
    }

    const loadImage = (event: any) => {
        const image = event.target.files[0]
        setPreview(URL?.createObjectURL(image))
        setMemberData(prevState => ({
            ...prevState,
            imageFile: image
        }))
        console.log(image);

    }

    const loadPdf = (event: any) => {
        const pdf = event.target.files[0]
        setPreview(URL?.createObjectURL(pdf))
        setMemberData(prevState => ({
            ...prevState,
            pdfFile: pdf
        }))
    }

    const deleteImage = () => {
        setPreview("")
        setMemberData(prevState => ({
            ...prevState,
            imageFile: ""
        }))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
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
            <div className="w-full my-10 flex flex-col ml-[240px]">
                {/* arrow back  */}
                <BackNavigate path={"member"} text={"Ubah Data Member"} />

                {/* form */}
                <form
                    className="flex flex-col items-center gap-8 mx-auto w-[80%]"
                    onSubmit={updatedMember}
                >
                    <div className="w-full">
                        <label htmlFor="nama" className="font-medium">Nama Lengkap</label>
                        <input
                            id="nama"
                            name="nama"
                            value={memberData.nama}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nama Member..."
                            className="mt-2 w-full rounded-2xl py-3 px-4  border border-[#d4d4d4] outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="username" className="font-medium">Username</label>
                        <input
                            id="username"
                            name="username"
                            value={memberData.username}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Username..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="font-medium">Password</label>
                        <input
                            id="password"
                            name="password"
                            value={memberData.password}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Password..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="namaSertifikat" className="font-medium">Nama Sertifikat</label>
                        <input
                            id="namaSertifikat"
                            name="namaSertifikat"
                            value={memberData.namaSertifikat}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nama Sertifikat Member..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="subspesialisasi" className="font-medium">Subspesialisasi</label>
                        <div className="flex flex-col gap-2 w-full mt-2">
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="subspesialisasi"
                                    value="Community Oriented Primary Care (COPC)"
                                    id="copc"
                                    checked={memberData.subspesialisasi === "Community Oriented Primary Care (COPC)"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="copc" className="font-medium">COPC</label>
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
                                <label htmlFor="fomc" className="font-medium">FOMC</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="asalInstitusi" className="font-medium">Asal Institusi</label>
                        <input
                            id="asalInstitusi"
                            name="asalInstitusi"
                            value={memberData.asalInstitusi}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Asal Institusi..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="image" className="font-medium">Pas Foto</label>
                        <div className="relative flex justify-center w-full flex-col items-center gap-8 space-x-24 border border-[#d4d4d4] bg-[#fff] rounded-2xl p-8 mt-2">
                            {preview ? (
                                <figure className="image">
                                    <Image src={preview} alt="preview" width={200} height={200} />
                                </figure>) : (
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <TbUpload className="text-[50px] text-[#888]" />
                                    <p className="text-center text-[14px] font-medium text-[#888]">Klik button untuk memasukan gambar</p>
                                </div>
                            )}
                            <input
                                name="file"
                                onChange={loadImage}
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                id="image"
                                className="file:bg-[#274698] file:px-4 file:py-2 file:rounded-xl file:border-none file:text-[#fff] file:font-medium file:text-[#14px] file:mr-6 hover:file:bg-blue-600"
                            />
                            {preview == "" && memberData.imageFile == "" ?
                                ("")
                                :
                                <button
                                    className="absolute top-4 -left-20 border-solid border-2 rounded-xl bg-white font-medium px-4 py-2 hover:bg-gray-300"
                                    onClick={deleteImage}
                                >
                                    Cancel
                                </button>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="image" className="font-medium">Pas Foto</label>
                        <div className="relative flex justify-center w-full flex-col items-center gap-8 space-x-24 border border-[#d4d4d4] bg-[#fff] rounded-2xl p-8 mt-2">
                            <input
                                name="file"
                                onChange={loadPdf}
                                type="file"
                                accept=".pdf"
                                id="pdf"
                                className="file:bg-[#274698] file:px-4 file:py-2 file:rounded-xl file:border-none file:text-[#fff] file:font-medium file:text-[#14px] file:mr-6 hover:file:bg-blue-600"
                            />
                            {memberData.pdfFile == "" ?
                                ("")
                                :
                                <button
                                    className="absolute top-4 -left-20 border-solid border-2 rounded-xl bg-white font-medium px-4 py-2 hover:bg-gray-300"
                                    onClick={deleteImage}
                                >
                                    Cancel
                                </button>
                            }
                        </div>
                    </div>


                    <div className="w-full">
                        <label htmlFor="noSeri" className="font-medium">Nomor Seri</label>
                        <input
                            id="noSeri"
                            name="noSeri"
                            value={memberData.noSeri}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nomor Seri..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="noSerkom" className="font-medium">Nomor Serkom</label>
                        <input
                            id="noSerkom"
                            name="noSerkom"
                            value={memberData.noSerkom}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nomor Serkom..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="tempatLahir" className="font-medium">Kota Kelahiran</label>
                        <input
                            id="tempatLahir"
                            name="tempatLahir"
                            value={memberData.tempatLahir}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Tempat Lahir..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="tanggalLahir" className="font-medium">Tanggal Lahir</label>
                        <input
                            name="tanggalLahir"
                            value={memberData.tanggalLahir}
                            onChange={handleChange}
                            type="date"
                            placeholder="Masukan Tanggal Lahir..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="noIdi" className="font-medium">Nomor IDI</label>
                        <input
                            id="noIdi"
                            name="noIdi"
                            value={memberData.noIdi}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Nomor IDI..."
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4] outline-none" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="npaPdki" className="font-medium">NPA PDKI</label>
                        <input
                            id="npaPdki"
                            name="npaPdki"
                            value={memberData.npaPdki}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan NPA PDKI..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2 outline-none" />
                    </div>
                    <button
                        type="submit"
                        className="text-[#fff] hover:bg-blue-600 bg-rounded-2xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl"
                    >
                        Ubah Data
                    </button>
                </form >
            </div>
        )
    }

}

export default EditMember