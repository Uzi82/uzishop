import useTheme from "../hooks/useTheme"
import Header from "./Header"
import { useEffect, useState, useRef } from 'react'
import ProductCard from "./ProductCard"
import getProducts from "../supaBase/getProducts"
import { product } from "../supaBase/types"
import Loader from "./Loader"
import Footer from "./Footer"
import getSliders, { slider } from "../supaBase/getSliders"
import Slider from "./Slider"

const MainPage: React.FC = () => {
    const [products, setProducts] = useState<Array<product>>()
    const [page, setPage] = useState<number>(0)
    const more = useRef<Boolean>(false)
    const [sliders, setSliders] = useState<Array<slider>>([])
    useTheme()
    useEffect(() => {
        getProducts(page).then(res=> {
            if(res !== undefined && res) {
                let list = []
                console.log(res.length)
                if(res.length === 21) {
                    res.pop()
                    more.current = true
                }
                else more.current = false
                for(let el of res) {
                    list[el.id] = el
                }
                setProducts(list)
            }
        })
        getSliders().then(res => {
            if(res !== undefined && res) {
                let list = []
                for(let el of res) {
                    list[el.id] = el
                }
                setSliders(list)
            }
        })
    }, [page])
    if(products !== undefined) return(
        <>  
            <div className="MainPage">
                <Header addBar={true} addButton={true}/>
                {
                    sliders.length > 0 && page === 0
                        ? <Slider imgs={sliders} />
                        : <div className="SliderImage"></div>
                }
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
                    <div className="NextBack">
                        <button className="NextBack__el" onClick={()=>setPage(page-1)} disabled={ page === 0 ? true : false }>
                            Back
                        </button>
                        <button className="NextBack__el" onClick={()=>setPage(page+1)} disabled={ more.current ? false : true }>
                            Next
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
    else return <Loader />
}

export default MainPage