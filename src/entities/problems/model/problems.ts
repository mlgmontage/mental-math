import { createSlice } from "@reduxjs/toolkit";
import type { Problems } from "./problems.types";

const initialState: Problems = [];

const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {},
});

export const {} = problemsSlice.actions;

export const problemsRecucer = problemsSlice.reducer;
