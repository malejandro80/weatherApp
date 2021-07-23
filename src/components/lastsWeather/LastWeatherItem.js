/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function LastWeatherItem({ weather }) {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt='icon'
        />
      </div>
      <div className={styles.text}>
        <h4>{weather.day}</h4>
        <span>{weather.typeWeather}</span>
      </div>
      <div className={styles.tempertureContent}>
        <div className={styles.temperture}>
          <h4>
            {weather.Farenheit} <span>F</span> /{weather.celcius} <span>o</span>
          </h4>
        </div>
      </div>
    </div>
  )
}
