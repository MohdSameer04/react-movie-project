import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";

// Create a Redux Toolikit Store 
export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
});
