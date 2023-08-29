import Header from "../main/Header"
import { useState } from 'react'
import resetPassword from "../supaBase/resetPassword"
import { useAppDispatch } from "../hooks/reduxHooks"
import { setUser } from "../store/userSlice"

const Settings: React.FC = () => {
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    function passwordHandle() {
        resetPassword(password).then(res=> {
            if(res !== undefined && res) dispatch(setUser(res))
        })
    }
    return(
        <>
            <Header addBar={false} addButton={true} />
            <div className="Settings">
                <div className="Settings__container">
                    <h1 className="Settings__title">Change password</h1>
                    <input placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} className="Settings__input" />
                    <button className="Settings__submit" onClick={passwordHandle}>Change</button>
                </div>
            </div>
        </>
    )
}

export default Settings