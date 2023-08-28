import { useAppSelector } from "../hooks/reduxHooks"
import SearchBar from "./HeaderComponents/SearchBar"
import ProfileButton from "./HeaderComponents/ProfileButton"
import useTheme from "../hooks/useTheme"

type props = {
    addBar: boolean,
    addButton: boolean
}

const Header: React.FC<props> = ({ addBar, addButton }) => {
    const { switchTheme } = useTheme()
    const theme = useAppSelector(state => state.rootPersistedReducer.theme.val)
    return(
        <header className="Header">
            <div className="Header__content">
                <h1 className="Header__content__title">Uzi shop</h1>
                {addBar ? <SearchBar /> : <></>}
                <div className="ProfileAndTheme">
                    <ProfileButton button={addButton} />
                    <div className="Theme">
                        <label className="switch">
                            <input checked={ theme === 'light' ? true : false } onChange={switchTheme} type="checkbox" tabIndex={-1} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header