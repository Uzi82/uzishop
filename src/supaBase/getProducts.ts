import supabase from "."
import { answer } from "./types"

const getProducts = async () => {
    const { data, error } : answer = await supabase
        .from('products')
        .select()
    console.log(data, error)
    if(!error) return data
}
export default getProducts