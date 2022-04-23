import live1x from '../assets/images/pricing/live1x.png'
import live2x from '../assets/images/pricing/live2x.png'
import offline1x from '../assets/images/pricing/offline1x.png'
import offline2x from '../assets/images/pricing/offline2x.png'
import personal1x from '../assets/images/pricing/personal1x.png'
import personal2x from '../assets/images/pricing/personal2x.png'

const Pricing = () => {

    return (
        <section className="pricing">
            <div className="container pricing__container">
                <h2 className="pricing__title">Pricing</h2>
                <ul className="pricing__list">
                    <li className="pricing__card card">
                        <img src={live1x} srcSet={`${live1x}, ${live2x} 2x`} alt="" className="card__image"/>
                        <h3 className="card__title">Self-study online course</h3>
                        <h5 className="card__text">Start learning English online in live classes with qualified
                                                   EC
                                                   teachers and students from all over the world.</h5>
                        <div className="card__pricing pricing">
                            <span className="pricing__amount">£5.99</span>
                            <span className="pricing__duration">per month</span>
                        </div>
                    </li>
                    <li className="pricing__card card">
                        <img src={offline1x} srcSet={`${offline1x}, ${offline2x} 2x`} alt="" className="card__image"/>
                        <h3 className="card__title">Live online classes</h3>
                        <h5 className="card__text">Interactive group classes with expert teachers. Free 7-day
                                                   trial</h5>
                        <div className="card__pricing pricing">
                            <span className="pricing__amount">£12.99</span>
                            <span className="pricing__duration">per month</span>
                        </div>
                    </li>
                    <li className="pricing__card card">
                        <img src={personal1x} srcSet={`${personal1x}, ${personal2x} 2x`} alt="" className="card__image"/>
                        <h3 className="card__title">Personal Tuition</h3>
                        <h5 className="card__text">Online one-to-one English tutoring – enjoy our first session
                                                   for
                                                   only $1</h5>
                        <div className="card__pricing pricing">
                            <span className="pricing__amount">£20.99</span>
                            <span className="pricing__duration">per month</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export { Pricing }