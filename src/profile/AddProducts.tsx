import { useEffect, useState } from "react"
import { useAppSelector } from "../hooks/reduxHooks"
import getAdmin from "../supaBase/getAdmin"
import { useNavigate } from "react-router-dom"
import Header from "../main/Header"

const AddProducts: React.FC = () => {
    const user = useAppSelector(state => state.rootPersistedReducer.auth.user)
    const nav = useNavigate()
    useEffect(()=>{
        if(user) getAdmin(user.id).then(res => {
            console.log(res)
            if(res === true) return
            else nav('/')
        })
    }, [])
    return(
        <>
            <Header addBar={false} addButton={false} />
            <main className="CreateProduct">
                <div className="CreateProduct__conteiner">
                    <h1 className="CreateProduct__header">Create new product</h1>
                    <p className="CreateProduct__title">Title</p>
                    <input className="CreateProduct__input" />
                    <p>Description</p>
                    <input className="CreateProduct__input" />
                    <p>Price</p>
                    <input className="CreateProduct__input" />
                    <p>Image</p>
                    <input className="CreateProduct__input" />
                    <button>Create</button>
                </div>
            </main>
        </>
    )
}

export default AddProducts