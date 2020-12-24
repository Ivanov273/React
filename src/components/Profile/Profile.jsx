import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import s from './Profile.module.css';

const Profile = (props) => {

    return  (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts mes="Мои посты!!!" dispatch={props.dispatch}  newPostdata={props.state.newPostdata} mypostdata={props.state.mypostdata} />
    </div>
  )
}

export default Profile;
