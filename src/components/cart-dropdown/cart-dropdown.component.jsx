import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component';
const CartDropdown = ({cartItems}) =>{
  console.log(cartItems)
  return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {
      cartItems.map(({id,...otherProps}) => <CartDropdownItem key={id} {...otherProps}/>)
    }
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)}
const matStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default connect(matStateToProps)(CartDropdown);