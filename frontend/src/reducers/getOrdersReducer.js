import {
  GET_ORDERS_ERROR,
  GET_ORDERS_PENDING,
  GET_ORDERS_SUCCESS,
} from "../actions/actionType";

const initialState = {
  isLoading: false,
  isError: false,
  orders: [],
  errorMessage: undefined,
};

export const getOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };

    case GET_ORDERS_ERROR:
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
