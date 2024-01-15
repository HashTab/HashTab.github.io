import { BiLogoTelegram, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const links = [
  { icon: <BiLogoGithub />, link: "https://github.com/HashTab" },
  { icon: <BiLogoTelegram />, link: "https://t.me/Vadzhym" },
  {
    icon: <BiLogoLinkedin />,
    link: "https://www.linkedin.com/in/vadim-dzhyma-0151172a6",
  },
];

const Contacts = () => {
  return (
    <div
      className={`text-white text-2xl p-8 fixed md:top-0 md:bottom-auto left-0 bottom-[-30px] top-auto z-40`}
    >
      <ul className="flex gap-3 p-4">
        {links.map(({ icon, link }, index) => {
          return (
            <li key={index} className="hover:text-main-orange duration-300">
              <a href={link} target="_blank">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
