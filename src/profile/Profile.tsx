import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import Header from "../main/Header"
import logOut from "../supaBase/logOut"
import { setUser } from "../store/userSlice"
import { useNavigate } from "react-router-dom"

const Profile: React.FC = () => {
    const user = useAppSelector(state => state.rootPersistedReducer.auth.user)
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    function logOutHandle() {
        logOut().then(res => {dispatch(setUser(null)); nav('/'); window.location.reload()})
    }
    return(
        <>
            <div className="Profile-container">
                <Header addBar={false} addButton={false}/>
                <main className="Profile">
                    <h1 className="Profile__header">
                        Profile of <span>{user?.email?.slice(0, user.email.indexOf('@'))}</span>
                    </h1>
                    <div className="Profile__line"></div>
                    <div className="Profile__elements">
                        <Link to={'/Liked'} className="Profile__elements__el">
                            <h1 className="Profile__elements__el-header">Liked</h1>
                            <div className="Profile__elements__el-line"></div>
                            <p className="Profile__elements__el-paragraph">Products of our shop, which were liked by you some time ago.</p>
                        </Link>
                        <Link to={'/Cart'} className="Profile__elements__el">
                            <h1 className="Profile__elements__el-header">Cart</h1>
                            <div className="Profile__elements__el-line"></div>
                            <p className="Profile__elements__el-paragraph">Your cart, where you can buy you products whith using cards.</p>
                        </Link>
                        <Link to={'/Cart'} className="Profile__elements__el">
                            <h1 className="Profile__elements__el-header">Settings</h1>
                            <div className="Profile__elements__el-line"></div>
                            <p className="Profile__elements__el-paragraph">Here you can change password, email and etc.</p>
                        </Link>
                    </div>
                    <button className="Profile__logOut" onClick={() => logOutHandle()}>Log out</button>
                </main>
            </div>
        </>
    )
}

export default Profile