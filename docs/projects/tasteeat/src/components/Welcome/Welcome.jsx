import { BtnMenu } from "../../components/Btns/Btns";
import styles from "./Welcome.module.scss";

const title = "Welcome to Restaurant";
const description =
  "The people, food and the prime locations make the perfect place good friends & family to come together and have great time.";

const Welcome = () => {
  return (
    <div className="Container">
      <div className={styles.Wrapper}>
        <div className={styles.Left}>
          <h1>{title}</h1>
          <p>{description}</p>
          <BtnMenu />
        </div>
        <div className={styles.Right}>
          <div className="Img">
            <img src="./img/home/home_bg.png" alt="Home" />
          </div>
          <div className={styles.Decor}>
            <img src="./img/home/home_bg_decor.png" alt="Decor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
