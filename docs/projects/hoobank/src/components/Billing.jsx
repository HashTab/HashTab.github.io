import styles, { layout } from "../style";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Billing = () => {
  const billingCtrl = useAnimation();
  const buttonCtrl = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animationSequence = async () => {
    await billingCtrl.start({ x: 0, opacity: 1 });
    return await buttonCtrl.start({ scale: [1.5, 1], opacity: 1 });
  };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section id="product" className={layout.sectionReverse}>
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        animate={billingCtrl}
        transition={{
          duration: 1.2,
        }}
        className={layout.sectionImgReverse}
      >
        <img
          src="./img/bill.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </motion.div>
      <motion.div ref={ref} className={layout.sectionInfo}>
        <motion.h2
          initial={{ x: 500, opacity: 0 }}
          animate={billingCtrl}
          transition={{
            duration: 1.2,
          }}
          className={styles.heading2}
        >
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </motion.h2>
        <motion.p
          initial={{ x: 500, opacity: 0 }}
          animate={billingCtrl}
          transition={{
            duration: 1.2,
            delay: 0.5,
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </motion.p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={buttonCtrl}
            transition={{
              duration: 1.2,
            }}
          >
            <img
              src="./img/apple.svg"
              alt="apple"
              className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={buttonCtrl}
            transition={{
              duration: 1.2,
            }}
          >
            <img
              src="./img/google.svg"
              alt="google"
              className="w-[128px] h-[42px] object-contain cursor-pointer"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Billing;
