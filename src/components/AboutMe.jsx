import { motion } from "framer-motion";
import styles from "../styles/styles";

const AboutMe = () => {
  return (
    <div className={`${styles.aboutWrapper} relative z-20 lg:mt-0 mt-12`}>
      <div className="w-full outline outline-white bg-main-black">
        <motion.h2
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`${styles.header2}`}
        >
          About me
        </motion.h2>
      </div>

      <p className={`${styles.text} mt-6`}>
        Hello! My name is{" "}
        <span className=" text-main-orange">Vadim Dzhyma</span>, and I am a
        young and ambitious front-end developer with a few months of experience
        in developing pet projects.
      </p>
      <p className={`${styles.text} mt-4`}>
        My goal is to implement creative and effective solutions for web
        interfaces to create the best user experience. Able to effectively
        self-manage during independent projects, as well as collaborate in a
        team setting.
      </p>
    </div>
  );
};

export default AboutMe;
