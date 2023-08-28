import { User } from "@supabase/supabase-js";
import supabase from ".";
import { product } from "./types";

const addCart = async (user: User, product: product) => {
    console.log({ user_id: user.id , ...product})
    const { error } = await supabase
        .from('cart')
        .insert({ user_id: user.id , ...product})
    console.log( error )
    return error
}

export default addCart