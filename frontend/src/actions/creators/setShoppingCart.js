import { SET_SHOPPING_CART } from "../actionType";

const setShoppingCartSuccess = (data) => ({
  type: SET_SHOPPING_CART,
  payload: data,
});

export const setShoppingCart = () => (dispatch) => {
  const shoppingCart = JSON.parse(localStorage.getItem("cart"));
  dispatch(setShoppingCartSuccess(shoppingCart));
};
