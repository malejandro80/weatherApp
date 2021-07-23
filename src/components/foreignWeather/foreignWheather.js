/** @format */

import React from 'react'
import styles from './styles.module.scss'
import svg from '../../assets/img/ilustration.svg'
import WeatherItem from './WeatherItem'

export default function ForeignWheather() {
  return (
    <div className={styles.section}>
      <WeatherItem />
      <WeatherItem />
      <div className={styles.addPlaceContent}>
        <button>add Locations</button>

        <img src={svg} alt='' />
      </div>
    </div>
  )
}
