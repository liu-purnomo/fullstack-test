import axios from "axios";
import { api } from "../../constants";
import {
  GET_ORDER_DETAIL_ERROR,
  GET_ORDER_DETAIL_PENDING,
  GET_ORDER_DETAIL_SUCCESS,
} from "../actionType";

const getOrderDetailPending = () => ({
  type: GET_ORDER_DETAIL_PENDING,
});

const getOrderDetailSuccess = (orderDetail) => ({
  type: GET_ORDER_DETAIL_SUCCESS,
  payload: orderDetail,
});

const getOrderDetailError = (error) => ({
  type: GET_ORDER_DETAIL_ERROR,
  payload: error,
});

export const getOrderDetail = (id) => async (dispatch) => {
  dispatch(getOrderDetailPending());
  try {
    const { data } = await axios({
      method: "GET",
      url: api + `/orders/${id}`,
    });
    dispatch(getOrderDetailSuccess(data));
  } catch (error) {
    dispatch(getOrderDetailError(error.response.data.message));
  }
};
