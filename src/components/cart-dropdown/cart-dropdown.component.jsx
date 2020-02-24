import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleDropdownPage } from '../../redux/cart/cart.action';
import {withRouter} from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component';
const CartDropdown = ({cartItems, history, dispatch}) =>{
  return(
  <div className='cart-dropdown'>
   { 
     cartItems.length ?
   (<div className='cart-items'>
    {
      cartItems.map(({id,...otherProps}) => <CartDropdownItem key={id} {...otherProps}/>)
    }
    </div>):<span className='empty-message'>No item</span>}
    <CustomButton
      onClick={()=>{
        history.push('/checkout');
        dispatch(toggleDropdownPage());
      }}
    >Go to Checkout</CustomButton>
  </div>
)}
const matStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
// const mapDispatchToProps = dispatch =>({
//   toggleDropdownPage: ()=>dispatch(toggleDropdownPage())
// })
export default withRouter(connect(matStateToProps)(CartDropdown));