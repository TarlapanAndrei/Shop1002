import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const CheckoutPage = ({cartItems, totalPrice}) =>{
  return(
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Discription</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => <CheckoutItem  key={item.id} item={item}/>)
      }
     <div className='total'>
      <span>
        Total: ${totalPrice}
      </span>
     </div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
})
export default connect(mapStateToProps)(CheckoutPage);