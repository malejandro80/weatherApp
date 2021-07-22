/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function ForeignWheather() {
  return (
    <div>
      <div className={styles.cardContent}>
        <div className={styles.weatherIcon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className={styles.temperture}>
          <h1>29</h1>
          <span>o</span>
          <span>c</span>
        </div>
        <div>
          <span>Totam, harum doloribus?</span>
        </div>
      </div>
    </div>
  )
}
