import OfferItem from "./OfferItem/OfferItem";
import Title from "../../Title/Title";
import { offers } from "../../../data/offers";
import styles from "./Offers.module.scss";

const description =
  "Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the dishes are in offers use it based on hunger.";

const Offers = () => {
  return (
    <section>
      <div className={styles.Wrapper}>
        <Title title="offers" />
        <h2>Our Offer dishes</h2>
        <p>{description}</p>
        <div className={styles.OfferItems}>
          {offers.map((offer) => {
            return (
              <OfferItem
                price={offer.price}
                offer={offer.offer}
                title={offer.title}
                description={offer.description}
                img={offer.img}
                dark={offer.dark}
                key={offer.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
