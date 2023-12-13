import styles from "./BlogItem.module.scss";
import { BtnViewMore } from "../../Btns/Btns";
import Title from "../../Title/Title";

const BlogItem = (props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Img}>
        <img src={props.img} alt={props.title} />
        <div className={styles.Btn}>
          <BtnViewMore index={props.index} />
        </div>
      </div>
      <div className={styles.Text}>
        <div className={styles.Title}>
          <Title title={props.theme} />
          <Title title={props.date.toLocaleString()} />
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
