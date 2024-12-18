import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useAppSelector } from "../../hooks/hook";

import s from "./AppBar.module.css";

const AppBar: React.FC = () => {
  const user = useAppSelector(selectUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      {isLoggedIn ? (
        <p className={s.text}>Welcome, {user.name}</p>
      ) : (
        <Link className={s.text} to="/">
          Phonebook
        </Link>
      )}
      <div className={s.navigation}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
