import styles from "./WelcomeStory.module.scss";

const title = "The Delicious Story";
const description =
  "The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.";

const WelcomeStory = () => {
  return (
    <section className={styles.WelcomeStory}>
      <div className="Container">
        <div className={styles.Wrapper}>
          <div className="Img">
            <img src="./img/home/Story_bg.png" alt="Home" />
          </div>
          <div className={styles.Right}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={styles.Years}>
              <div>
                <h2>2018</h2>
                <p>Plan for this restaurant to deliver healthy food.</p>
              </div>
              <div>
                <h2>2022</h2>
                <p>Happily in the fourth year by fulfill the motto.</p>
              </div>
            </div>
            <p>JOSEFINE</p>
            <div className={"Img " + styles.Img}>
              <img src="./img/home/Josefine.png" alt="Josefine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeStory;
