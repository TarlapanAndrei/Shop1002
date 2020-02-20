import cartActionsType from './cart.types';

export const toggleDropdownPage = ()=>({
  type: cartActionsType.TOGGLE_CART_DROPDOWN
})
export const addItemToCart = item =>({
  type: cartActionsType.ADD_ITEM_TO_CARD,
  payload: item
})