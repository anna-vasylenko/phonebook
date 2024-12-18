import { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectCurrentContact = (state: RootState) =>
  state.contacts.currentContact;
export const selectLoading = (state: RootState) => state.contacts.loading;
export const selectError = (state: RootState) => state.contacts.error;
