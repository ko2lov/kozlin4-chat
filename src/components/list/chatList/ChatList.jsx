import React, { useState } from 'react'
import styles from './ChatList.module.css'


const ChatList = () => {
  
  const [addMode,setAddMode] = useState(false)
  const [text, setText] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }
  return (
    <div className={styles.chatList}>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <img src="./icon/search.png" alt="search" srcset="" />
          <input onChange={handleChange} value={text} type="text" placeholder='Search' />
        </div>
        <img src={addMode ? './icon/minus.png' : './icon/plus.png'} alt='plus' className={styles.add} onClick={()=>setAddMode((mode)=>!mode)} />
      </div>
    </div>
  )
}

export default ChatList