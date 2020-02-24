import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {addItemToCart, minusAnItem, deleteAnItem} from '../../redux/cart/cart.action';
const CheckoutItem = ({item, addItemToCart, minusAnItem, deleteAnItem}) =>{
  const {imageUrl, name, quantity, price} = item
  return(
    <div className='checkout-item'>
      <div className='image-container'>
      <img src={imageUrl} alt={name} title={name} />
      </div>
        <span className='name'>{name}</span>


        <span 
        className='quantity'>
          <span className='content-elemtn'
            onClick={()=>minusAnItem(item)}
            >&#8615;
          </span>
          {quantity}
          <span className='content-elemtn'
            onClick={()=>addItemToCart(item)}
            >&#8613;</span>
          </span>
        <span className='price'>{price}</span>
  <div className='remove-button'
     onClick={()=>deleteAnItem(item)}
    >&#10005;</div>
    </div>
  )
}
const mapDispatchToProps = dispatch =>({
  addItemToCart: item => dispatch(addItemToCart(item)),
  minusAnItem: item=> dispatch(minusAnItem(item)),
  deleteAnItem: item=> dispatch(deleteAnItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);