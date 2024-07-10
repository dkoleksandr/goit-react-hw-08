import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className="flex">
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
