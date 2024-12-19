import { logOut } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import React from "react";
import { useAppDispatch } from "../../hooks/hook";

const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <button onClick={handleClick} type="button" className={s.button}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
