import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state: RootState) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filteredData = contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredData;
  }
);
