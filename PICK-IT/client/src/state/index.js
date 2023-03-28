import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    productos: [],
    cart: null,
    whishlists: []
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setShopppigCart: (state) => {
           
        },
    }
})

export const { setMode, setLogin, setLogout, setShoppingCart} = authSlice.actions;
export default authSlice.reducer;