import image1x from '../assets/images/about/about1x.png'
import image2x from '../assets/images/about/about2x.png'

const About = () => {

    return (
        <section className="about">
            <div className="container">
                <div className="about__container">
                    <h2 className="about__title">About Us</h2>
                    <p className="about__text">The model offers a framework for discussing problems related to the
                                               user's experience, as well as possible ways and means of solving them.
                                               Application development begins at the top level (strategy), where the
                                               future software product is described quite abstractly from the point of
                                               view of the expectations of both users and the customer.</p>
                    <ul className="about__stats stats">
                        <li className="stats__item">
                            <h3 className="stats__amount">800</h3>
                            <h5 className="stats__object">Pupils</h5>
                        </li>
                        <li className="stats__item">
                            <h3 className="stats__amount">18</h3>
                            <h5 className="stats__object">Teachers</h5>
                        </li>
                        <li className="stats__item">
                            <h3 className="stats__amount">6</h3>
                            <h5 className="stats__object">Foreign languages</h5>
                        </li>
                    </ul>
                    <img src={image1x} srcSet={`${image1x}, ${image2x} 2x`} alt="" className="about__image"/>
                </div>
            </div>
        </section>
    )
}

export { About }