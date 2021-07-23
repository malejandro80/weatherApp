/** @format */

import React, { useEffect } from 'react'
import './App.scss'
import ForeignWheather from './components/foreignWeather/ForeignWheather'
import LastWeather from './components/lastsWeather/LastWeather'
import MainBanner from './components/mainBanner/MainBanner'
import VisitCard from './components/visitCard/VisitCard'
import WeatherSide from './components/weatherSide/WeatherSide'
// import { mainWeather } from './services/WeatherService'
import useApi from '../src/hooks/useApi'

export default function App() {
  const { mainWeather, lastestWeather, otherWeathers } = useApi()

  return (
    <div className='mainContainer'>
      <div className='content'>
        <WeatherSide mainWeather={mainWeather} />
        <MainBanner />
        <div className='gridContainer'>
          <LastWeather lastestWeather={lastestWeather} />
          <VisitCard />
          <ForeignWheather otherWeathers={otherWeathers} />
        </div>
      </div>
    </div>
  )
}
