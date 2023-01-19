import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import type { Problems } from "./problems.types";

const initialState: Problems = [
  {
    title: "Multiply by 11",
    description:
      "32  * 11 To solve this problem, simply add the digits, 3 + 2 = 5 put the 5 between the 3 and the 2, and there is your answer: 352",
    operation: "*",
    a: "range 10 99",
    b: "const 11",
  },
];

const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {},
});

export const problemsSelector = (state: RootState) => state.problems;

export const {} = problemsSlice.actions;

export const useProblem = (id: number) =>
  useSelector(createSelector(problemsSelector, (problems) => problems[id]));

export const problemsRecucer = problemsSlice.reducer;
