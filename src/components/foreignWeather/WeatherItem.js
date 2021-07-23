/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function WeatherItem() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.weatherIcon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className={styles.temperture}>
          <h1>29</h1>
          <span>°C</span>
          <div className={styles.separator}></div>
          <div className={styles.city}>
            <h4>Paris</h4>
            <span>Francia</span>
          </div>
        </div>
      </div>
      <div className={styles.weatherInfo}>
        <span>Humidity 64%</span>
        <span>West</span>
        <span>0.3 Km/h</span>
      </div>
    </div>
  )
}
