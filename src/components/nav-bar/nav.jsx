import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <Link to="/">HOME</Link>
        <Link to="shop">SHOP</Link>
        <Link to="cart">CART</Link>
      </div>
      <div className="display">
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
