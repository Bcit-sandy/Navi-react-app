"use client"

import { useState } from 'react'
import styles from './Avatar.module.css'

export default function Avatar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <button 
      className={`${styles.avatar} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <img
        className={styles.image}
        src='/avatar.svg'
        alt='avatar'
      />
    </button>
  )
} 