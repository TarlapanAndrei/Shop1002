import React from 'react';
import './collection-item.styles.scss';
import {connect} from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
const CollectionItem = ({item, addItem}) =>{
  const {name, imageUrl, price} = item;
  return(
  <div className="collection-item">
    <div 
    style={{
      backgroundImage:`url(${imageUrl})`
    }}
    className='image'/>
    <div className='collection-footer'>
     <span className='name'>{name}</span>
     <span className='price'>{price}</span>
    </div>
    <CustomButton 
    onClick = {()=>addItem(item)}
    inverted>Add to card</CustomButton>
  </div>
)}
const mapDispatchToProps = dispatch =>({
  addItem: item=>dispatch(addItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);