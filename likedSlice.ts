import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "./src/supaBase/types";

type initialState = {
    list: Array<product>
}

const initialState: initialState = {
    list: []
}

const likedSlice = createSlice({
    name: 'likedSlice',
    initialState,
    reducers: {
        addBlock(state, action: PayloadAction<product>) {
            state.list = [...state.list, action.payload]
        },
        removeBlock(state, action: PayloadAction<number>) {
            state.list = state.list.filter(el => el.id !== action.payload)
        }
    }
})

export default likedSlice.reducer
export const { addBlock, removeBlock } = likedSlice.actions