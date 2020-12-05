import React from 'react';
import s from './Header.module.css';
import logo from './logo.png'
const Header = () => {
  return (
  	<div className={s.header}>
  		<img src={logo} />
  		<div className={s.menu}>
  			<div>
  				<a href='#'>Home</a>	
  			</div>
  			 <div>
  				<a href='#'>Music</a>	
  			</div>
  			 <div>
  				<a href='#'>Message</a>	
  			</div>
  			<div>
  				<a href='#'>Profile</a>	
  			</div>
    		 
  		</div>
  </div>
  );
}

export default Header;