import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectToggleHiddenCart } from '../../redux/cart/cart.selector';
import './header.styles.scss';
import {Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase-utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
const Header = ({currentUser, toggleHiddenCart}) =>{
  return(
  <div className='header'>
    <Link to='/' className='logo-container'>
     <Logo className='logo'/> 
    </Link>
    <div className='otions'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
     { 
     currentUser? (<div 
     onClick={()=>auth.signOut()}
     className='option'>
     SIGN OUT
   </div>) :
     (<Link to='/signin' className='option'>
        SIGN IN
      </Link>)
   }
   <CartIcon />
    </div>
    {
      toggleHiddenCart ? null : 
      <CartDropdown />}
  </div>
)}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  toggleHiddenCart: selectToggleHiddenCart
})
export default connect(mapStateToProps)(Header);