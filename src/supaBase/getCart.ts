import supabase from ".";
import { answerLikedCart } from "./types";

const getCart = async () => {
    const { data, error }: answerLikedCart = await supabase
        .from('cart')
        .select()
    console.log(data, error)
    if(error === null) return data
}

export default getCart