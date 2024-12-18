import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { RootState } from "../store";

export const selectNameFilter = (state: RootState) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filteredData = contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.phone.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredData;
  }
);
