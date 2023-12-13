import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";

const Link = (props) => {
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        styles.Link + " " + (isActive ? styles.active : "")
      }
    >
      {props.title}
    </NavLink>
  );
};

export default Link;
