"use client"
import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { TbUpload } from "react-icons/tb"
import { useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"
import Image from "next/image"
import BackNavigate from "@/components/back-navigate"
import { fetchData, options } from "@/lib/fetch/dashboard-fetch"

const EditConference = ({
    params: { conferenceId }
}: {
    params: { conferenceId: string }
}) => {
    const [search, setSearch] = useState<string>('')
    const [preview, setPreview] = useState('')
    const [conferenceData, setConferenceData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        region: "",
        location: "",
        organizer: "",
        websiteUrl: "",
        registrationRequired: "false",
        speakers: "",
        topic: '',
        file: ""
    })
    const router = useRouter()

    // session 
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        }
    })

    useEffect(() => {
        const fetchDataNews = async () => {
            const getConferenceData = await fetchData(
                `${process.env.BASE_URL}/api/route/conference/${conferenceId}`,
                options
            )
            setConferenceData({
                title: getConferenceData.title,
                description: getConferenceData.description,
                startDate: getConferenceData.startDate,
                endDate: getConferenceData.endDate,
                region: getConferenceData.region,
                location: getConferenceData.location,
                organizer: getConferenceData.organizer,
                websiteUrl: getConferenceData.websiteUrl,
                registrationRequired: getConferenceData.registrationRequired,
                speakers: getConferenceData.speakers,
                topic: getConferenceData.topic,
                file: getConferenceData.image
            })
            console.log(getConferenceData.startDate);

        }

        fetchDataNews()
    }, [])

    const editConference = async (event: any) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("file", conferenceData.file)
        formData.append("title", conferenceData.title)
        formData.append("description", conferenceData.description)
        formData.append("startDate", conferenceData.startDate)
        formData.append("endDate", conferenceData.endDate)
        formData.append("location", conferenceData.location)
        formData.append("organizer", conferenceData.organizer)
        formData.append("websiteUrl", conferenceData.websiteUrl)
        formData.append("registrationRequired", conferenceData.registrationRequired)
        formData.append("region", conferenceData.region)
        formData.append("speakers", conferenceData.speakers)
        formData.append("topic", conferenceData.topic)
        try {
            await fetch(`${process.env.BASE_URL}/api/route/admin/conference/${conferenceId}`, {
                method: "PUT",
                body: formData,
                credentials: "include"
            })
        } catch (err) {
            console.log(err);

        }
    }

    const loadImage = (event: any) => {
        const image = event.target.files[0]
        setPreview(URL.createObjectURL(image))
        setConferenceData(prevState => ({
            ...prevState,
            file: image
        }))
    }

    const deleteImage = () => {
        setPreview("")
        setConferenceData(prevState => ({
            ...prevState,
            file: ""
        }))
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setConferenceData(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    const redirectBack = () => {
        router.push("/admin/conference")
    }

    const onSetSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }, [])

    if (status === "authenticated") {
        return (
            <div className="w-full my-10 flex flex-col ml-[240px]">
                {/* arrow back */}
                <BackNavigate path={"conference"} text={"Upload Konferensi Baru"} />

                <form
                    className="flex flex-col items-center gap-8 mx-auto w-[80%]"
                    onSubmit={editConference}
                >
                    <div className="w-full">
                        <label htmlFor="title" className="font-medium">Judul Konferensi</label>
                        <input
                            id="title"
                            name="title"
                            value={conferenceData.title}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Judul..."
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="description" className="font-medium">Deskripsi Konferensi</label>
                        <input
                            id="description"
                            name="description"
                            value={conferenceData.description}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Deskripsi..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="image" className="font-medium">Foto Terkait Konferensi</label>
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
                            {preview == "" && conferenceData.file == "" ?
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
                        <label htmlFor="startDate" className="font-medium">Tanggal Mulai Konferensi</label>
                        <input
                            id="startDate"
                            name="startDate"
                            value={conferenceData.startDate}
                            onChange={handleChange}
                            type="date"
                            placeholder="Masukan Tanggal Mulai Konferensi..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="endDate" className="font-medium">Tanggal Selesai Konferensi</label>
                        <input
                            id="endDate"
                            name="endDate"
                            value={conferenceData.endDate}
                            onChange={handleChange}
                            type="date"
                            placeholder="Masukan Tanggal Selesai Konferensi..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="region" className="font-medium">Region Konferensi</label>
                        <input
                            id="region"
                            type="text"
                            name="region"
                            value={conferenceData.region}
                            onChange={handleChange}
                            placeholder="Masukan Region Konferensi..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="location" className="font-medium">Lokasi Konferensi</label>
                        <input
                            id="location"
                            name="location"
                            value={conferenceData.location}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Lokasi Konferensi..."
                            className="w-full rounded-2xl py-3 px-4 border border-[#d4d4d4] mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="organizer" className="font-medium">Penyelenggara Konferensi</label>
                        <input
                            id="organizer"
                            name="organizer"
                            value={conferenceData.organizer}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Penyelenggara Konferensi..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="websiteUrl" className="font-medium">Link Website Konferensi</label>
                        <input
                            id="websiteUrl"
                            name="websiteUrl"
                            value={conferenceData.websiteUrl}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan URL Website Konferensi..."
                            className="w-full mt-2 rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="registrationRequired" className="font-medium">Registrasi Konferensi</label>
                        <div className="flex flex-col">
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="registrationRequired"
                                    value="true"
                                    id="true"
                                    checked={conferenceData.registrationRequired === "true"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="true" className="text-[14px] font-medium text-gray-800">Perlu Registrasi</label>
                            </div>
                            <div className="flex gap-8">
                                <input
                                    type="radio"
                                    name="registrationRequired"
                                    value="false"
                                    id="false"
                                    checked={conferenceData.registrationRequired === "false"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="false" className="text-[14px] font-medium text-gray-800">Tidak Perlu Registrasi</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="speakers" className="font-medium">Pembicara</label>
                        <input
                            id="speakers"
                            name="speakers"
                            value={conferenceData.speakers}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Pembicara Konferensi..."
                            className="mt-2 w-full rounded-2xl py-3 px-4 border border-[#d4d4d4]"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="topic" className="font-medium">Topik Konferensi</label>
                        <input
                            id="topic"
                            name="topic"
                            value={conferenceData.topic}
                            onChange={handleChange}
                            type="text"
                            placeholder="Masukan Pembicara Konferensi..."
                            className="w-full rounded-2xl py-3 px-4 mt-2 border border-[#d4d4d4]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-[#fff] hover:bg-blue-600 bg-rounded-3xl py-3 px-12 font-semibold bg-[#274698] rounded-2xl"
                        onClick={redirectBack}
                    >
                        Upload Konferensi
                    </button>
                </form >
            </div>
        )
    }
}

export default EditConference