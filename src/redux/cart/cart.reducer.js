import cartActionsType from './cart.types';

const INITIAL_STATE = {
  hiddenCart: true
}
const cartReducer = (state=INITIAL_STATE, action) =>{
  switch (action.type) {
    case cartActionsType.TOGGLE_CART_DROPDOWN:
      return{
        ...state, hiddenCart: !state.hiddenCart
      }
    default: return state;
      
  }
}
export default cartReducer;