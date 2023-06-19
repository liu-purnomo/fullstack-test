import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actionUpdateCartlength } from "../actions/actionCreators";

function NavBar() {
  const { cartLength } = useSelector((state) => state.cartLength);
  const dispatch = useDispatch();

  const emptyCart = () => {
    toast.error("Cart is empty");
  };

  useEffect(() => {
    dispatch(actionUpdateCartlength());
  }, [dispatch]);
  return (
    <>
      <nav className="navbar">
        <a className="logo" href="#">
          <img
            src="https://furindo.co.id/asset/web/images/Furindo-logo.png"
            alt=""
          ></img>
        </a>

        <ul className="header-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-product">
              Add New Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order">
              List Orders
            </Link>
          </li>
          {cartLength > 0 ? (
            <li className="nav-item">
              <Link className="nav-link btn-red" to="/cart">
                <FaCartPlus /> Cart ({cartLength})
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link onClick={emptyCart} className="nav-link btn-red" to="/">
                <FaCartPlus /> Cart
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
