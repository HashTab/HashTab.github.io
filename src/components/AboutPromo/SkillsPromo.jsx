import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/styles";
import { SKILLS } from "../../data/skills";
import { SkillsItem } from "../Skills";

const SkillsPromo = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={"language"}
          initial={{ translateY: 1000, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: -1000, opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`${styles.aboutWrapper} absolute`}
        >
          <div className="w-full outline outline-white bg-main-black z-20">
            <motion.h2
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.header2} text-right`}
            >
              Навички
            </motion.h2>
          </div>
          <div className="flex gap-x-4 gap-y-2 flex-wrap justify-end mt-6">
            {SKILLS.map((skill, index) => (
              <SkillsItem key={index} {...skill} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillsPromo;
