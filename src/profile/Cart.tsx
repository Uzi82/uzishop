import Header from "../main/Header"
import { useEffect } from 'react'
import getCart from "../supaBase/getCart"
import CartCard from "./cart/CartCard"
import BillList from "./cart/BillList"
import { likedCart } from "../supaBase/types"
import { useState } from "react"
import Loader from "../main/Loader"
import deleteCart from "../supaBase/deleteCart"

const Cart: React.FC = () => {
    const [cart, setCart] = useState<Array<likedCart>>()
    let sum = 0
    useEffect(() => {
        if(cart === undefined) getCart().then(res => {if(res && res !== undefined) setCart(res); console.log(res)})
        console.log(cart)
    }, [cart])
    function deleteHandle(del: string) {
        deleteCart(del)
        setCart(cart?.filter(el=> el.uuid !== del))
    }
    if(cart !== undefined) return(
        <>
            <Header addBar={false} addButton={true} />
            <div className="Cart">
                <div className="Cart__container">
                    <div className="Cart__container__Products">
                        {
                            cart.length > 0
                                ? cart.map((el) => {
                                    sum += el.price
                                    return(
                                        <div key={el.uuid} className="Cart__container__Products__el">
                                            <CartCard id={el.uuid} title={el.title} price={el.price} img={el.img} deleteCart={deleteHandle} />
                                        </div>
                                    )
                                })
                                :   <div className='NoLikes'>
                                        <svg>
                                            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                                No products in cart yet
                                            </text>
                                        </svg>
                                    </div>
                        }
                    </div>
                    {
                        cart.length > 0
                            ?   <div className="Payment">
                                    <h1 className="Payment__title">Bill</h1>
                                    <div className="Payment__line"></div>
                                    <p className="Payment__sum">Final sum: {sum}&#36;</p>
                                    <BillList cart={cart} />
                                    <button className="Payment__order">Order</button>
                                </div>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
    else return <Loader />
}

export default Cart