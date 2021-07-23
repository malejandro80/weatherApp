/** @format */

import React from 'react'
import styles from './styles.module.scss'
import svg from '../../assets/img/ilustration.svg'
import WeatherItem from './WeatherItem'

export default function ForeignWheather({ otherWeathers }) {
  return (
    <div className={styles.section}>
      {otherWeathers.map(weather => (
        <WeatherItem weather={weather} />
      ))}

      <div className={styles.addPlaceContent}>
        <button>add Locations</button>

        <img src={svg} alt='' />
      </div>
    </div>
  )
}
