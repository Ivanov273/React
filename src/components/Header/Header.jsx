import React from 'react';
import s from './Header.module.css';
import logo from './logo.png'
const Header = () => {
  return (
  	<div className={s.header}>
  	<img src={logo} />
    <a href='#'>Home</a> - 
    <a href='#'>News Feed</a> - 
    <a href='#'>Messages</a> - 
  </div>
  );
}

export default Header;