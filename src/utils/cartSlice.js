import { createSlice } from "@reduxjs/toolkit";
 

 const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action) =>{
            //mutuating the state here directly.
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        clearCart: (state, action) =>{
            state.items.length = 0;
        },
    },
 });

 export const {addItem, removeItem, clearCart} = cartSlice.actions;
 export default cartSlice.reducer;