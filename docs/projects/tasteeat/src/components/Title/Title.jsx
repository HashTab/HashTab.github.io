import styles from "./Title.module.scss";

const Title = (props) => {
  return (
    <div className={styles.Title}>
      <p>{props.title}</p>
    </div>
  );
};

export default Title;
