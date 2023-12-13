import Title from "../Title/Title";
import styles from "./ReservationComponent.module.scss";
import ReservationForm from "./ReservationForm/ReservationForm";

const ReservationComponent = () => {
  return (
    <div className={styles.Wrapper}>
      <Title title="reservation" />
      <h2>Book Your Table</h2>
      <ReservationForm />
    </div>
  );
};

export default ReservationComponent;
