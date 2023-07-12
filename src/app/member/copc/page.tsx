import BarcodeMember from '@/components/barcode-member'
import { fetchMember } from '@/lib/fetch/get-member'
import { MemberProps } from '@/utils/interface'
import Image from 'next/image'
import React from 'react'

const MemberCopc = async () => {
    const data = await fetchMember()

    const dataCopc = data.map((item : MemberProps) => {
        if( item?.subspesialisasi === "Community Oriented Primary Care (COPC)" ){
            return (
                <div 
                    key={item.npa_pdki}
                    className='bg-[#fff] shadow-md shadow-gray-300 p-4 rounded-2xl flex flex-col gap-6'
                >
                    <figure className='mt-4 w-[150px] h-[150px] mx-auto'>
                        <Image 
                            className="w-[150px] h-[150px] object-cover rounded-[50%]"
                            src={process.env.BASE_URL + item?.pas_foto}
                            alt="foto member"
                            width={300}
                            height={300}
                        />
                    </figure>
                    <div className='mt-2'>
                        <p className='mb-2 font-medium text-[16px] text-center'>Nama: {item?.nama}</p>
                        <BarcodeMember code={item?.npa_pdki} />
                    </div>
                </div>
            )
        } 
    })

    return (
        <div className='my-12 px-4 lg:px-6 xl:px-12'>
            <h3 className='text-[#222] text-[20px] mb-4 font-semibold'>Member Community Oriented Primary Care</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {dataCopc}
            </div>
        </div>
    )
}

export default MemberCopc