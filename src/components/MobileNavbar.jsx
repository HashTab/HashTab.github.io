import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useRef } from "react";
import useDimensions from "react-use-dimensions";
import { NavLink } from "react-router-dom";
import styles from "../styles/styles";

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNavbar = ({ LINKS }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute top-0 left-0 right-0 h-[75px] z-50 overflow-hidden flex flex-row justify-end`}
    >
      <motion.div
        variants={sidebar}
        className="absolute top-0 left-0 right-0 h-[100px] bg-main-black"
      />
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.ul
        variants={variantsUl}
        className="flex flex-row justify-end items-end gap-4 absolute top-[10px] p-4"
      >
        {LINKS.map(({ title, link }, index) => {
          return (
            <motion.li
              variants={variantsLi}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={link}
                className={({ isActive }) =>
                  `text-gray-500 ${isActive && "text-xl text-white"} `
                }
                key={index}
              >
                {title}
              </NavLink>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};

export default MobileNavbar;
