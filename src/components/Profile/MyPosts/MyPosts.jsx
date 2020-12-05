import React from 'react';
import Post from './Post/Post';
import s from './my_Posts.module.css';

const MyPosts = (props) => {
	let MyPostData=[
{id:0,message:"Hi how are you",likes:11},
{id:1,message:"Hi how are you",likes:25},
{id:2,message:"it s goot",likes:23}

	]
    return (
    
      <div clasName={s.item}> 
    {props.mes}
  <Post messag={MyPostData[1].message} like={MyPostData[1].likes}/>
  <Post messag={MyPostData[2].message} like={MyPostData[2].likes}/>
  <Post messag="it s goot" like="15"/>
  
  </div>
    )
}

export default MyPosts ;