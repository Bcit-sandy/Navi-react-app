"use client"

import { useState } from 'react'
import styles from './Notification.module.css'

export default function Notification() {
  const [isActive, setIsActive] = useState(false)

  return (
    <button 
      className={`${styles.notification} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <img
        className={styles.icon}
        src='/notification.svg'
        alt='notification icon'
      />
    </button>
  )
} 