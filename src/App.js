/** @format */

import React from 'react'
import './App.scss'
import ForeignWheather from './components/foreignWeather/ForeignWheather'
import LastWeather from './components/lastsWeather/LastWeather'
import MainBanner from './components/mainBanner/MainBanner'
import VisitCard from './components/visitCard/VisitCard'
export default function App() {
  return (
    <div className='mainContainer'>
      <div className='content'>
        <MainBanner />
        <div className='gridContainer'>
          <LastWeather />
          <VisitCard />
          <ForeignWheather />
        </div>
      </div>
    </div>
  )
}
