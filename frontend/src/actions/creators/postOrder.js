import axios from "axios";
import { api } from "../../constants";
import {
  POST_ORDER_ERROR,
  POST_ORDER_PENDING,
  POST_ORDER_SUCCESS,
} from "../actionType";

const postOrderPending = () => ({
  type: POST_ORDER_PENDING,
});

const postOrderSuccess = (data) => ({
  type: POST_ORDER_SUCCESS,
  payload: data,
});

const postOrderError = (error) => ({
  type: POST_ORDER_ERROR,
  payload: error,
});

export const postOrder = (order) => async (dispatch) => {
  dispatch(postOrderPending());
  try {
    const { data } = await axios({
      method: "POST",
      url: api + "/orders",
      data: order,
    });
    dispatch(postOrderSuccess(data));
  } catch (error) {
    dispatch(postOrderError(error.response.data.message));
  }
};
