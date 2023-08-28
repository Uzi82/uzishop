import supabase from ".";

const deleteCart = async (id: string) => {
    const { error } = await supabase
        .from('cart')
        .delete()
        .eq('uuid', id)
    console.log(error)
    return error
}
export default deleteCart