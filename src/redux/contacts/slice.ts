import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";
import { logOut } from "../auth/operations";
import { Contact, ContactsState } from "./types";

const initialState: ContactsState = {
  items: [],
  currentContact: null,
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setCurrentContact(state, action: PayloadAction<Contact | null>) {
      state.currentContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.currentContact = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === state.currentContact?.id ? { ...action.payload } : item
        );
        state.currentContact = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled,
          updateContact.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        (state) => {
          state.error = null;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        (state, action) => {
          state.error = action.payload as string;
          state.loading = false;
        }
      );
  },
});

export const { setCurrentContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
