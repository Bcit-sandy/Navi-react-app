"use client"

import { useState } from 'react'
import styles from './Card.module.css'

export default function Card() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div 
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={styles.header}>
        <img
          className={styles.image}
          src='/card_image.svg'
          alt='card image'
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Card Title</h3>
        <p className={styles.description}>Card description goes here...</p>
      </div>
    </div>
  )
} 