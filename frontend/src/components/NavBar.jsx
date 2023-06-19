import { Link } from "react-router-dom";

function NavBar() {
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
            <Link className="nav-link btn-red" to="/orders">
              List Order
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
