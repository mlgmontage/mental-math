import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type Profile = {
  name: string;
  points: number;
};

const initialState: Profile = {
  name: "",
  points: 0,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
});

export const profileSelector = (state: RootState) => state.profile;

export const { increment } = profileSlice.actions;

export const profileReducer = profileSlice.reducer;
