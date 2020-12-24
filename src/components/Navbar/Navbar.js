import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom"
import Nav from './Nav/Nav'
import Friends from './Friends/Friends'

const Navbar = (props) => {

    let NewMassNav = props.state.FirstNav.map((n) => <Nav to={'/' + n.to} item={n.item}/>)
    let NewMassFriends = props.state.Friends.map((f) => <Friends name={f.name}/>)
    return (

        <nav className={s.nav}>
            {NewMassNav}
            <h1>Friends</h1>
            <div className={s.frends_wrapper}>
                {NewMassFriends}
            </div>
        </nav>


    )
}

export default Navbar;