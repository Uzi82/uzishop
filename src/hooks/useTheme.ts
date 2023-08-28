import { changeTheme } from "../store/themeSlice"
import { useAppDispatch, useAppSelector } from "./reduxHooks"

const useTheme = () => {
    const theme = useAppSelector(state => state.rootPersistedReducer.theme.val)
    const dispatch = useAppDispatch()
    document.documentElement.setAttribute('data-theme', theme)
    const switchTheme = () => {
        dispatch(changeTheme())
        document.documentElement.setAttribute('data-theme', theme)
    }
    return { switchTheme }
}
export default useTheme