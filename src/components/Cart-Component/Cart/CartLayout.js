import Products from "../Shop/Products";
import Cart from "./Cart";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";

const CartLayout = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default CartLayout;
