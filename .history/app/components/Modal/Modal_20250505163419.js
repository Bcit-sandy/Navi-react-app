"use client"

import { useState } from 'react'
import styles from './Modal.module.css'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        className={styles.button}
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h2 className={styles.title}>Modal Title</h2>
              <button 
                className={styles.close}
                onClick={() => setIsOpen(false)}
              >
                <img
                  className={styles.icon}
                  src='/close.svg'
                  alt='close icon'
                />
              </button>
            </div>
            <div className={styles.content}>
              <p>Modal content goes here...</p>
            </div>
            <div className={styles.footer}>
              <button 
                className={styles.cancel}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button 
                className={styles.confirm}
                onClick={() => setIsOpen(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 