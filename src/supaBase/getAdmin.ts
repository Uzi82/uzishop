import { PostgrestError } from "@supabase/supabase-js";
import supabase from ".";

type admin = {
    id: number,
    user_id: string
}

type answer = {
    data: Array<admin> | null,
    error: PostgrestError | null
}

const getAdmin = async (id: string) => {
    const { data, error } : answer = await supabase
        .from('admin')
        .select()
        .eq('admin_id', id)
    console.log(data, error)
    console.log(data?.length)
    if(error === null && data !== null && data.length > 0) return true
    else return false
}
export default getAdmin