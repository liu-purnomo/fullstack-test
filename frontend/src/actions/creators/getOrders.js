import axios from "axios";
import { api } from "../../constants";
import {
  GET_ORDERS_ERROR,
  GET_ORDERS_PENDING,
  GET_ORDERS_SUCCESS,
} from "../actionType";

const getOrdersPending = () => ({
  type: GET_ORDERS_PENDING,
});

const getOrdersSuccess = (orders) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
});

const getOrdersError = (error) => ({
  type: GET_ORDERS_ERROR,
  payload: error,
});

export const getOrders = () => async (dispatch) => {
  dispatch(getOrdersPending());
  try {
    const { data } = await axios({
      method: "GET",
      url: api + `/orders`,
    });
    dispatch(getOrdersSuccess(data));
  } catch (error) {
    dispatch(getOrdersError(error.response.data.message));
  }
};
