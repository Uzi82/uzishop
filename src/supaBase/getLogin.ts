import supabase from "."

const getLogin = async () => {
    const {data: {user}} = await supabase.auth.getUser()
    return user
}

export default getLogin