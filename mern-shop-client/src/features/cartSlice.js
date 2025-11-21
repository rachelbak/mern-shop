import { createSlice } from "@reduxjs/toolkit"

const saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { arr: [], sumInCart: 0, countInCart: 0 };
};

const cartSlice = createSlice({
    name: "cart",
    initialState: loadCartFromStorage(),
    reducers: {
        addToCart: (state, action) => {
            let index = state.arr.findIndex(item => item._id == action.payload._id);
            if (index > -1)
                state.arr[index].qty++;
            else
                state.arr.push({ ...action.payload, qty: 1 });
            state.countInCart++;
            state.sumInCart += action.payload.price;
            saveCartToStorage(state);
        },
        removeFromCart: (state, action) => {
            let index = state.arr.findIndex(item => item._id == action.payload._id);
            if (index > - 1)
                if (state.arr[index].qty > 1) {
                    state.arr[index].qty--;
                    state.sumInCart -= state.arr[index].price;
                }
                else {
                    state.sumInCart -= state.arr[index].price;
                    state.arr = state.arr.filter(product => product._id !== action.payload._id);
                }
            state.countInCart--;
            saveCartToStorage(state);
        },
        deleteFromCart: (state, action) => {
            let index = state.arr.findIndex(item => item._id == action.payload._id);
            if (index > - 1) {
                state.countInCart -= state.arr[index].qty;
                state.sumInCart -= (state.arr[index].price * state.arr[index].qty);
                state.arr[index].qty = 0;
                state.arr = state.arr.filter(product => product._id !== action.payload._id);
            }
            saveCartToStorage(state);
        },
        clearCart: (state) => {
            state.arr = [];
            state.sumInCart = 0;
            state.countInCart = 0;
            localStorage.removeItem("cart");
        }

    }

})
export const { addToCart, removeFromCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
