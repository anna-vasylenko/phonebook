import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact, ContactsState, NewContact } from "./types";

export const fetchContacts = createAsyncThunk<
  Contact[],
  undefined,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const addContact = createAsyncThunk<
  Contact,
  NewContact,
  { rejectValue: string }
>("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post("/contacts", contact);
    return data as Contact;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: string; state: { contacts: ContactsState } }
>(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  },
  {
    condition: (_, thunkAPI) => {
      const isLoading = thunkAPI.getState().contacts.loading;
      if (isLoading) {
        return false;
      }
    },
  }
);

export const updateContact = createAsyncThunk<
  Contact,
  Contact,
  { rejectValue: string }
>("contacts/updateContact", async ({ name, phone, id }, thunkAPI) => {
  try {
    const { data } = await axios.patch(`/contacts/${id}`, { name, phone });

    return data as Contact;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});
