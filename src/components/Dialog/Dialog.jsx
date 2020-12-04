import React from 'react';
import {NavLink} from "react-router-dom"
import s from './Dialog.module.css';
const DialogItem = (props)=>{
    return(
        <div>
 <NavLink to={"/Dialog/"+props.id}>{props.name}</NavLink>
 </div>
        )
}
const Message = (props) =>{
    return(
        <div>
<h1>{props.title}</h1>
        </div>
        )
}
const Dialog = (props) => {
    return  (
    <div className={s.main_container}>
    
    <div className={s.header}>
      DIALOGS
    </div>

    <div className={s.dialog_container}>
    <div className={s.left}> 
 <DialogItem name="Mike" id="0" />
 <DialogItem  to="/Dialog/1" name="Sveta" id="1" />
 <DialogItem to="/Dialog/2" name="Alex" id="2" />
 <DialogItem to="/Dialog/3" name="Sem" id="3" />
 
  </div>
    <div className='messages'>
      <Message title="cacacascascasc" />
    </div>
    </div>
    
  
   
  </div>
  )
}

export default Dialog;