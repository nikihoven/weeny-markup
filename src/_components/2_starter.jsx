import image1x from '../assets/images/starter/start1x.png'
import image2x from '../assets/images/starter/start2x.png'

const Starter = () => {

    return (
        <section className="starter">
            <div className="container">
                <div className="starter__container">
                    <div className="starter__side starter__side--left">
                        <h1 className="starter__title">
                            Learn <br className="starter__break--first"/>
                            Any <br className="starter__break--second"/>
                            Foreign <br className="starter__break--third"/>
                            Language
                        </h1>
                        <h3 className="starter__text">With our teachers who write a program for each student, you will
                                                      be able to make your first sketch after the first lesson.</h3>
                        <a href="/" className="button button--secondary starter__button">Get started</a>
                    </div>
                    <div className="starter__side starter__side--right">
                        <img src={image1x} srcSet={`${image1x}, ${image2x} 2x`} alt="" className="starter__image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Starter }