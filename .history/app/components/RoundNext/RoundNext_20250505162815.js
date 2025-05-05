"use client";

import { useState } from 'react'
import styles from './RoundNext.module.css'

export default function RoundNext() {
  const [activeButton, setActiveButton] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.text}>Round 1 of 3</div>
      <div className={styles.options}>
        <button 
          className={`${styles.button} ${styles.next} ${activeButton === 'next' ? styles.active : ''}`}
          onClick={() => setActiveButton('next')}
        >
          Next
        </button>
        <button 
          className={`${styles.button} ${styles.skip} ${activeButton === 'skip' ? styles.active : ''}`}
          onClick={() => setActiveButton('skip')}
        >
          Skip
        </button>
      </div>
    </div>
  )
} 