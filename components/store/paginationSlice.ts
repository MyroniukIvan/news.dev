import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaginationState {
  activePage: number;
  cardsPerPage: number;
}

const initialState: PaginationState = {
  activePage: 1,
  cardsPerPage: 9, // Change this as needed
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setActivePage: (state: PaginationState, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = paginationSlice.actions;

export default paginationSlice.reducer;
