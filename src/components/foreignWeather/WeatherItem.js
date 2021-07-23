/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function WeatherItem({ weather }) {
  console.log(weather, 'weather')
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.weatherIcon}>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            className={styles.icon}
            alt='icon'
          />
        </div>
        <div className={styles.temperture}>
          <h1>{weather.Celcius}</h1>
          <span>°C</span>
          <div className={styles.separator}></div>
          <div className={styles.city}>
            <h4>{weather.city}</h4>
            <span>{weather.country}</span>
          </div>
        </div>
      </div>
      <div className={styles.weatherInfo}>
        <span>Humidity {weather.hum}%</span>
        <span>West</span>
        <span>{weather.wind?.speed} Km/h</span>
      </div>
    </div>
  )
}
