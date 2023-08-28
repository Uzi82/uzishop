import supabase from "."
import { answer } from "./types"

const getProduct = async (id: number) => {
    console.log(id)
    const { data, error }: answer = await supabase
        .from('products')
        .select()
        .eq('id', id)
    console.log(data, error)
    return data
}
export default getProduct