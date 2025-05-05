"use client"

import { useState } from 'react'
import styles from './Tabs.module.css'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: 'Tab 1' },
    { id: 1, label: 'Tab 2' },
    { id: 2, label: 'Tab 3' }
  ]

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {activeTab === 0 && <p>Content for Tab 1</p>}
        {activeTab === 1 && <p>Content for Tab 2</p>}
        {activeTab === 2 && <p>Content for Tab 3</p>}
      </div>
    </div>
  )
} 