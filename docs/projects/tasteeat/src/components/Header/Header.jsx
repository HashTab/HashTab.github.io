import { BtnCall, BtnReservation } from "../Btns/Btns";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="Container">
        <div className={styles.Wrapper}>
          <div className={styles.Buttons}>
            <BtnCall />
            <BtnReservation />
          </div>
          <div className="Logo">
            <NavLink to={"/home"}>
              <img src="./img/logo.png" alt="logo" />
            </NavLink>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
