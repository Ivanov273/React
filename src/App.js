import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter,Route} from "react-router-dom"
import state from "./Redux/state";


const App = (props) => {

  return (

  	<BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.Nav} />
      <div className="app-wrapper-content">
      <Route path="/profile" render={()=><Profile state={props.state.Profile} /> } />
      <Route  path="/dialog" render={()=><Dialog state={props.state.Message} state={props.state.Message} />} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/Settings" component={Settings} />
    
      
      
      
      </div>
    </div>;
  </BrowserRouter>
)
}

export default App;