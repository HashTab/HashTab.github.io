import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/styles";

const Language = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={"language"}
          initial={{ translateY: 1000, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: -1000, opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`${styles.aboutWrapper} justify-end absolute`}
        >
          <div className="w-full outline outline-white bg-main-black z-20">
            <motion.h2
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.header2} text-right`}
            >
              Language
            </motion.h2>
          </div>
          <div className="flex flex-row items-end gap-4 mt-6">
            <p className={`${styles.text} w-32`}>English</p>
            <div className="w-full  relative flex justify-between gap-2">
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[40%] bg-main-orange z-20 block origin-left"
              ></motion.span>
              <p className={`${styles.text}`}>40%</p>
            </div>
          </div>
          <div className="flex flex-row items-end gap-4 mt-6">
            <p className={`${styles.text} w-32`}>Ukrainian</p>
            <div className="w-full relative flex justify-between gap-2">
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[100%] bg-main-orange z-20 block origin-left"
              ></motion.span>
              <p className={`${styles.text}`}>100%</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Language;
