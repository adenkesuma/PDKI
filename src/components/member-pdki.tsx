"use client"
import { useState, useEffect, useCallback, ChangeEvent } from 'react'
import Search from './search'
import { MemberProps } from '@/utils/interface'
import Link from 'next/link'

const MemberPdki = () => { 

  return (
    <section className="my-12 px-4 lg:px-6 xl:px-12">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <h2 className="font-semibold text-[30px] mb-4">Member</h2>
        <div className='flex items-center justify-between gap-4'>
          <Link className='bg-gray-200 rounded-xl py-2 px-4 border font-medium hover:bg-gray-400 duration-75 border-gray-300' href="/member/copc">Copc</Link>
          <Link className='bg-gray-200 rounded-xl py-2 px-4 border font-medium hover:bg-gray-400 duration-75 border-gray-300' href="/member/fomc">Fomc</Link>
        </div>
      </div>
    </section>
  )
}

export default MemberPdki