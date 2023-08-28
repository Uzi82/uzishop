import { Link } from "react-router-dom"
import { useState } from 'react'
import { createUser } from "../store/userSlice"
import useTheme from "../hooks/useTheme"

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')
    function sumbitHandle() {
        console.log('sumbit')
        if(email.indexOf('mail.') !== -1 && email.indexOf('@') !== -1 && password === repeat && password.length >= 6) {
            createUser(email, password)
            console.log('user created')
        }
        else console.log('Password didn`t confirm')
    }
    useTheme()
    return(
        <>
            <main className="Auth">
                <div className="Auth__container">
                    <div className="Auth__container__header">
                        <h1 className="Auth__container__header__main">Sign Up</h1>
                        / 
                        <Link className="Auth__container__header__other" to={'/login'}>Log In</Link>
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
                        <div className="Auth__container__form__el">
                            <h1 className="Auth__container__form__el__header">Password</h1>
                            <input className="Auth__container__form__el__input" type="password" value={repeat} onChange={(e)=>setRepeat(e.target.value)} placeholder="1234567890" />
                        </div>
                        <button className="Auth__container__sumbit" onClick={sumbitHandle}>Sign Up</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUp