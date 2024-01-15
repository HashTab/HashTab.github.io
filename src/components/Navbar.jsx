import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/styles";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const LINKS = [
  { title: "Me", link: "/" },
  { title: "About", link: "/about" },
  { title: "Projects", link: "/projects" },
];

const variants = {
  initialRight: { x: 250, opacity: 0 },
  initialLeft: { x: -250, opacity: 0 },
  animateRight: { x: -50, opacity: 1, scaleX: 1 },
  animateLeft: { x: 50, opacity: 1, scaleX: -1 },
};
const Navbar = ({ isVisible }) => {
  const location = useLocation();
  const [isOtherSidePage, setIsOtherSidePage] = useState(
    location.pathname === "/about"
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    setIsOtherSidePage(location.pathname === "/about");
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && isMobile && <MobileNavbar LINKS={LINKS} />}
      {isVisible && !isMobile && (
        <motion.nav
          initial={isOtherSidePage ? "initialLeft" : "initialRight"}
          animate={isOtherSidePage ? "animateLeft" : "animateRight"}
          exit={isOtherSidePage ? "initialLeft" : "initialRight"}
          variants={variants}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 h-full w-[100px] z-40 transition-all duration-500 ${
            isOtherSidePage ? "left-[-100px]" : "right-[-100px]"
          }`}
        >
          <div className="flex flex-col justify-center items-start h-full text-white">
            {LINKS.map(({ title, link }, index) => {
              return (
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive && styles.activeNavLink} ${
                      isOtherSidePage ? "scale-y-[-1]" : ""
                    } rotated`
                  }
                  key={index}
                >
                  {title}
                </NavLink>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
