import React, { useState } from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import styles from './Tabs.module.css';

const Tabs = (props) => {

  const [activeTab, setActiveTab] = useState([]);

  const [tabContent, setTabContent] = useState([
    "https://thumbs.gfycat.com/WealthyBelovedGreatdane-max-1mb.gif", 
    "https://media.tenor.com/Pb1TfZhr-OQAAAAM/spy-x-family-anya.gif",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c69b944-37eb-4fc6-92a6-2b79a098ebfb/d8e4lw9-ac95fe1c-581e-4eda-b22e-7afe98cf53f8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjNjliOTQ0LTM3ZWItNGZjNi05MmE2LTJiNzlhMDk4ZWJmYlwvZDhlNGx3OS1hYzk1ZmUxYy01ODFlLTRlZGEtYjIyZS03YWZlOThjZjUzZjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SxYLT9t_dPCwhWIObv2ZVBaIT74_pW9wv_hizFU2XFw",
  ])
 
  return (
    <div className={styles.tabs}>
     <ul className={styles.list}>
      <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
     </ul>
     <div className={styles.outlet}>
      <h1>Great Smiles</h1>
      <TabContent id="tab1" activeTab={activeTab}>
        <img src={tabContent[0]} alt="one_piece_luffy" />
      </TabContent>
      <TabContent id="tab2" activeTab={activeTab}>
        <img src={tabContent[1]} alt="smiling_girl_anime" />
      </TabContent>
      <TabContent id="tab3" activeTab={activeTab}>
        <img src={tabContent[2]} alt="swaako_smile" />
      </TabContent>
     </div>
    </div>
  )
}

export default Tabs