/** @format */

import React from 'react'
import './App.scss'
import LastWeather from './components/lastsWeather/LastWeather'
import MainBanner from './components/mainBanner/MainBanner'
import Reviews from './components/reviews/Reviews'
import VisitCard from './components/visitCard/VisitCard'
export default function App() {
  return (
    <div className='mainContainer'>
      <div className='content'>
        <MainBanner />
        <div className='gridContainer'>
          <LastWeather />
          <VisitCard />
        </div>
      </div>
    </div>
  )
}
