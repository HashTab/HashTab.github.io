import styles from "./AboutOfferItem.module.scss";

const AboutOfferItem = (props) => {
  return (
    <div className={styles.Wrapper}>
      <div className="Img">
        <img src={props.img} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default AboutOfferItem;
