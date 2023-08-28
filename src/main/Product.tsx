import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import Header from "./Header"
import addLiked from "../supaBase/addLiked"
import addCart from "../supaBase/addCart"
import deleteLike from "../supaBase/deleteLike"
import { useEffect, useState } from "react"
import getProduct from "../supaBase/getProduct"
import { product } from "../supaBase/types"
import { addBlock, removeBlock } from "../store/likedSlice"
import Loader from "./Loader"

const Product: React.FC = () => {
    const productId = useParams()
    let id: number = productId.id !== undefined ? parseInt(productId.id) : 0
    const [product, setProduct] = useState<product>()
    const user = useAppSelector(state => state.rootPersistedReducer.auth.user)
    const block = useAppSelector(state => state.rootPersistedReducer.liked.list)
    const [heartClass, setHeartClass] = useState('Heart')
    const dispatch = useAppDispatch()
    console.log('Block: ', block)
    const liked = block?.find(el => el.id === product?.id) !== undefined && block !== undefined? true : false
    useEffect(() => {
        if(!product) getProduct(id).then(res => {
            if(res !== undefined && res) setProduct(res[0])
        })
    })
    function cartHandle() {
        console.log('Added to cart')
        if(user && product !== undefined) addCart(user, product)
    }
    function likeHandle() {
        console.log('Liked')
        if(product !== undefined) {
            if(!liked && user) {
                setHeartClass('')
                setTimeout(()=>{
                    setHeartClass('Heart')
                }, 10)
                addLiked(user, product)
                dispatch(addBlock(product))
            }
            else {
                setHeartClass('')
                setTimeout(()=>{
                    setHeartClass('Heart')
                }, 10)
                deleteLike(product.id)
                dispatch(removeBlock(product.id))
            }
        }
        
    }
    if(product !== undefined) return(
        <>
            <Header addBar={false} addButton={false} />
            <div className="ProductContainer">
                <div className="Product">
                    <img className="Product__img" src={product.img} alt="" />
                    <div className="Product__text">
                        <h1 className="Product__text__title">
                            {product.title}
                        </h1>
                        <p className="Product__text__price">{product.price}&#36;</p>
                        <div className="Product__text__buttons">
                            <button onClick={cartHandle} className="Product__text__buttons__btn">Add to cart 🛒</button>
                            <button onClick={likeHandle} className={heartClass +" Product__text__buttons__btn"}>{liked ? <>❤️</>: <>🤍</>}</button>
                        </div>
                        <div className="Product__text__line"></div>
                        <p className="Product__text__description">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
    else return <Loader />
}
export default Product