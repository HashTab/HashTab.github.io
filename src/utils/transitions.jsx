import { motion } from "framer-motion";
import styles from "../styles/styles";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className={`${styles.slide} origin-right`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={`${styles.slide} origin-left`}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;
