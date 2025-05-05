"use client"

import { useState } from 'react'
import styles from './Badge.module.css'

export default function Badge() {
  const [isActive, setIsActive] = useState(false)

  return (
    <button 
      className={`${styles.badge} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <img
        className={styles.icon}
        src='/badge.svg'
        alt='badge icon'
      />
    </button>
  )
} 