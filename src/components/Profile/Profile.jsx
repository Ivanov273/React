import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import img from './1.jpg'
import s from './Profile.module.css';

const Profile = () => {
    return  (
    <div className={s.content}>
    <div>
      <img className={s.image} src={img} />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts mes="Мои посты" />
  
   
  </div>
  )
}

export default Profile;