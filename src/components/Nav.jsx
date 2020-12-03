import React from 'react'
import s from './Nav.module.css';
console.log(s)
const Nav = ()=>{
	return <nav className={s.nav}>
   <div ><a className={`${s.item} ${s.active}`} href="#">Profile</a></div>
   <div ><a className={s.item} href="#">Messag</a></div>
   <div ><a className={s.item} href="#">News</a></div>
   <div ><a className={s.item} href="#">Music</a></div>
   </nav>;
}
export default Nav;