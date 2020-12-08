import React from 'react';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import s from './Dialog.module.css';



const Dialog = (props) => {

let NewMasDialogs = props.masdialogs.map((d)=>
  <DialogItem id={d.id} name={d.name} />
);
let NewMessages = props.masmessage.map((m)=>
<Messages message={m.message} />
)
    return  (
    <div className={s.main_container}>
    
    <div className={s.header}>
      DIALOGS
    </div>

    <div className={s.dialog_container}>
    <div className={s.left}> 
{NewMasDialogs}

 
  </div>
    <div className='messages'>
     {NewMessages}
    </div>
    </div>
    
  
   
  </div>
  )
}

export default Dialog;