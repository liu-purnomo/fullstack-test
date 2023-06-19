import { CLEAR_STATE, SET_SHOPPING_CART } from "../actions/actionType";

const initialState = {
  shoppingChart: [],
};

export const getShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingChart: action.payload,
      };

    case CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
