import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/styles";

const Education = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={"education"}
          initial={{ translateY: 1000, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: -1000, opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`${styles.aboutWrapper} items-end justify-end absolute`}
        >
          <div className="w-full outline outline-white bg-main-black z-20">
            <motion.h2
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${styles.header2} text-right`}
            >
              Education
            </motion.h2>
          </div>
          <p className={`${styles.text} mt-4 text-right`}>
            2020-2024{" "}
            <span className="font-bold text-main-orange text-right">
              Bachelor of Software Engineering
            </span>
          </p>
          <p className={`${styles.text} ml-[112px] text-right`}>
            National Aviation University
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Education;
