import React from 'react';
import Post from './Post/Post';
import s from './my_Posts.module.css';
import {addPostActionCreator,changePostActionCreator} from './../../../Redux/Profile-reducer';


const MyPosts = (props) => {

    let NewMassPosts = props.mypostdata.map(p =>
        <Post messag={p.message} like={p.likes}/>
    )
    let newRefText = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let changePost = () => {
        let text = newRefText.current.value

        props.dispatch(changePostActionCreator(text))
    }


    return (
        <div clasName={s.item}>
            {props.mes}
            <div>
                <textarea onChange={changePost} ref={newRefText} value={props.newPostdata}></textarea>
            </div>
            <button onClick={addPost}>Кнопка</button>
            {NewMassPosts}
        </div>
    )
}

export default MyPosts;