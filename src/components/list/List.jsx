import React from 'react'
import UserInfo from './userInfo/UserInfo'
import styles from './List.module.css'
import ChatList from './chatList/ChatList'

const List = () => {
  return (
    <div className={styles.list}>
        <UserInfo/>
        <ChatList/>
    </div>
  )
}

export default List