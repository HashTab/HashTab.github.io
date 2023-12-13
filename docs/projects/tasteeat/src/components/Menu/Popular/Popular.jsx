import PopularItem from "./PopularItem/PopularItem";
import "react-multi-carousel/lib/styles.css";
import { popular } from "../../../data/popular";
import styles from "./Popular.module.scss";

const title = "Popular Dishes";
const description =
  "There is a game between the waiters in restaurant to see who serves the food to each table fastest. That led to attempting the Guinness Record.";

const Popular = () => {
  return (
    <section>
      <div className={styles.Wrapper}>
        <div className={styles.Title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.Grid}>
        {popular.map((item) => {
          return (
            <PopularItem
              title={item.title}
              price={item.price}
              description={item.description}
              img={item.img}
              key={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
