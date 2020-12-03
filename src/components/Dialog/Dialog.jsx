import React from 'react';
import Name from './Name/Name';

import s from './Dialog.module.css';

const Dialog = (props) => {
    return  (
    <div className={s.main_container}>
    
    <div className={s.header}>
      DIALOGS
    </div>

    <div className={s.dialog_container}>
    <div className={s.left}> 
    <ul>
    <li><Name name="Mike" /></li>
    <li><Name name="Andrey" /></li>
    <li><Name name="Semen" /></li>
    <li><Name name="Kostya" /></li>
    <li><Name name="Fedya" /></li>
    <li><Name name="Alex" /></li>
    <li><Name name="Liza" /></li>
    <li><Name name="Katya" /></li>
    <li><Name name="Fr" /></li>
    <li><Name name="Sonya" /></li>
   
   
    
    </ul>
  </div>
    <div>
      Sectioan12
    </div>
    </div>
    
  
   
  </div>
  )
}

export default Dialog;