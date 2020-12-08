import React from 'react';
import s from './../Navbar.module.css';
import {NavLink} from "react-router-dom";
const Nav = (props)=>{
    return (
    <div className={s.item}>
        <NavLink to={props.to} activeClassName={s.active}>{props.item}</NavLink>
    </div>
    )
}
export default Nav;
