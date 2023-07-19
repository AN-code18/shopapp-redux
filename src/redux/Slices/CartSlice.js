import { createSlice } from "@reduxjs/toolkit";

export  const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state , action) => {
            state.push(action.payload);
        },
        remove:(state , action) => {
            //iss state m whi item ko save krna jiski id i/p parameter(action.payload) se match na ho rhi ho
            return state.filter((item) =>item.id !== action.payload);
        },
    }

});

export const {add , remove} = CartSlice.actions;
export default CartSlice.reducer;
