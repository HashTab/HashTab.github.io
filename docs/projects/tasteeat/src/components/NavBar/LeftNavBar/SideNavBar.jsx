import Link from "../Link/Link";
import { links } from "../../../data/links";
import styles from "./SideNavBar.module.scss";

const SideNavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.Wrapper}>
        <ul className={styles.links}>
          {links.map((link) => {
            return (
              <Link link={link.link} title={link.title} key={link.title} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavBar;
