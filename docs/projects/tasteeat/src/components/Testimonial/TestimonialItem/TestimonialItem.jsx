import styles from "./TestimonialItem.module.scss";

const TestimonialItem = (props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Info}>
        <div className={"Img " + styles.Img}>
          <img src={props.img} alt={props.title} />
        </div>
        <div>
          <h2>{props.title}</h2>
          <p>{props.location}</p>
        </div>
      </div>
      <div className={styles.Divider}></div>
      <p>{props.description}</p>
    </div>
  );
};

export default TestimonialItem;
