import Title from "../Title/Title";
import styles from "./WorkingHours.module.scss";

const WorkingHours = () => {
  return (
    <div className={styles.Wrapper}>
      <Title title="Working Hours" />
      <p>
        <span>Mon – Fri:</span> 7.00am – 6.00pm
      </p>
      <p>
        <span>Sat:</span> 7.00am – 6.00pm
      </p>
      <p>
        <span>Sun:</span> 8.00am – 6.00pm
      </p>
    </div>
  );
};

export default WorkingHours;
