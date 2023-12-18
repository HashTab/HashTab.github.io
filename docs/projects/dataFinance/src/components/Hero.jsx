import Typed from "react-typed";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white flex justify-center">
      <div className="max-w-[800px] mt-[96px] w-full h-screen text-center flex flex-col justify-center">
        <p className="text-[#00df9a] uppercase font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <Button text="Get Started" style="primary" />
      </div>
    </div>
  );
};

export default Hero;
