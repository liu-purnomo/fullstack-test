import {
  GET_ORDER_DETAIL_ERROR,
  GET_ORDER_DETAIL_PENDING,
  GET_ORDER_DETAIL_SUCCESS,
} from "../actions/actionType";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  errorMessage: undefined,
  order: {},
  product: [],
};

export const getOrderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAIL_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        order: action.payload,
        product: action.payload.ProductOrders,
      };

    case GET_ORDER_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
