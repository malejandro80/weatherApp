/** @format */

import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import pofile1 from '../../assets/img/profile1.png'
import pofile2 from '../../assets/img/profile2.png'
import pofile3 from '../../assets/img/profile3.png'

export default function VisitCard() {
  return (
    <div className={styles.content}>
      <div className={styles.leftSide}>
        <div className={styles.title}>
          <h1>Place to</h1> <h4>Visit</h4>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div className={styles.text}>
            <h4>Arab Street</h4>
            <h4>Singapore</h4>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.reviewsContent}>
          <span>+ Top Reviews</span>
          <div className={styles.reviews}>
            <img
              src={pofile1}
              alt='profile1'
              className={`${styles.item} ${styles.item1}`}
            />
            <img
              src={pofile2}
              alt='profile2'
              className={`${styles.item} ${styles.item2}`}
            />
            <img
              src={pofile3}
              alt='profile3'
              className={`${styles.item} ${styles.item3}`}
            />
            <div className={styles.more}>
              <span>9+</span>
            </div>
          </div>
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
          <div className={styles.moreButton}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
        </div>
      </div>
    </div>
  )
}
