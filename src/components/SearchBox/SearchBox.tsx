import React from "react";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

import s from "./SearchBox.module.css";

const SearchBox: React.FC = () => {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(selectNameFilter);

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <input
          type="text"
          name="text"
          value={filterValue}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
        Find contacts
      </label>
    </div>
  );
};

export default SearchBox;
