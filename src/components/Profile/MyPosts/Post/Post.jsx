import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
	
    return (
    <div className={s.wrapper}>
      
        <div className={s.ava}>
          <img src='https://mobimg.b-cdn.net/pic/v2/gallery/preview/avatar_avatar-fon-kino-17856.jpg' />
          {props.messag}
          <span>{props.like}</span>
        </div>
      
    </div>
    )
}

export default Post ;