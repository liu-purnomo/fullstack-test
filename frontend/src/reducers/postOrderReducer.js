import {
  CLEAR_STATE,
  POST_ORDER_ERROR,
  POST_ORDER_PENDING,
  POST_ORDER_SUCCESS,
} from "../actions/actionType";

const initialState = {
  order: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const postOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case POST_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        order: action.payload,
      };

    case POST_ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};
