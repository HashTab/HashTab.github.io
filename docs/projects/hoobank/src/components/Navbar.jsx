import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[124px] h-[32px]" src="./img/logo.svg" alt="hoobank" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? "./img/close.svg" : "./img/menu.svg"}
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6 sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-10"
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
