import styles from "./BlogItemPage.module.scss";
import Title from "../../Title/Title";

const BlogItemPage = (props) => {
  return (
    <div className="Container">
      <div className={styles.Wrapper}>
        <Title title="Blog" />
        <h2>{props.title}</h2>
        <div className={styles.Img}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={styles.Text}>
          <div className={styles.Title}>
            <Title title={props.theme} />
            <Title title={props.date.toLocaleString()} />
          </div>
          <p>{props.description}</p>
          <p>{props.extendedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItemPage;
