import React from 'react'
import './TrendCard.css'
import { TrendData } from '~/Data'

const TrendCard = () => {
  return (
    <div className="trend-card">
      <h2>Trends for you</h2>
      {TrendData.map((trend, id) => {
        return(
          <div className="trend" key={id}>
            <span><b>#{trend.name}</b></span>
            <span>{trend.shares}k shares</span>
          </div>
        )
      })}
    </div>
  )
}

export default TrendCard