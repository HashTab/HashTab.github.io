import styles from "./PopularItem.module.scss";

const PopularItem = (props) => {
  return (
    <div className={styles.Wrapper}>
      <div className="Img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.Title}>
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PopularItem;
