import image1x from '../assets/images/contact/contact1x.png'
import image2x from '../assets/images/contact/contact2x.png'

const Contact = () => {

    return (
        <section className="contact">
                <div className="container">
                    <div className="contact__container">
                        <img src={image1x} srcSet={`${image1x}, ${image2x} 2x`} alt="" className="contact__image"/>
                        <h2 className="contact__title">Contact Us</h2>
                        <p className="contact__text">Discover your current English level by taking our free online English test. Sign up to our newsletter for learning tips and free resources</p>
                        <div className="contact__form form">
                            <input type="text" className="form__input" placeholder="Enter Your E-mail"/>
                            <button className="button button--secondary form__button">Subscribe</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export { Contact }