import { BtnFormSubmit } from "../../Btns/Btns";
import { useForm } from "react-hook-form";
import styles from "./ReservationForm.module.scss";

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <div className={styles.row}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className={styles.row}>
        <input
          type="number"
          placeholder="Persons"
          {...register("Persons", { required: true })}
        />
        <input
          type="time"
          placeholder="Timing"
          {...register("Timing", { required: true })}
        />
        <input
          type="datetime-local"
          placeholder="Date"
          {...register("Date", { required: true })}
        />
      </div>
      <div className={styles.row}>
        <BtnFormSubmit title="Book A Table" />
      </div>
    </form>
  );
};

export default ReservationForm;
