import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const NavHandler = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleClickOutside = (event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      nav &&
      event.target.id !== "navbar-toggle"
    ) {
      setNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nav]);

  return (
    <div
      ref={navRef}
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex uppercase">
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Company</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Resources</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">About</li>
        <li className="p-4 hover:text-[#00df9a] cursor-pointer">Contact</li>
      </ul>
      <div
        id="navbar-toggle"
        onClick={NavHandler}
        className="block md:hidden cursor-pointer"
      >
        {nav ? (
          <AiOutlineClose id="navbar-toggle" size={20} />
        ) : (
          <AiOutlineMenu id="navbar-toggle" size={20} />
        )}
      </div>
      <div
        className={
          "top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 " +
          (nav ? "fixed left-0" : "fixed left-[-100%]")
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
            About
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
