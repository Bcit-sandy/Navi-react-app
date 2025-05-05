"use client"

import { useState } from 'react'
import styles from './Search.module.css'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.input}
      />
      <button className={styles.button}>
        <img
          className={styles.icon}
          src='/search.svg'
          alt='search icon'
        />
      </button>
    </div>
  )
} 