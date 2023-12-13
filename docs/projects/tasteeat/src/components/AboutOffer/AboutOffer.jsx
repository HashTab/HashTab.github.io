import Title from "../Title/Title";
import AboutOfferItem from "./AboutOfferItem/AboutOfferItem";
import styles from "./AboutOffer.module.scss";

const title = "Our Great Services";
const description =
  "The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.";
const offers = [
  {
    img: "./img/offers/about/1.svg",
    title: "Opened 24/7",
  },
  {
    img: "./img/offers/about/2.svg",
    title: "Special Menus",
  },
  {
    img: "./img/offers/about/3.svg",
    title: "Home Delivery",
  },
];

const AboutOffer = () => {
  return (
    <section>
      <div className="Container">
        <div className={styles.Wrapper}>
          <div className={styles.Info}>
            <Title title="What we offer" />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.Grid}>
            {offers.map((item) => {
              return (
                <AboutOfferItem
                  img={item.img}
                  title={item.title}
                  key={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOffer;
