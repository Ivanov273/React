import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";



 let rebootS = (state)=>{

    ReactDOM.render(
        <BrowserRouter>
        <App state={state}  dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>, document.getElementById('root'));
}
rebootS(store.getState())
store.subscribe(()=>{

    let state = store.getState()
    rebootS(state)
})


// Learn more about service workers: http://bit.ly/CRA-PWApi;i'i9999989797888    88
serviceWorker.unregister();
