"use client"
import { useEffect, useState } from 'react'
import AnalyticsOverview from './analytics-overview'
import CardConference from './card-conference'
import CardNews from './card-news'
import { Item, NewsProps, ConferenceProps, MemberProps } from '@/utils/interface'
import MemberData from './member-data'
import PopupDetail from './popup-detail'
import { TbChevronRight, TbDots } from 'react-icons/tb'
import Link from 'next/link'
import Image from 'next/image'
import { fetchData, options } from '@/lib/fetch/dashboard-fetch'

const DashboardData = ({ news, member, conference }: any) => {
  const [selectedMemberClick, setSelectedMemberClick] = useState<number | null>(null)
  const [showDetail, setShowDetail] = useState<boolean>(false)

  const handleShowDetail = (id: number) => {
    setShowDetail(!showDetail)
    setSelectedMemberClick((prevId) => (prevId === id ? null : id))
  }

  // get 3 news updated
  const getLatestNews = news
  const sortedNews = getLatestNews?.sort((a: Item, b: Item) => b.id - a.id)
  const threeLatestNews = sortedNews?.slice(0, 3)

  // // get 5 member updated
  const getLatestMember = member
  const sortedMember = getLatestMember?.sort((a: Item, b: Item) => b.id - a.id)
  const fiveLatestMember = sortedMember?.slice(0, 5)

  // // get 3 conference updated
  const getLatestConfrence = conference
  const sortedConfernce = getLatestConfrence?.sort((a: Item, b: Item) => b.id - a.id)
  const threeLatestConference = sortedConfernce?.slice(0, 3)

  return (
    <div className='flex flex-col gap-6'>
      {/* analytics overview */}
      <AnalyticsOverview />

      <div>
        <div className='flex justify-between items-center'>
          <h2 className="text-[18px] xl:text-[20px] text-[#1a1a1a] font-semibold mb-6">Member Terbaru</h2>
          <Link href="/admin/member" className='font-medium text-[16px] flex justify-between items-center gap-3'>
            Lihat Semua Member
            <TbChevronRight className='text-[24px]' />
          </Link>
        </div>

        <section>
          <div className="w-full">
            {fiveLatestMember?.map((item: MemberProps, idx: number) => (
              <ul key={item.memberId} className="p-6 mb-6 flex justify-between items-center font-medium text-gray-800 bg-[#fff] rounded-2xl shadow-md shadow-gray-200">
                <li className="w-[8%] pr-4">
                  <Image
                    src={item.pasFoto}
                    alt={item.nama}
                    width={100}
                    height={100}
                    className="h-[50px] w-[50px] rounded-xl"
                  />
                </li>
                <li className="w-[58%]">{item.nama}</li>
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
        </section>
      </div>

      {/* news */}
      <div className='mb-6'>
        <div className='flex justify-between items-center'>
          <h2 className="text-[18px] xl:text-[20px] text-[#1a1a1a] font-semibold mb-6">Berita Terbaru</h2>
          <Link href="/admin/news" className='font-medium text-[16px] flex justify-between items-center gap-3'>
            Lihat Semua Berita
            <TbChevronRight className='text-[24px]' />
          </Link>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {threeLatestNews.map((item: NewsProps) => (
            <CardNews
              key={item?.id}
              id={item?.id}
              title={item?.title}
              description={item?.description}
              image={item?.image}
              video={item?.video}
              content={item?.content}
              published={item?.published}
              region={item?.region}
              publishedDate={item?.publishedDate}
              categories={item?.categories}
              tags={item?.tags}
            />
          ))}
        </section>
      </div>

      {/* conference */}
      <div className='mb-6'>
        <div className='flex justify-between items-center'>
          <h2 className="text-[18px] xl:text-[20px] text-[#1a1a1a] font-semibold mb-6">Konferensi Terbaru</h2>
          <Link href="/admin/news" className='font-medium text-[16px] flex justify-between items-center gap-3'>
            Lihat Semua Berita
            <TbChevronRight className='text-[24px]' />
          </Link>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {threeLatestConference?.map((item: ConferenceProps) => (
            <CardConference
              key={item?.id}
              id={item?.id}
              title={item?.title}
              description={item?.description}
              image={item?.image}
              startDate={item?.startDate}
              endDate={item?.endDate}
              location={item?.location}
              organizer={item?.organizer}
              websiteUrl={item?.websiteUrl}
              registrationRequired={item?.registrationRequired}
              registrationDeadline={item?.registrationDeadline}
              speakers={item?.speakers}
              isFree={item?.isFree}
              topic={item?.topic}
              createdAt={item?.createdAt}
              updatedAt={item?.updatedAt}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default DashboardData