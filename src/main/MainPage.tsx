import useTheme from "../hooks/useTheme"
import Header from "./Header"
import { useEffect, useState } from 'react'
import ProductCard from "./ProductCard"
import getProducts from "../supaBase/getProducts"
import { product } from "../supaBase/types"
import Loader from "./Loader"
import Footer from "./Footer"

const MainPage: React.FC = () => {
    const [products, setProducts] = useState<Array<product>>()
    const [upd, Update] = useState<boolean>(true)
    useTheme()
    useEffect(() => {
        getProducts().then(res=> {
            if(res !== undefined && res) {
                let list = []
                for(let el of res) {
                    list[el.id] = el
                }
                setProducts(list)
            }
        })
    }, [])
    if(products !== undefined) return(
        <>  
            <div className="MainPage">
                <Header addBar={true} addButton={true}/>
                <main className="MainPage__main">
                    <div className="Products">
                        {
                            products !== null 
                                ? products.map((el, index)=> {
                                    return(
                                        <ProductCard key={el.id} id={index} title={el.title} price={el.price} img={el.img} />
                                    )
                                })
                                : <h1>No products yet</h1>
                        }
                    </div>
                    
                </main>
                <Footer />
            </div>
        </>
    )
    else return <Loader />
}

export default MainPage