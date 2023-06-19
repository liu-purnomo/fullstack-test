import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import AddProduct from "../pages/AddProduct";
import HomePage from "../pages/HomePage";
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
        path: "cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

export default router;
