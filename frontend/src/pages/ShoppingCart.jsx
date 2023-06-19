/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  actionPostOrder,
  actionSetShoppingCart,
  actionUpdateCartlength,
} from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";

function ShoppingCart() {
  const [customer_name, setCustomerName] = useState("");
  const { shoppingChart } = useSelector((state) => state.getShoppingCart);
  const { isLoading, isError, errorMessage, isSuccess } = useSelector(
    (state) => state.postOrder
  );
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const handleCustomerName = (e) => {
    setCustomerName(e.target.value);
  };

  const saveOrder = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item) => {
      delete item.name;
      delete item.price;
    });
    const order = {
      customer_name: customer_name,
      product_order: cart,
    };
    dispacth(actionPostOrder(order));
    dispacth(actionUpdateCartlength());
  };

  const setQuantity = (e, index) => {
    if (e.target.value < 1) {
      toast.error("Quantity must be greater than 0");
      dispacth(actionSetShoppingCart());
    } else {
      const cart = JSON.parse(localStorage.getItem("cart"));
      cart[index].quantity = e.target.value;
      localStorage.setItem("cart", JSON.stringify(cart));
      dispacth(actionSetShoppingCart());
    }
  };

  const deleteItem = (index) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispacth(actionSetShoppingCart());
    dispacth(actionUpdateCartlength());
  };

  useEffect(() => {
    dispacth(actionSetShoppingCart());
    dispacth(actionUpdateCartlength());
  }, [dispacth]);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    } else if (isSuccess) {
      toast.success("Order saved successfully");
      localStorage.setItem("cart", JSON.stringify([]));
      dispacth(actionSetShoppingCart());
      navigate("/");
    }
  }, [isError, errorMessage, isSuccess]);

  return (
    <>
      <div className="hero">
        <h1>Shopping Cart</h1>
        <div className="row">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Customer Name</label>
              <input
                onChange={handleCustomerName}
                type="text"
                name="customer_name"
                id="customer_name"
                className="form-control"
              />
            </div>
          </form>
        </div>
        <div className="row">
          <table className="tableStyle">
            <thead>
              <tr>
                <th className="tableHead">#</th>
                <th className="tableHead">Product Name</th>
                <th className="tableHead">Price</th>
                <th className="tableHead">Quantity</th>
                <th className="tableHead"></th>
              </tr>
            </thead>
            <tbody>
              {shoppingChart.map((item, index) => (
                <tr key={index}>
                  <td className="dataTable">{index + 1}</td>
                  <td className="dataTable">{item.name}</td>
                  <td className="dataTable">{currencyFormatter(item.price)}</td>
                  <td className="dataTable">
                    <input
                      onChange={(e) => setQuantity(e, index)}
                      name="quantity"
                      className="input-quantity"
                      type="number"
                      defaultValue={item.quantity}
                    ></input>
                  </td>
                  <td className="dataTable">
                    <button
                      onClick={() => deleteItem(index)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row" style={{ marginTop: 20 + "px" }}>
          <button onClick={() => saveOrder()} className="form-submit">
            {isLoading ? "Loading..." : "Order Now"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
