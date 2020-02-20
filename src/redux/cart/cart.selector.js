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