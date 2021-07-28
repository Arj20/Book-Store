import MainNavigation from "./MainNavigation";
import { Fragment } from "react";
import MainHeader from "../Cart-Component/Layout/MainHeader";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const location = useLocation();
  const cart = location.pathname === "/cart";
  return (
    <Fragment>
      {!cart && <MainNavigation />}
      {cart && <MainHeader />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
