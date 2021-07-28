import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  useSelector((state) => state.cart.totalQuantity);
  const toggleCarthandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCarthandler}>
      <span>MyCart</span>
      <span className={classes.badges}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
