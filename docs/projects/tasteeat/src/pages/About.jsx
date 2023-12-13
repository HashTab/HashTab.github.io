import WelcomeStory from "../components/WelcomeStory/WelcomeStory";
import Testimonial from "../components/Testimonial/Testimonial";
import AboutOffer from "../components/AboutOffer/AboutOffer";

const About = () => {
  return (
    <main>
      <section className="About">
        <Testimonial />
        <WelcomeStory />
        <AboutOffer />
      </section>
    </main>
  );
};

export default About;
