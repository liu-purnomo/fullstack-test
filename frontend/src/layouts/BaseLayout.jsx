import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function BaseLayout() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}

export default BaseLayout;
