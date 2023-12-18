import FooterItem from "./FooterItem";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { footerItems } from "../data/footerItems";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quasi neque labore nihil perspiciatis nobis, quia maxime illum
          possimus a! Aliquam, dolore voluptatibus sit atque aspernatur nobis.
          Consectetur, saepe nesciunt?
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaFacebookSquare
            size={30}
            className="cursor-pointer hover:text-[#00df9a]  duration-300"
          />
          <FaInstagram
            size={30}
            className="cursor-pointer hover:text-[#00df9a] duration-300"
          />
          <FaTwitterSquare
            size={30}
            className="cursor-pointer hover:text-[#00df9a] duration-300"
          />
          <FaFacebookSquare
            size={30}
            className="cursor-pointer hover:text-[#00df9a] duration-300"
          />
          <FaGithubSquare
            size={30}
            className="cursor-pointer hover:text-[#00df9a] duration-300"
          />
          <FaDribbbleSquare
            size={30}
            className="cursor-pointer hover:text-[#00df9a] duration-300"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        {footerItems.map((item) => {
          return (
            <FooterItem
              title={item.title}
              items={item.items}
              key={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
