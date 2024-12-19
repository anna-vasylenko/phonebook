import { Link } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useAppSelector } from "../../hooks/hook";

import s from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <>
      <div className={s.homePage}>
        <h1 className={s.title}>Welcome to Your Personal Phonebook!</h1>
        {isLoggedIn ? (
          <Link className={s.button} to="/contacts">
            Phonebook
          </Link>
        ) : (
          <Link className={s.button} to="/login">
            Get started
          </Link>
        )}
      </div>
    </>
  );
};

export default HomePage;
