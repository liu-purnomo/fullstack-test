import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_SUCCESS,
  CLEAR_STATE,
} from "../actions/actionType";

const initialState = {
  isSuccess: false,
  isError: false,
  isLoading: false,
  errorMessage: undefined,
  successMessage: undefined,
};

export const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage: action.payload,
      };

    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error,
      };

    case CLEAR_STATE:
      return {
        initialState,
      };

    default:
      return state;
  }
};
