import { PostgrestError } from "@supabase/supabase-js"

export interface product {
    id: number,
    title: string,
    description: string,
    price: number,
    img: string
}

export interface likedCart {
    id: number,
    title: string,
    description: string,
    price: number,
    img: string
    uuid: string
}

export type answerLikedCart = {
    data: Array<likedCart> | null,
    error: PostgrestError | null
}

export type answer = {
    data: Array<product> | null,
    error: PostgrestError | null
}