import supabase from './index'

const logOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.log(error)
}

export default logOut