import supabase from "."

const createProduct = async (title: string, description: string, price: number, img: string) => {
    const { error } = await supabase
        .from('products')
        .insert(
            { 
                title: title,
                description: description,
                price: price,
                img: img
            }
        )
    console.log(error)
}

export default createProduct