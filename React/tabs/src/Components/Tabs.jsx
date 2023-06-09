import React, {useState} from 'react'

const Tabs = () => {
    const [tabs, setTabs] = useState(["Tab 1 content","Tab 2 content","Tab 3 content"]);
    let [currentTab,setCurrentTab] = useState(0);

    const changeTab = (e) =>{
        setCurrentTab(e.target.value)
    }


  return (
    <div>
        <div style={{display:'flex',gap:'20px',margin:"25px 0 25px 0"}}>
            <button onClick={changeTab} value={0}>Tab 1</button>
            <button onClick={changeTab} value={1}>Tab 2</button>
            <button onClick={changeTab} value={2}>Tab 3</button>
        </div>
        <div>
            {tabs[currentTab]}
        </div>
    </div>
  )
}

export default Tabs