/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function WeatherSide({ mainWeather }) {
  console.log(mainWeather, 'mainWeather')
  return (
    <div className={styles.widgetContent}>
      <div className={styles.up}>
        <img
          src={`http://openweathermap.org/img/wn/${mainWeather.icon}@2x.png`}
          className={styles.icon}
          alt='icon'
        />
        <span>{mainWeather.decription}</span>
      </div>
      <div className={styles.down}>
        <div className={styles.temp}>
          <h4>{mainWeather.Celcius}</h4>
          <span>°C</span>
        </div>
      </div>
    </div>
  )
}
