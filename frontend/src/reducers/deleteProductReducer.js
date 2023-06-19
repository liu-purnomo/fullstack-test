import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
} from "../actions/actionType";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: undefined,
  successMessage: undefined,
  isSuccess: false,
};

export const deleteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        successMessage: action.payload,
      };

    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
