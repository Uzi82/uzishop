import supabase from "."
import { answer } from "./types"

const getProducts = async (page: number) => {
    const { data, error } : answer = await supabase
        .from('products')
        .select()
        .gt('id', page*20)
        .lte('id', page*20+21)
    console.log(data, error)
    if(!error) return data
}
export default getProducts