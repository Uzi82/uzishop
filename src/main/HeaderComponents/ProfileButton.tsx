import { useAppSelector } from "../../hooks/reduxHooks"
import { Link } from "react-router-dom"

type props = {
    button: boolean
}

const ProfileButton: React.FC<props> = ({ button }) => {
    const user = useAppSelector(state => state.rootPersistedReducer.auth.user)
    function formatName(email: string | undefined) {
        if(email !== undefined) return email.slice(0, email.indexOf('@'))
        else return 'Profile'
    }
    if(button) {
        return(
            <>
                {user === null
                    ? <Link className="ProfileBtn" to={'/signup'}>Sign Up</Link> 
                    : <Link className="ProfileBtn" to={'/profile'}>{formatName(user.email)}</Link>
                }    
            </>
        )
    }
    else {
        return(
            <>
                <Link to={'/'} className="ProfileBtn">&#9776; Main</Link>
            </>
        )
    }
}

export default ProfileButton