import styles from "./MenuBlockItem.module.scss";

const MenuBlockItem = (props) => {
  return (
    <li className={styles.Wrapper}>
      <div className="Img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.Right}>
        <h2>{props.title}</h2>
        <div className={styles.Description}>
          <p>{props.description}</p>
          <div className={styles.Divider}></div>
          <h2>{props.price}</h2>
        </div>
      </div>
    </li>
  );
};

export default MenuBlockItem;
