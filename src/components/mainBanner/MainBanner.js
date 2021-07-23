/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function MainBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <h4>Bogotá</h4>
      </div>
    </div>
  )
}
