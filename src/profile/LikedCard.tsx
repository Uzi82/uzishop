import { useAppSelector } from "../hooks/reduxHooks"
import addCart from "../supaBase/addCart"
import deleteLike from "../supaBase/deleteLike"
import { product } from "../supaBase/types"

type props = {
    id: number,
    title: string,
    price: number,
    img: string,
    product: product,
    deleteLiked: (id: number) => void
}

const LikedCard: React.FC<props> = ({id, title, price, img, product, deleteLiked}) => {
    const user = useAppSelector(state => state.rootPersistedReducer.auth.user)
    function deleteHandle() {
        deleteLike(id).then(res => {
            if(res!== undefined && !res) {
                deleteLiked(id)
            }
        })
    }
    function toCartHandle() {
        if(user) addCart(user, product)
        deleteLike(id).then(res => {
            if(res!== undefined && !res) {
                deleteLiked(id)
            }
        })
    }
    return(
        <>
            <div className="Card">
                <img className="Card__img" src={img} alt="" />
                <h1 className="Card__title">{title}</h1>
                <p className="Card__flex__price">{price}&#36;</p>
                <div className="Card__flex">
                    <button onClick={() => deleteHandle()} className="Card__flex__link">&#10006; Delete</button>
                    <button className="Card__flex__link" onClick={toCartHandle}>To cart 🛒</button>
                </div>
            </div>
        </>
    )
}
export default LikedCard