import React from 'react';
import {NavLink} from "react-router-dom"
import s from './Dialog.module.css';

const Dialods=(props)=>{
  return(
  <div>
  <NavLink to={"/Dialog/"+props.id}  >{props.name}</NavLink>
  </div>
  )
}
  const Messages=(props)=>{
    return(
    <div>
    <h3>{props.message}</h3>
    </div>
    )
  }

const Dialog = (props) => {
let MasDialogs =[
{id:1,name:'Mike'},
{id:2,name:'Viktor'},
{id:3,name:'Mitya'},
{id:4,name:'Ylia'},
{id:5,name:'Sveta'},
]
let MasMessage=[
{id:1,message:'Hi it is coooooool!!!!'},
{id:2,message:'Hi Very'},
{id:3,message:'Hi Verrry'},
{id:4,message:'Hi VBeryyyyyy'},
{id:5,message:'Hi cocococoocococ'},
]
let NewMasDialogs = MasDialogs.map((d)=>
  <Dialods id={d.id} name={d.name} />
);
let NewMessages = MasMessage.map((m)=>
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