import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCards } from "@/app/api/api";

export interface Card {
  id: number;
  title: string;
  updatedAt: string;
  summary: string;
  imageUrl: string;
}

interface CardsState {
  data: Card[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: CardsState = {
  data: [],
  loading: "idle",
  error: null,
};

export const fetchCardsAsync = createAsyncThunk(
  "cards/fetchCards",
  async () => {
    return await fetchCards();
  },
);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCardsAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCardsAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default cardsSlice.reducer;
