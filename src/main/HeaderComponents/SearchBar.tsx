import { useAppSelector } from "../../hooks/reduxHooks"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const SearchBar: React.FC = () => {
    const theme = useAppSelector(state => state.rootPersistedReducer.theme.val)
    const [val, setVal] = useState('')
    const nav = useNavigate()
    function searchHandle() {
        nav(`/search/${val}`)
        window.location.reload()
    }
    return(
        <>
            <div className="SearchBar">
                <input className="SearchBar__input" value={val} onChange={e=>setVal(e.target.value)} placeholder="Search..."/>
                <button onClick={searchHandle} className="SearchBar__btn">
                    <img className="SearchBar__btn__img" alt="" src={theme === 'dark' ? require('../../imgs/searchDark.png') : require('../../imgs/searchLight.png')}/>
                </button>
            </div>
        </>
    )
}
export default SearchBar