import Button from "./Button";
import { useState } from "react";

const CardItem = ({ icon, title, price, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 hover:bg-gray-100 duration-300 cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={icon}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{description[0]}</p>
        <p className="py-2 border-b mx-8">{description[1]}</p>
        <p className="py-2 border-b mx-8">{description[2]}</p>
      </div>
      <Button text="Start Trial" style={isHovered ? "black" : "primary"} />
    </div>
  );
};

export default CardItem;
