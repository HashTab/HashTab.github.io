import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src="/img/logo.svg" alt="Stuff" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a href="" target="_blank" rel="noreferrer">
          Hashtab
        </a>
      </div>
      <div className={styles.socials}>
        <a href="" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="/img/sprite.svg#instagram" />
          </svg>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="/img/sprite.svg#facebook" />
          </svg>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="/img/sprite.svg#youtube" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
