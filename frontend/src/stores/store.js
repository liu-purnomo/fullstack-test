import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { addProductReducer } from "../reducers/addProductReducer";
import { getOrderDetailReducer } from "../reducers/getOrderDetailReducer";
import { getOrdersReducer } from "../reducers/getOrdersReducer";
import { getProductsReducer } from "../reducers/getProductsReducer";
import { getShoppingCartReducer } from "../reducers/getShoppingCartReducer";
import { postOrderReducer } from "../reducers/postOrderReducer";
import { updateCartLengthReducer } from "../reducers/updateCartLengthReducer";

const rootReducer = combineReducers({
  // Add reducers here
  addProduct: addProductReducer,
  getProducts: getProductsReducer,
  getShoppingCart: getShoppingCartReducer,
  postOrder: postOrderReducer,
  cartLength: updateCartLengthReducer,
  orderDetail: getOrderDetailReducer,
  orderList: getOrdersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
