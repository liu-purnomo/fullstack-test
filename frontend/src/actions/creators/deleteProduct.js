import axios from "axios";
import { api } from "../../constants";
import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
} from "../actionType";

const deleteProductPending = () => ({
  type: DELETE_PRODUCT_PENDING,
});

const deleteProductSuccess = (data) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: data,
});

const deleteProductError = (error) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: error,
});

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(deleteProductPending());
  try {
    const { data } = await axios({
      method: "DELETE",
      url: api + `/products/${id}`,
    });
    dispatch(deleteProductSuccess(data.message));
  } catch (error) {
    dispatch(deleteProductError(error.response.data.message));
  }
};
