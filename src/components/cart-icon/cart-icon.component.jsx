import React from 'react';
import { connect } from 'react-redux';
import { toggleDropdownPage } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
const CartIcon = ({toggleDropdownPage}) =>(
  <div 
  onClick={toggleDropdownPage}
  className='cart-icon'>
    <ShoppingIcon className='shoping-icon'/>
    <span className='item-count'>0</span>
  </div>
)
const mapDispatchToProps = dispatch =>({
  toggleDropdownPage: ()=> dispatch(toggleDropdownPage())
})
export default connect(null, mapDispatchToProps)(CartIcon);