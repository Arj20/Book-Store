import classes from "./StartingPageContent.module.css";
import { NavLink } from "react-router-dom";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome Aboard!</h1>
      <NavLink to="/auth" className={classes.btn}>
        Login
      </NavLink>
    </section>
  );
};

export default StartingPageContent;
