import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthSlice, Credentials, LoginUser, NewUser, User } from "./types";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<
  Credentials,
  NewUser,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data as Credentials;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const logIn = createAsyncThunk<
  Credentials,
  LoginUser,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    setAuthHeader(data.token);
    return data as Credentials;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const logOut = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const refreshUser = createAsyncThunk<
  User,
  undefined,
  { rejectValue: string; state: { auth: AuthSlice } }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await axios.get("/users/current");
    return data as User;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});
