import { NavLink } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useAppSelector } from "../../hooks/hook";

import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <nav className={s.navigation}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
