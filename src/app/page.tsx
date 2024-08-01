import Contact from './Home/Contact';
import FeaturedProjects from './Home/FeaturedProjects';
import Hero from './Home/Hero';
import OurServices from './Home/OurServices';
import Testimonials from './Home/Testimonials';
import WhoWeAre from './Home/WhoWeAre';


export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <OurServices />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}
