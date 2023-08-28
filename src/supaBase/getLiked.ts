import supabase from "."
import { answerLikedCart } from "./types"

const getLiked = async () => {
    const { data, error }: answerLikedCart = await supabase
        .from('Like')
        .select()
    console.log(data, error)
    return data
}

export default getLiked