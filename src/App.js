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



const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.Nav} />
      <div className="app-wrapper-content">
      <Route path="/profile" render={()=><Profile dispatch={props.dispatch}  state={props.state.Profile} /> } />
      <Route  path="/dialog" render={()=><Dialog store={props.store} />} />
      <Route path="/news" component={News} />
      <Route path="/music" component={Music} />
      <Route path="/Settings" component={Settings} />
    
      
      
      
      </div>
    </div>

)
}

export default App;