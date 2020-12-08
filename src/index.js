import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let mypostdata=[
    {id:0,message:"Hi how are you",likes:11},
    {id:1,message:"Hi how are you",likes:25},
    {id:2,message:"it s goot",likes:23},
    {id:2,message:"it  a map",likes:55555553}
]

let masdialogs =[
    {id:1,name:'Mike'},
    {id:2,name:'Viktor'},
    {id:3,name:'Mitya2'},
    {id:4,name:'Ylia'},
    {id:5,name:'Sveta@'},
]
let masmessage=[
    {id:1,message:'Hi it is coooooool!!!!'},
    {id:2,message:'Hi Very'},
    {id:3,message:'Hi Verrry'},
    {id:4,message:'Hi VBeryyyyyy'},
    {id:5,message:'Hi goooood'},
]
ReactDOM.render(<App mypostdata={mypostdata} masdialogs={masdialogs} masmessage={masmessage} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
