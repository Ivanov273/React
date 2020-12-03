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

const App = () => {
  return (
  	<BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Route path="/Profile" component={Profile} />
      <Route path="/Dialog" component={Dialog} />
      <Route path="/News" component={News} />
      <Route path="/Music" component={Music} />
      <Route path="/Settings" component={Settings} />
    
      
      
      {/*<Profile />*/}
      </div>
    </div>;
  </BrowserRouter>
)
}

export default App;