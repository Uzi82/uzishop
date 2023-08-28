type props = {
    id: string,
    title: string,
    price: number,
    img: string,
    deleteCart: (el: string) => void
}

const CartCard: React.FC<props> = ({id, title, price, img, deleteCart}) => {
    return(
        <>
            <div className="Card">
                <img className="Card__img" src={img} alt="" />
                <h1 className="Card__title">{title}</h1>
                <p className="Card__flex__price">{price}&#36;</p>
                <div className="Card__flex">
                    <button onClick={() => deleteCart(id)} className="Card__flex__link">&#10006; Delete</button>
                </div>
            </div>
        </>
    )
}
export default CartCard