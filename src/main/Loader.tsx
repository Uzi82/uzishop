import Header from "./Header"

const Loader: React.FC = () => {
    return(
        <>
            <Header addBar={false} addButton={true} />
            <div className="loader">
                <div className="custom-loader"></div>
            </div>
        </>
    )
}

export default Loader