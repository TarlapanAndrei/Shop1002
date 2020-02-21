import React from 'react';
import './cart-dropdown-item.scss';

const CartDropdownItem = ({name, imageUrl, quantity, price}) =>{
  return(
    <div className='cart-dropdown-item'>
      <img src={imageUrl} alt={name} title={name}/>
      <div className='item-detail'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x {price}$</span>
      </div>
    </div>
  )
}
export default CartDropdownItem