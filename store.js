import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./slices/BasketReducer";
export const store = configureStore({
    reducer: {
        basket: BasketReducer,
    },
});
