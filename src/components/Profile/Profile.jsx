import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';

const Profile = (props) => {
    return  (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts mes="Мои посты!!!" MyPostData={props.mypostdata} />
    </div>
  )
}

export default Profile;
