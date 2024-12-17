import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSlice } from "./types";

const initialState: FilterSlice = {
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
