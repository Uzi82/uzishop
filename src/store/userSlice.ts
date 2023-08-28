import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import supabase from "../supaBase";
import getLogin from "../supaBase/getLogin";
import { User } from "@supabase/supabase-js";

type initialStateType = {
    user: User | null
}

const initialState: initialStateType = {
    user: null
}

export const createUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    if(!error) window.location.reload()
}

export const loginUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if(!error) window.location.reload()
}

const isAuth = () => {
    return (dispatch: AppDispatch) => {
        getLogin().then(res=> {dispatch(setUser(res))})
    }
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer
export const { setUser } = userSlice.actions
export { isAuth }