import { useEffect, useState } from "react"
import { useAppSelector } from "../hooks/reduxHooks"
import getAdmin from "../supaBase/getAdmin"
import { useNavigate } from "react-router-dom"
import Header from "../main/Header"
import createProduct from "../supaBase/createProduct"

const AddProducts: React.FC = () => {
    const user = useAppSelector(state => state.rootPersistedReducer.auth.user)
    const nav = useNavigate()
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [img, setImg] = useState<string>('')
    useEffect(()=>{
        if(user) getAdmin(user.id).then(res => {
            console.log(res)
            if(res === true) return
            else nav('/')
        })
    }, [])
    function priceHandle(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        if(parseInt(e.target.value) > 9999) setPrice(9999)
        else if(parseInt(e.target.value) <= 0) setPrice(1)
        else setPrice(parseInt(e.target.value))
    }
    function sumbitHanle() {
        createProduct(title, description, price, img)  
    }
    return(
        <>
            <Header addBar={false} addButton={false} />
            <main className="CreateProduct">
                <div className="CreateProduct__conteiner">
                    <h1 className="CreateProduct__header">Create new product</h1>
                    <p className="CreateProduct__title">Title</p>
                    <input maxLength={50} placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} className="CreateProduct__inputTitle" />
                    <p className="CreateProduct__title">Description</p>
                    <textarea placeholder="Description here..." value={description} onChange={(e) => setDescription(e.target.value)} className="CreateProduct__inputDescription" />
                    <div className="CreateProduct__PriceAndImg">
                        <p className="CreateProduct__title">Price</p>
                        <input type="number" placeholder="How much it costs..." value={price} onChange={priceHandle} className="CreateProduct__inputPrice" />
                        <p className="CreateProduct__title">Image</p>
                        <input type="url" placeholder="https://someUrl.com/img.png" value={img} onChange={(e) => setImg(e.target.value)} className="CreateProduct__inputImg" />
                    </div>
                    
                    <button className="CreateProduct__sumbit" onClick={sumbitHanle}>Create</button>
                </div>
            </main>
        </>
    )
}

export default AddProducts