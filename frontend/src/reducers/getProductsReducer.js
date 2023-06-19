import {
  CLEAR_STATE,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
} from "../actions/actionType";

const initialState = {
  products: [],
  isLoading: false,
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
