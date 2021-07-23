/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function LastWeatherItem() {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className={styles.text}>
        <h4>Friday</h4>
        <span>nose</span>
      </div>
      <div className={styles.tempertureContent}>
        <div className={styles.temperture}>
          <h4>
            32 <span>F</span> / 23 <span>o</span>
          </h4>
        </div>
      </div>
    </div>
  )
}
