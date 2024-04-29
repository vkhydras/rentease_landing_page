import Benefits from './Benefits';
import Contact from './Contact';
import Features from './Features';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import NavBar from './NavBar';
import Testimonials from './Testimonials';




export default function Home() {
  return (
    <div>
    <NavBar />
    <Hero/>
    <Features />
    <HowItWorks />
    <Benefits />
    <Testimonials />
    <Contact />
  </div>
  )
}
