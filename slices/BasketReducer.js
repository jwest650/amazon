import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};
export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeBasket: (state, action) => {
            const index = state.items.findIndex(
                (index) => index.id === action.payload.id
            );
            const newBasket = [...state.items];
            if (index !== -1) {
                newBasket.splice(index, 1);
            } else {
                console.warn("No Item as Such");
            }
            state.items = newBasket;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeBasket } = basketSlice.actions;
export const selectedItem = (state) => state.basket.items;
export const totalPrice = (state) =>
    state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
