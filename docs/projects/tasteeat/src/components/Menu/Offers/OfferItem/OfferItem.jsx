import styles from "./OfferItem.module.scss";

const OfferItem = (props) => {
  const dark = !props.dark ? styles.v1 : styles.v2;
  return (
    <div className={styles.Wrapper + " " + dark}>
      <div className={styles.Left}>
        <div className={styles.Price + " " + dark}>
          <p>ONLY</p>
          <p>${props.price}</p>
        </div>
        <div className={styles.Offer}>{props.offer}% OFFER GOING</div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="Img">
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
};

export default OfferItem;
