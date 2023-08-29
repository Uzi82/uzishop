import { PostgrestError } from "@supabase/supabase-js";
import supabase from ".";

export type slider = {
    id: number,
    img: string
}

type answer = {
    data: Array<slider> | null,
    error: PostgrestError | null
}

const getSliders = async () => {
    const { data, error } : answer = await supabase
        .from('sliders')
        .select()
    console.log(data, error)
    if(error === null) return data
}

export default getSliders