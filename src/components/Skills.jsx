import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/styles";
import { SKILLS } from "../data/skills.jsx";

export const SkillsItem = ({ title, icon }) => {
  return (
    <div className="text-white rounded-3xl flex md:text-xl text-[16px] items-center hover:scale-110 duration-300">
      <h3>{title}</h3>
      <motion.div
        initial={{ scaleY: 0, scaleX: 0, opacity: 0 }}
        animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
        exit={{ scaleY: 0, scaleX: 0, opacity: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="md:text-3xl text-2xl p-1 text-main-orange "
      >
        {icon}
      </motion.div>
    </div>
  );
};

const Skills = ({ isVisible }) => {
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
              Skills
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

export default Skills;
