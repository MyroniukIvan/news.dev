// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice";
import cardsReducer from "./cardsSlice";

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    cards: cardsReducer,
  },
});

export default store;
