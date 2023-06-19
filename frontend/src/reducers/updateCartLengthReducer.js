import { UPDATE_CART_LENGTH } from "../actions/actionType";

const initialState = {
  cartLength: 0,
};

export const updateCartLengthReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_LENGTH:
      return {
        ...state,
        cartLength: action.payload,
      };

    default:
      return state;
  }
};
