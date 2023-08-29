import useTheme from "../hooks/useTheme"
import Header from "./Header"

const Error: React.FC = () => {
    useTheme()
    return(
        <>
            <Header addBar={false} addButton={false} />
            <div className="Error">
                <h1 className="Error__title">Error 404</h1>
            </div>
        </>
    )
}

export default Error