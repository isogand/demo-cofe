import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiCart from "./ui-cart";
import uiSlice from './ui-slice';


const store = configureStore({
    reducer:{ ui :uiSlice, cart :cartSlice, uicart:uiCart}
});

export default store;