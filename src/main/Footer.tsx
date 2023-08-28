import { Link } from "react-router-dom"

const Footer: React.FC = () => {
    return(
        <>
            <header className="Footer">
                <div className="Footer__content">
                    <h1 className="Header__content__title">Uzi shop</h1>
                    <div className="FooterLinks">
                        <a href="https://github.com/uzi82" target="_black" className="FooterLinks__link">About me</a>
                        <Link className="FooterLinks__link" to={'/createProduct'}>Stuff</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Footer