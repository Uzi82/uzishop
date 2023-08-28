import { Link } from "react-router-dom"
import { useState } from 'react'
import { loginUser } from "../store/userSlice"
import useTheme from "../hooks/useTheme"

const LogIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function sumbitHandle() {
        console.log('sumbit')
        loginUser(email, password)
        console.log('user logined')
    }
    useTheme()
    return(
        <>
            <main className="Auth">
                <div className="Auth__container">
                    <div className="Auth__container__header">
                        <h1 className="Auth__container__header__main">Log In</h1>
                        / 
                        <Link className="Auth__container__header__other" to={'/SignUp'}>Sign Up</Link>
                    </div>
                    <div className="Auth__container__line"></div>
                    <div className="Auth__container__form">
                        <div className="Auth__container__form__el">
                            <h1 className="Auth__container__form__el__header">E-mail</h1>
                            <input className="Auth__container__form__el__input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="example@email.com"/>
                        </div>
                        <div className="Auth__container__form__el">
                            <h1 className="Auth__container__form__el__header">Password</h1>
                            <input className="Auth__container__form__el__input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="1234567890"/>
                        </div>
                        <button className="Auth__container__sumbit" onClick={sumbitHandle}>Log In</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LogIn