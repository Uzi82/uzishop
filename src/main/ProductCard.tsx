import { Link } from "react-router-dom"

type props = {
    id: number,
    title: string,
    price: number,
    img: string
}

const ProductCard: React.FC<props> = ({id, title, price, img}) => {
    return(
        <>
            <div className="Card">
                <img className="Card__img" src={img} alt="" />
                <h1 className="Card__title">{title}</h1>
                <div className="Card__flex">
                    <p className="Card__flex__price">{price}&#36;</p>
                    <Link className="Card__flex__link" to={`/products/${id}`}>BUY 🛒</Link>
                </div>
            </div>
        </>
    )
}
export default ProductCard