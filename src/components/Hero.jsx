import WAVES from "vanta/dist/vanta.waves.min.js";
import { useEffect, useRef, useState } from "react";
import transition from "../utils/transitions";
import Contacts from "./Contacts";
import ReactTyped from "react-typed";
import Versions from "./Versions";
import Navbar from "./Navbar";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 20.0,
          waveHeight: 20.0,
          waveSpeed: 0.6,
          zoom: 0.9,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="bg h-screen w-[100%]" id="vanta" ref={myRef}>
      <section className="flex justify-center">
        <Navbar isVisible={true} />
        <div className="w-[1280px] h-screen p-8 flex flex-col justify-center">
          <h1 className="md:text-9xl text-6xl text-white uppercase font-bebas">
            Vadim dzhyma
          </h1>

          <p className="md:text-5xl text-3xl text-white md:ml-3 ml-1">
            Frontend{" "}
            <ReactTyped
              strings={["Developer"]}
              typeSpeed={120}
              backSpeed={220}
              loop
            />
          </p>
        </div>
      </section>
    </div>
  );
};

export default transition(Hero);
