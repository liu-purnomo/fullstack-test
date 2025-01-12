import axios from "axios";
import { api } from "../../constants";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_SUCCESS,
} from "../actionType";

const addProductPending = () => ({
  type: ADD_PRODUCT_PENDING,
});

const addProductSuccess = (data) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

const addProductFailed = (error) => ({
  type: ADD_PRODUCT_ERROR,
  error: error,
});

export const addProduct = (productForm, isEdit, id) => async (dispatch) => {
  dispatch(addProductPending());
  try {
    if (isEdit) {
      const { data } = await axios({
        method: "PUT",
        url: api + `/products/${id}`,
        data: productForm,
      });
      return dispatch(addProductSuccess(data.message));
    } else {
      const { data } = await axios({
        method: "POST",
        url: api + "/products",
        data: productForm,
      });
      dispatch(addProductSuccess(data.message));
    }
  } catch (error) {
    dispatch(addProductFailed(error.response.data.message));
  }
};
