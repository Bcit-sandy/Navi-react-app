"use client"

import { useState, useEffect } from 'react'
import styles from './Progress.module.css'

export default function Progress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div 
          className={styles.bar}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className={styles.label}>{progress}%</div>
    </div>
  )
} 