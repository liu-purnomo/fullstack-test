import { UPDATE_CART_LENGTH } from "../actionType";

const updateCartLength = (cartLength) => {
  return {
    type: UPDATE_CART_LENGTH,
    payload: cartLength,
  };
};

export const cartLength = () => async (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    dispatch(updateCartLength(cart.length));
  } else {
    dispatch(updateCartLength(0));
  }
};
