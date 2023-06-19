import {
  GET_PRODUCT_DETAIL_ERROR,
  GET_PRODUCT_DETAIL_PENDING,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "../actions/actionType";

const initialState = {
  product: {},
  isLoading: false,
  isError: false,
  errorMessage: undefined,
};

export const getProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    case GET_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case "RESET_STATE":
      return initialState;

    default:
      return state;
  }
};
