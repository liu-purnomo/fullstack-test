import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import HomePage from "../pages/HomePage";
import ListOrder from "../pages/ListOrders";
import ListProduct from "../pages/ListProducts";
import OrderDetail from "../pages/OrderDetail";
import ProductDetail from "../pages/ProductDetail";
import ShoppingCart from "../pages/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "edit-product/:id",
        element: <EditProduct />,
      },
      {
        path: "product",
        element: <ListProduct />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "order",
        element: <ListOrder />,
      },
      {
        path: "order/:id",
        element: <OrderDetail />,
      },
    ],
  },
]);

export default router;
