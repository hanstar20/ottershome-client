// store.js

import { configureStore } from "@reduxjs/toolkit";
import { toggleSlice } from './slice/menuToggle';

//redux store
export const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
  },
});