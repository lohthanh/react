import React from 'react'
import styles from './Tabs.module.css'

const TabContent = ({id, activeTab, children}) => {
  return (
    activeTab === id ? 
    <div className={styles.tabs}>
        {children}
    </div>
    :
    null
  )
}

export default TabContent