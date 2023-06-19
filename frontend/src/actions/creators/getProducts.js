import axios from "axios";
import { api } from "../../constants";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
} from "../actionType";

const getProductsPending = () => ({
  type: GET_PRODUCTS_PENDING,
});

const getProductsSuccess = (data) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: data,
});

const getProductsFailed = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});

export const getProducts = () => async (dispatch) => {
  dispatch(getProductsPending());
  try {
    const { data } = await axios({
      method: "GET",
      url: api + "/products",
    });
    dispatch(getProductsSuccess(data));
  } catch (error) {
    dispatch(getProductsFailed(error.response.data.message));
  }
};
