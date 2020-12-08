import React from 'react';
import s from './Friends.module.css';
import image from './1.jpg'
import {NavLink} from "react-router-dom"


const Friends = (props) => {
return(
    <div>

        <div><img src={image} />{props.name}</div>


    </div>
    
)
}

export default Friends;