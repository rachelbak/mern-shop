import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        userIn: (state, action) => {
            state.currentUser = action.payload;
            axios.defaults.headers.common["authorization"] = `Bearer ${action.payload.token}`;
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
        },
        userOut: (state) => {
            state.currentUser = null;
            delete axios.defaults.headers.common["authorization"];
            localStorage.removeItem("currentUser");
        }
    }
})
export const { userIn, userOut } = userSlice.actions;
export default userSlice.reducer;