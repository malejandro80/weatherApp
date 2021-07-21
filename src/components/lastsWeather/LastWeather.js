/** @format */

import React from 'react'
import LastWeatherItem from './LastWeatherItem'
import styles from './styles.module.scss'

export default function LastWeather() {
  return (
    <div className={styles.column}>
      <div className={styles.title}>
        <h1>3 Days</h1> <h4>Forecast</h4>
      </div>
      <div className={styles.content}>
        <LastWeatherItem />
        <LastWeatherItem />
        <LastWeatherItem />
      </div>
    </div>
  )
}
