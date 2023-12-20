import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

const Counter = ({ from, to, textBefore, textAfter }) => {
  const ref = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        ref.current.textContent =
          textBefore + Number(value).toFixed(0) + textAfter;
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} />;
};

export default Counter;
