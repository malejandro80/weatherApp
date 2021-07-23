/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function WeatherSide() {
  return (
    <div className={styles.widgetContent}>
      <div className={styles.up}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
      </div>
      <div className={styles.down}>
        <div className={styles.temp}>
          <h4>32</h4>
          <span>°C</span>
        </div>
      </div>
    </div>
  )
}
