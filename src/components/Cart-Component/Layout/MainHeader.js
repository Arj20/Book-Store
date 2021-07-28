import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import AuthContext from "../../../store/auth-context";
import { useContext } from "react";

const MainHeader = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <h3>ReduxCart</h3>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
          {authCtx.isLoggedIn && (
            <li>
              <button type="button" onClick={logoutHandler}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
