import React from 'react';
import Post from './Post/Post';

import s from './my_Posts.module.css';

const MyPosts = (props) => {

    let NewMassPosts= props.MyPostData.map(p=>
        <Post messag={p.message} like={p.likes}/>
    )
    return (

      <div clasName={s.item}>

    {NewMassPosts}
  
  </div>
    )
}

export default MyPosts ;