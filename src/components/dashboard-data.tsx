import React from 'react'
import AnalyticsOverview from './analytics-overview'
import HorizontalNews from './horizontal-news'

const DashboardData = ({ news }: any) => {
  return (
    <div>
      {/* analytics overview */}
      <AnalyticsOverview />

      {/* horizontal scroll news */}
      <HorizontalNews news={news} />
    </div>
  )
}

export default DashboardData