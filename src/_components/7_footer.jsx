import logotype from '../assets/images/logotype.svg'

const Footer = () => {

    return (
        <footer className="footer">
                <div className="container">
                    <div className="footer__container">
                        <img src={logotype} alt="" className="footer__logotype"/>
                        <nav className="footer__navigation navigation">
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    <a href="/" className="navigation__link">Terms and Conditions</a>
                                </li>
                                <li className="navigation__item">
                                    <a href="/" className="navigation__link">Privacy Policy</a>
                                </li>
                                <li className="navigation__item">
                                    <a href="/" className="navigation__link">Cookie Policy</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </footer>
    )
}

export { Footer }