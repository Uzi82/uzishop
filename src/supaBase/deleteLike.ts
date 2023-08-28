import supabase from ".";

const deleteLike = async (id: number) => {
    const { error } = await supabase
        .from('Like')
        .delete()
        .eq('id', id)
    console.log(error)
    return error
}

export default deleteLike