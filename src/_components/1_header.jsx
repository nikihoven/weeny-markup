import logotype from '../assets/images/logotype.svg'
import { useRef } from 'react'

const Header = () => {
    const burger = useRef()
    const list = useRef()

    const mobileHandler = e => {
        burger.current.classList.toggle('burger__item--active')
        list.current.classList.toggle('navigation__list--active')
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <img className="header__logo" src={logotype} alt="logotype"/>
                    <nav className="header__navigation navigation">
                        <ul ref={list} className="navigation__list">
                            <li className="navigation__item">
                                <a href="/" className="navigation__link">Home</a>
                            </li>
                            <li className="navigation__item">
                                <a href="/" className="navigation__link">Skills</a>
                            </li>
                            <li className="navigation__item">
                                <a href="/" className="navigation__link">About Us</a>
                            </li>
                            <li className="navigation__item">
                                <a href="/" className="navigation__link">Pricing</a>
                            </li>
                            <li className="navigation__item">
                                <a href="/" className="navigation__link">Contacts</a>
                            </li>
                        </ul>
                        <div onClick={mobileHandler} className="navigation__burger burger">
                            <span className="burger__item"/>
                            <span className="burger__item"/>
                            <span className="burger__item burger__item--short" ref={burger}/>
                        </div>
                    </nav>
                    <button className="button header__button">Let`s talk</button>
                </div>
            </div>
        </header>
    )
}

export { Header }