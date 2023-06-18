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
            <a className="nav-link" href="#">
              List Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Add New Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn-red" href="#">
              My Cart
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
