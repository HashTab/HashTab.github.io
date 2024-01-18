import { motion } from "framer-motion";
import styles from "../../styles/styles";

const AboutMePromo = () => {
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
          Про мене
        </motion.h2>
      </div>

      <p className={`${styles.text} mt-6`}>
        Привіт!, я молодий та амбітний фронтенд розробник з декількома місяцями
        досвіду розробки пет проектів.
      </p>
      <p className={`${styles.text} mt-4`}>
        Моя мета - реалізація творчих та ефективних рішень для веб-інтерфейсів з
        метою створення найкращого користувацького досвіду. Я активно працюю над
        практичними вправами та проектами, щоб вдосконалити свої навички у
        створенні захопливих користувацьких інтерфейсів. Я працював з різними
        технологіями фронтенду, включаючи HTML, CSS та JavaScript, для створення
        адаптивних та візуально привабливих веб-додатків.
      </p>
    </div>
  );
};

export default AboutMePromo;
