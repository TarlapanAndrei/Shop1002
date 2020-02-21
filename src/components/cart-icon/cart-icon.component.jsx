import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectNubersOfItems } from '../../redux/cart/cart.selector';
import { toggleDropdownPage } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
const CartIcon = ({toggleDropdownPage, nubersOfItems}) =>(
  <div 
  onClick={toggleDropdownPage}
  className='cart-icon'>
    <ShoppingIcon className='shoping-icon'/>
    <span className='item-count'>{nubersOfItems}</span>
  </div>
)
const mapStateToProps = createStructuredSelector({
  nubersOfItems: selectNubersOfItems
})
const mapDispatchToProps = dispatch =>({
  toggleDropdownPage: ()=> dispatch(toggleDropdownPage())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);