import styles, { layout } from "../style";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CardDeal = () => {
  const cardDealCtrl = useAnimation();
  const buttonCtrl = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animationSequence = async () => {
    await cardDealCtrl.start({ x: 0, opacity: 1 });
    return await buttonCtrl.start({ scale: [1.5, 1], opacity: 1 });
  };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section className={layout.section}>
      <motion.div ref={ref} className={layout.sectionInfo}>
        <motion.h2
          initial={{ x: -500, opacity: 0 }}
          animate={cardDealCtrl}
          transition={{
            duration: 1.2,
          }}
          className={styles.heading2}
        >
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </motion.h2>
        <motion.p
          initial={{ x: -500, opacity: 0 }}
          animate={cardDealCtrl}
          transition={{
            duration: 1.2,
            delay: 0.5,
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={buttonCtrl}
          transition={{
            duration: 1.2,
          }}
        >
          <Button styles="mt-10" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={cardDealCtrl}
        transition={{
          duration: 1.2,
        }}
        className={layout.sectionImg}
      >
        <img src="./img/card.png" alt="card" className="w-[100%] h-[100%]" />
      </motion.div>
    </section>
  );
};

export default CardDeal;
