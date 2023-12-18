import CardItem from "./CardItem";
import { cardItems } from "../data/cardItems";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardItems.map((item, index) => {
          return <CardItem {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
