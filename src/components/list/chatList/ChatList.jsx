import React from 'react'
import styles from './ChatList.module.css'


const ChatList = () => {
  return (
    <div className={styles.chatList}>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <img src="" alt="" srcset="" />
          <input type="text" placeholder='Search' />
        </div>
        <img/>
      </div>
    </div>
  )
}

export default ChatList