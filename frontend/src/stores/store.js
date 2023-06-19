import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { addProductReducer } from "../reducers/addProductReducer";
import { getProductsReducer } from "../reducers/getProductsReducer";

const rootReducer = combineReducers({
  // Add reducers here
  addProduct: addProductReducer,
  getProducts: getProductsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
