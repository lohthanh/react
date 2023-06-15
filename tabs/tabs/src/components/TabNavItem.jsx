import React from 'react';
import styles from './Tabs.module.css';

const TabNavItem = ({ id, title, activeTab, setActiveTab}) => {

    const handleClick = () => {
        setActiveTab(id);
    };

  return (
    <li onClick={handleClick} className={activeTab === id ? styles.active : ""}> {title} </li>
  )
}

export default TabNavItem