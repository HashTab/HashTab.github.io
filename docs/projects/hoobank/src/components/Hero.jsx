import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GetStarted from "./GetStarted";
import styles from "../style";

const Hero = () => {
  const discountDivControl = useAnimation();
  const headingCtrl = useAnimation();
  const buttonCtrl = useAnimation();

  const animationSequence = async () => {
    await headingCtrl.start({ x: 0, opacity: 1 });
    await discountDivControl.start({ opacity: 1, scale: 1 });
    return await buttonCtrl.start({ opacity: 1, scale: [1.5, 1, 1.3, 1] });
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
    if (!inView) {
      console.log("Hero not in view");
    }
  }, [inView]);
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      ref={ref}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={discountDivControl}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img
            src="./img/Discount.svg"
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For <span className="text-white">1 Month </span>
            Account
          </p>
        </motion.div>
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <motion.h1
              initial={{ x: -500, opacity: 0 }}
              animate={headingCtrl}
              transition={{
                duration: 0.8,
              }}
              className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]"
            >
              The Next <br className="sm:block hidden" />
            </motion.h1>
            <motion.h1
              initial={{ x: -500, opacity: 0 }}
              animate={headingCtrl}
              transition={{
                duration: 1,
              }}
              className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-gradient"
            >
              Generation
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={buttonCtrl}
            transition={{
              duration: 0.8,
              damping: 3,
              type: "spring",
            }}
            className="ss:flex hidden md:mr-4 mr-0"
          >
            <GetStarted />
          </motion.div>
        </div>
        <motion.h1
          initial={{ x: -500, opacity: 0 }}
          animate={headingCtrl}
          transition={{
            duration: 1.2,
          }}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
        >
          Payment Method.
        </motion.h1>
        <motion.p
          initial={{ x: -500, opacity: 0 }}
          animate={headingCtrl}
          transition={{
            duration: 1.4,
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </motion.p>
      </div>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={headingCtrl}
        transition={{
          duration: 1.4,
        }}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src="./img/robot.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </motion.div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
