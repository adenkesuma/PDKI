"use client"
import { useEffect, useState } from 'react'
import AnalyticsOverview from './analytics-overview'
import CardConference from './card-conference'
import CardNews from './card-news'
import { Item, NewsProps, ConferenceProps, MemberProps } from '@/utils/interface'
import MemberData from './member-data'
import PopupDetail from './popup-detail'
import { TbDots } from 'react-icons/tb'

const DashboardData = ({ news }: any) => {
  const [member, setMember] = useState<[]>([])
  const [selectedMemberClick, setSelectedMemberClick] = useState<number | null>(null)
  const [showDetail, setShowDetail] = useState<boolean>(false)

  const handleShowDetail = (id : number) => {
    setShowDetail(!showDetail)
    setSelectedMemberClick((prevId) => (prevId === id ? null : id))
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/route/admin/member')
    .then(res => res.json())
    .then(data => setMember(data.data))
    .catch(err => console.log(err))
  }, [])

  // news
  const getLatestNews = news
  const sortedNews = getLatestNews.sort((a: Item, b: Item) => b.id - a.id)
  const twoLatestNews = sortedNews.slice(0, 3)

  return (
    <div className='flex flex-col gap-6'>
      {/* analytics overview */}
      <AnalyticsOverview />
      
      {/* member */}
       <div>
        <h2 className="text-[18px] xl:text-[20px] text-[#1a1a1a] font-semibold mb-6">Ketua PDKI</h2>
          
        <section>
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
        </section>
      </div>

      {/* news */}
      <div>
        <h2 className="text-[18px] xl:text-[20px] text-[#1a1a1a] font-semibold">Berita Terbaru</h2>
          
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {twoLatestNews.map((item : NewsProps) => (
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


    </div>
  )
}

export default DashboardData