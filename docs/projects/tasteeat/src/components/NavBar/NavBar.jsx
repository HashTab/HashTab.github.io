import SocialLinks from "../SocialLinks/SocialLinks";
import Link from "./Link/Link";
import { Squash as Hamburger } from "hamburger-react";
import { links } from "../../data/links";
import SideNavBar from "./LeftNavBar/SideNavBar";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const breakpoints = {
    mobile: 1024,
  };

  const [resolution, setResolution] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setResolution(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.NavBar}>
      <div className="Container">
        <div className={styles.Wrapper}>
          {!(resolution < breakpoints.mobile) ? (
            <ul className={styles.links}>
              {links.map((link) => {
                return (
                  <Link link={link.link} title={link.title} key={link.title} />
                );
              })}
            </ul>
          ) : (
            <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
          )}
          {isOpen && resolution < breakpoints.mobile ? <SideNavBar /> : null}
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
