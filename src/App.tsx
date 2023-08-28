import { RouterProvider } from "react-router-dom"
import { privateRouter, publicRouter } from "./routes"
import { useAppSelector, useAppDispatch } from "./hooks/reduxHooks"
import { isAuth } from "./store/userSlice"
import { useEffect } from "react"

const App: React.FC = () => {
    const user = useAppSelector(state => state.rootPersistedReducer.auth.user)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(isAuth())
    }, [dispatch])
    return(
        <RouterProvider router={user !== null ? privateRouter : publicRouter} />
    )
}

export default App