import classes from "./App.module.css";
import React from "react";
import { Fragment, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";
import Notification from "../src/components/Cart-Component/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));

let isInitial = true;

function App() {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {authCtx.isLoggedIn && notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        <Suspense fallback={<div className={classes.loader}></div>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/cart">
              {authCtx.isLoggedIn && <CartPage />}
              {!authCtx.isLoggedIn && <Redirect to="/" />}
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
}

export default App;
