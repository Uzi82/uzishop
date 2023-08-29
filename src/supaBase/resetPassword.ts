import { AuthError, User } from "@supabase/supabase-js";
import supabase from ".";

type answer = {
    data: {
        user: User | null,
    },
    error: AuthError | null
}

const resetPassword = async (password: string) => {
    const { data: { user }, error } : answer = await supabase.auth.updateUser({
        password: password
    })
    console.log(user, error)
    if(error === null) return user
}

export default resetPassword