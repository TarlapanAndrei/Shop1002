import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () =>(
  <div className='header'>
    <Link to='/' className='logo-container'>
     <Logo className='logo'/> 
    </Link>
    <div className='otions'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/signin' className='option'>
        SIGN IN
      </Link>
      <Link to='/signout' className='option'>
        SIGN OUT
      </Link>
    </div>
  </div>
)
export default Header;