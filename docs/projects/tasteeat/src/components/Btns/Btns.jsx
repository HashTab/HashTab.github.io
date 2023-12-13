import styles from "./Btns.module.scss";
import { NavLink } from "react-router-dom";

export const BtnCall = () => {
  return (
    <a href="tel:+123456789" className={styles.BtnCall}>
      Call - 123 456 789
    </a>
  );
};

export const BtnReservation = () => {
  return (
    <NavLink to="/reservation" className={styles.BtnReservation}>
      Reservation
    </NavLink>
  );
};

export const BtnMenu = () => {
  return (
    <NavLink to="/menu" className={styles.BtnMenu}>
      View Menu
    </NavLink>
  );
};

export const BtnToggleVisible = (props) => {
  return (
    <button className={styles.BtnSeeAll} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export const BtnViewMore = (props) => {
  return (
    <NavLink to={`/blog/${props.index}`} className={styles.BtnViewMore}>
      View More
    </NavLink>
  );
};

export const BtnFormSubmit = (props) => {
  return (
    <button className={styles.BtnFormSubmit} onClick={props.onClick}>
      {props.title}
    </button>
  );
};
