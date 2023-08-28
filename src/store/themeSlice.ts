import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val: 'dark'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme(state) {
            if(state.val === 'dark') state.val = 'light'
            else state.val = 'dark'
        }
    }
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions