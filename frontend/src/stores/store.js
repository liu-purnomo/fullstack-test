import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { addProductReducer } from "../reducers/addProductReducer";

const rootReducer = combineReducers({
  // Add reducers here
  addProduct: addProductReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
