import React from 'react'
import styles from './UserInfo.module.css'
// import more from '../../../../public/icon/more.png'

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
        <div className={styles.user}>
            <img src="./images/avatar.jpg" alt="ava" srcset="" />
            <h2>kozlin4 roman</h2>
        </div>
        <div className={styles.icons}>
           <img src="./icon/more.png" alt="more" srcset="" />
           <img src="./icon/video.png" alt="video" srcset="" />
           <img src="./icon/edit.png" alt="edit" srcset="" />
        </div>
    </div>
  )
}

export default UserInfo