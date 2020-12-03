import React from 'react';
import Post from './Post/Post';
import s from './my_Posts.module.css';

const MyPosts = (props) => {
	
    return (
    
      <div clasName={s.item}> 
    {props.mes}
  <Post messag="Hi how are you" like="25"/>
  <Post messag="it s goot" like="15"/>
  
  </div>
    )
}

export default MyPosts ;