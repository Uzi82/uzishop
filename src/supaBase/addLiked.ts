import { User } from "@supabase/supabase-js";
import supabase from ".";
import { product } from "./types";

const addLiked = async (user: User, product: product) => {
    console.log({ user_id: user.id , ...product})
    const { error } = await supabase
        .from('Like')
        .insert({ user_id: user.id , ...product})
    return error
}

export default addLiked