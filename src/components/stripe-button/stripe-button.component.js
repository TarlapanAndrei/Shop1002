import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100;
  const publichableKey = 'pk_test_15pMQAbasEkWV4KOqyXDKofL000v0fyRkZ';
  const onToken = token =>{
    console.log(token)
    alert('Payment succesiful')
  }
  return(
    <StripeCheckout 
      label='Pay Now'
      name='ShopShop Ltd.'
      billingAddress
      shippingAddress
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publichableKey}
    />
  )
}
export default StripeCheckoutButton;