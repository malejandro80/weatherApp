/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Reviews() {
  return (
    <div>
      <div className={styles.title}>
        <h1>Place to</h1> <h4>Visit</h4>
      </div>
      <div className={`${styles.card} ${styles.firstCard}`}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div className={styles.text}>
          <h4>Arab Street</h4>
          <h4>Singapore</h4>
        </div>
      </div>
      <div className={`${styles.card} ${styles.secondCard}`}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div className={styles.text}>
          <h4>Arab Street</h4>
          <h4>Singapore</h4>
        </div>
      </div>
    </div>
  )
}
