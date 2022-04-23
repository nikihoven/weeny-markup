import { Header } from './_components/1_header'
import { Starter } from './_components/2_starter'
import { About } from './_components/4_about'
import { Pricing } from './_components/5_pricing'
import { Footer } from './_components/7_footer'
import { Contact } from './_components/6_contact'
import { Skills } from './_components/3_skills'

const App = () => {

    return (
        <>
            <Header/>
            <Starter/>
            <Skills/>
            <About/>
            <Pricing/>
            <Contact/>
            <Footer/>
        </>
    )
}

export { App }