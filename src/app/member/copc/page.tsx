import { fetchMember } from '@/lib/fetch/get-member'
import { MemberProps } from '@/utils/interface'
import React from 'react'

const MemberCopc = async () => {
    const data = await fetchMember()

    const dataCopc = data.map((item : MemberProps) => {
        if( item?.subspesialisasi === "Community Oriented Primary Care (COPC)" ){
            return (
                <p key={item.npa_pdki}>{item?.nama}</p>
            )
        } else {
            return (
                <p key={item.npa_pdki}></p>
            )
        }
    })

    return (
        <div className='my-12 px-4 lg:px-6 xl:px-12'>
            <h3 className='text-[#222] text-[20px] mb-4 font-semibold'>Member Community Oriented Primary Care</h3>

            {dataCopc}
        </div>
    )
}

export default MemberCopc