import { addProduct } from "./creators/addProduct";
import { getOrderDetail } from "./creators/getOrder";
import { getOrders } from "./creators/getOrders";
import { getProducts } from "./creators/getProducts";
import { postOrder } from "./creators/postOrder";
import { setShoppingCart } from "./creators/setShoppingCart";
import { cartLength } from "./creators/updateCartLenght";

export const actionAddProduct = addProduct;
export const actionGetProducts = getProducts;
export const actionSetShoppingCart = setShoppingCart;
export const actionPostOrder = postOrder;
export const actionUpdateCartlength = cartLength;
export const actionGetOrderDetail = getOrderDetail;
export const actionGetOrders = getOrders;
