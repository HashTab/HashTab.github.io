import SocialLinks from "../SocialLinks/SocialLinks";
import { NavLink } from "react-router-dom";
import Contact from "../Contact/Contact";
import WorkingHours from "../WorkingHours/WorkingHours";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="Container">
        <div className={styles.Wrapper}>
          <div className={styles.SocialWrapper}>
            <p>#TheTastEat</p>
            <SocialLinks />
          </div>
          <div className={styles.LogoWrapper}>
            <div className="Logo">
              <NavLink to="/">
                <img src={"./img/logo.png"} alt="logo" />
              </NavLink>
              <p>
                Join our mailing list for updates, <br /> Get news & offers
                events.
              </p>
            </div>
          </div>
          <div className={styles.ContactWrapper}>
            <Contact />
            <WorkingHours />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
