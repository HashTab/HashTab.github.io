import { BtnFormSubmit } from "../Btns/Btns";
import { useForm } from "react-hook-form";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <input placeholder="Email" {...register("email", { required: true })} />
      <BtnFormSubmit title="Subscribe" />
    </form>
  );
};

export default Subscribe;
