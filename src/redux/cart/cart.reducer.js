import cartActionsType from './cart.types';
import { addItemsToArray } from './utility.function';
const INITIAL_STATE = {
  hiddenCart: true,
  cartItems: []
}
const cartReducer = (state=INITIAL_STATE, action) =>{
  switch (action.type) {
    case cartActionsType.TOGGLE_CART_DROPDOWN:
      return{
        ...state, hiddenCart: !state.hiddenCart
      }
    case cartActionsType.ADD_ITEM_TO_CARD:
      return{
        ...state, cartItems: addItemsToArray(state.cartItems, action.payload)
      }
    default: return state;
      
  }
}
export default cartReducer;