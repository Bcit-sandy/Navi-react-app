"use client";

import { useState } from 'react'
import styles from './Elipses.module.css'

export default function Elipses() {
  const [isActive, setIsActive] = useState(false)

  return (
    <button 
      className={`${styles.elipses} ${isActive ? styles.active : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <img
        className={styles.icon}
        src='/elipses.svg'
        alt='elipses icon'
      />
    </button>
  )
} 