import { useEffect } from 'react'
import getLiked from '../supaBase/getLiked'
import { useState } from 'react'
import Header from '../main/Header'
import LikedCard from './LikedCard'
import { likedCart } from '../supaBase/types'
import deleteLike from '../supaBase/deleteLike'
import Loader from '../main/Loader'
import { useAppDispatch } from '../hooks/reduxHooks'
import { removeBlock } from '../store/likedSlice'

const Liked: React.FC = () => {
    const [liked, setLiked] = useState<Array<likedCart>>()
    const dispatch = useAppDispatch()
    useEffect(()=> {
        getLiked().then(res => {
            console.log('Res: ', res)
            if(res && res !== undefined) setLiked(res)
            else setLiked([])
        })
    }, [])
    function deleteHandle(id: number) {
        deleteLike(id)
        dispatch(removeBlock(id))
        setLiked(liked?.filter(el=> el.id !== id))
    }
    if(liked !== undefined) return(
        <>
            <Header addBar={false} addButton={true} />
            {
                liked.length > 0
                    ? <div className='Liked'>{liked.map(el => {
                        return(
                            <LikedCard key={el.uuid} id={el.id} title={el.title} price={el.price} img={el.img} product={el} deleteLiked={deleteHandle} />
                        )
                    })}</div>
                    :   <div className='NoLikes'>
                            <svg>
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                    No likes yet
                                </text>
                            </svg>
                        </div>
            }
        </>
    )
    else return <Loader />
}

export default Liked