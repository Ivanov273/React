import React from 'react';
import Post from './Post/Post';
import s from './my_Posts.module.css';

const MyPosts = () => {
    return (
      <div clasName={s.item}> 
  <Post />
  <Post />
  <Post />
  <Post />
  </div>
    )
}

export default MyPosts ;