import React from 'react';

import s from './Post.module.css';

const Post = () => {
    return (
    <div className={s.wrapper}>
      
        <div className={s.ava}>
          <img src='https://mobimg.b-cdn.net/pic/v2/gallery/preview/avatar_avatar-fon-kino-17856.jpg' />
          <button>Выбрать</button>
        </div>
      
    </div>
    )
}

export default Post ;