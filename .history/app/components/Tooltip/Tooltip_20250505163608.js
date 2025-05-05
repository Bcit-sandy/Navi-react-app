"use client"

import { useState } from 'react'
import styles from './Tooltip.module.css'

export default function Tooltip() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={styles.container}>
      <button 
        className={styles.button}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        Hover me
      </button>
      {isVisible && (
        <div className={styles.tooltip}>
          This is a tooltip
        </div>
      )}
    </div>
  )
} 