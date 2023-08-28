import { useEffect, useState } from 'react'
import search from '../supaBase/search'
import { product } from '../supaBase/types'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import Header from './Header'
import Loader from './Loader'

const Search: React.FC = () => {
    const [searchArr, setSearchArr] = useState<Array<product>>()
    const searchText = useParams()
    console.log('searchText: ', searchText)
    useEffect(()=> {
        if(searchText.text !== undefined && searchArr === undefined){
            search(searchText.text).then(res => {
                console.log('Res: ', res)
                if(res !== null && res !== undefined) setSearchArr(res)
            })
        }
        console.log('Answer: ', searchArr)
    }, [searchArr, searchText.text])
    if(searchArr !== undefined) return(
        <>
            <Header addBar={true} addButton={false} />
            {
                searchArr.length > 0 
                    ?   <div className='Search'>
                            <div className="Search__content">
                                {
                                    searchArr.map(el => {
                                        return(
                                            <ProductCard key={el.id} id={el.id} title={el.title} price={el.price} img={el.img} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    :   <div className='NoLikes'>
                            <svg>
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                    No results
                                </text>
                            </svg>
                        </div>
            }
        </>
    )
    else return <Loader />
}

export default Search