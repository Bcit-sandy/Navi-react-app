"use client"

import { useState } from 'react'
import styles from './Dropdown.module.css'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Select an option')

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ]

  return (
    <div className={styles.dropdown}>
      <button 
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <img
          className={styles.icon}
          src='/arrow_down.svg'
          alt='arrow down'
        />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {options.map((option, index) => (
            <button
              key={index}
              className={styles.option}
              onClick={() => {
                setSelectedOption(option)
                setIsOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 