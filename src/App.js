/** @format */

import React from 'react'
import './App.scss'
import ForeignWheather from './components/foreignWeather/ForeignWheather'
import LastWeather from './components/lastsWeather/LastWeather'
import MainBanner from './components/mainBanner/MainBanner'
import VisitCard from './components/visitCard/VisitCard'
import WeatherSide from './components/weatherSide/WeatherSide'
export default function App() {
  return (
    <div className='mainContainer'>
      <div className='content'>
        <WeatherSide />
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
