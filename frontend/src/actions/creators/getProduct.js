import axios from "axios";
import { api } from "../../constants";
import {
  GET_PRODUCT_DETAIL_ERROR,
  GET_PRODUCT_DETAIL_PENDING,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "../actionType";

const getProductDetailPending = () => ({
  type: GET_PRODUCT_DETAIL_PENDING,
});

const getProductDetailSuccess = (productDetail) => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: productDetail,
});

const getProductDetailError = (error) => ({
  type: GET_PRODUCT_DETAIL_ERROR,
  payload: error,
});

export const getProductDetail = (id) => async (dispatch) => {
  dispatch(getProductDetailPending());
  try {
    const { data } = await axios({
      method: "GET",
      url: api + `/products/${id}`,
    });
    dispatch(getProductDetailSuccess(data));
  } catch (error) {
    dispatch(getProductDetailError(error.response.data.message));
  }
};
