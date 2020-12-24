import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import s from './Dialog.module.css';
import {addMessageActionCreator, changeMessageActionCreator} from "../../Redux/Message-reducer";

const Dialog = (props) => {
let localState = props.store.getState().Message;
    let NewMasDialogs = localState.masdialogs.map((d) =>
        <DialogItem id={d.id} name={d.name}/>
    );
    let NewMessages = localState.masmessage.map((m) =>
        <Messages message={m.message} dispatch={props.store.dispatch} newmessage={localState.newmessage}/>
    )

    let newRefMessage = React.createRef()
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onchange = (e) => {
        let text = e.target.value
        props.store.dispatch(changeMessageActionCreator(text))
    }


    return (
        <div className={s.main_container}>
            <div className={s.header}>
                DIALOGS
            </div>
            <div className={s.dialog_container}>
                <div className={s.left}>
                    {NewMasDialogs}
                </div>
                <div className='messages'>
                    <div>{NewMessages}</div>
                    <div>
                        <h3>{props.message}</h3>
                        <textarea onChange={onchange}  value={localState.newmessage}></textarea>
                        <button onClick={addMessage}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog;