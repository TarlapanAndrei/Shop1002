import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectToggleHiddenCart = createSelector(
  [selectCart],
  cart => cart.hiddenCart
)
export const selectCartItems = createSelector(
  [selectCart],
  cart=>cart.cartItems
)
export const selectNubersOfItems = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulator, item )=>accumulator + item.quantity,0)
)
export const selectTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulator, element)=>accumulator + (element.price*element.quantity),0)
)