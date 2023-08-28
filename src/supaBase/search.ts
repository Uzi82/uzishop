import supabase from ".";
import { answer } from "./types";

const search = async (text: string) => {
    console.log(text)
    const { data, error }: answer = await supabase
        .from('products')
        .select()
        .textSearch('title', text, {
            type: 'websearch',
            config: 'english'
        })
    console.log(data, error)
    if(error === null) return data
}
export default search