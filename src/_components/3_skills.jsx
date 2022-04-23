import speaking1x from '../assets/images/skills/speaking1x.png'
import speaking2x from '../assets/images/skills/speaking2x.png'
import writing1x from '../assets/images/skills/writing1x.png'
import writing2x from '../assets/images/skills/writing2x.png'
import reading1x from '../assets/images/skills/reading1x.png'
import reading2x from '../assets/images/skills/reading2x.png'
import listening1x from '../assets/images/skills/listening1x.png'
import listening2x from '../assets/images/skills/listening2x.png'




const Skills = () => {

    return (
        <section className="skills">
            <div className="container">
                <h2 className="skills__title">Skills</h2>
                <ul className="skills__container">
                    <li className="skills__item item item--large" style={{gridArea: 'speaking'}}>
                        <img src={speaking1x} srcSet={`${speaking1x}, ${speaking2x} 2x`} alt="" className="item__image"/>
                        <h3 className="item__heading">Speaking</h3>
                        <div className="item__text text">
                            <p className="text__paragraph">Improve your English skills and confidence. Live classes and
                                                           interactive lessons online. 20% extra free for a limited time
                                                           only</p>
                            <p className="text__paragraph">Learn English online and improve your skills through our
                                                           high-quality courses and resources – all designed for adult
                                                           language learners.</p>
                        </div>
                        <button className="button button--secondary item__button">Learn more</button>
                    </li>
                    <li className="skills__item item" style={{gridArea: 'writing'}}>
                        <img src={writing1x} srcSet={`${writing1x}, ${writing2x} 2x`} alt="" className="item__image"/>
                        <h3 className="item__heading">Writing</h3>
                        <div className="item__text text">
                            <p className="text__paragraph">One of the most important and extensive areas of natural
                                                           science,
                                                           the science that studies substances, also their
                                                           composition </p>
                        </div>

                        <button className="button button--secondary item__button">Learn more</button>
                    </li>
                    <li className="skills__item item" style={{gridArea: 'reading'}}>
                        <img src={reading1x} srcSet={`${reading1x}, ${reading2x} 2x`} alt="" className="item__image"/>
                        <h3 className="item__heading">Reading</h3>
                        <div className="item__text text">
                            <p className="text__paragraph">Perception and response actions of the user resulting from
                                                           the use
                                                           and/or upcoming use of the product, system or service</p>
                        </div>

                        <button className="button button--secondary item__button">Learn more</button>
                    </li>
                    <li className="item--horizontal skills__item item" style={{gridArea: 'listening'}}>
                        <img src={listening1x} srcSet={`${listening1x}, ${listening2x} 2x`} alt="" className="item__image"/>
                        <h3 className="item__heading">Listening</h3>
                        <div className="item__text text">
                            <p className="text__paragraph">Here you can find activities to practise your listening
                                                           skills.
                                                           Listening will help you to improve your understanding </p>
                        </div>

                        <button className="button button--secondary item__button">Learn more</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export { Skills }