import React from 'react'
import s from './Contain.module.css';
import main_img from '../main-img.jpg';
console.log(s)
const Contain = () =>{
	return  <div className={s.contain}>
   <div>
   <img className={s.img} src={main_img}/>
   </div>
   <h2 className={s.active}>Привет</h2>
   </div>
}
export default Contain;