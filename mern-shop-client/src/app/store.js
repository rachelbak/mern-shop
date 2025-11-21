import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import userSlice from "../features/userSlice";
//מכיל את כל הנתונים של האפליקציה
// configureStore יוצרים עי 
export const store = configureStore({
    reducer: {
        cart: cartSlice,//state.cart.arr
        user: userSlice
    },
    // devTools: true
})

