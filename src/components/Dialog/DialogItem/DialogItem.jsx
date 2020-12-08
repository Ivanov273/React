import React from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import image from './1.jpg'
import s from './../Dialog.module.css'
import Profile from "../../Profile/Profile";
const DialogItem = (props) => {
    return (
        <div className={s.DialogItemWrapper}>
            <img src={image} />


            <NavLink to={"/Dialog/" + props.id}>{props.name}</NavLink>


            </div>
    )
}
export default DialogItem