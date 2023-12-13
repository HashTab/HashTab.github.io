import Welcome from "../components/Welcome/Welcome";
import WelcomeInfo from "../components/WelcomeInfo/WelcomeInfo";
import WelcomeStory from "../components/WelcomeStory/WelcomeStory";

const Home = () => {
  return (
    <main>
      <section className="Home">
        <Welcome />
        <WelcomeInfo />
        <WelcomeStory />
      </section>
    </main>
  );
};

export default Home;
