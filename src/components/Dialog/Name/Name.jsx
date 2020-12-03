import React from 'react';
//import MyPosts from './MyPosts/MyPosts';

import s from './Name.module.css';

const Name = (props) => {
 
    return  (
      <div className={s.name}>
    
  {props.name}
   
  </div>
  )
}

export default Name;