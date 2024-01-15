import transition from "../utils/transitions";
import Contacts from "./Contacts";
import AnimatedBackground from "./AnimatedBackground";
import styles from "../styles/styles";
import { useState } from "react";
import ProjectCard from "./PojectCard";
import Versions from "./Versions";
import Navbar from "./Navbar";

const links = [
  "Web-Store",
  "HooBank",
  "TasteEat",
  "Data Finance",
  "Weather App",
  "2048",
  "Tarla",
  "Freedom Studio",
];

const Projects = () => {
  const [activeComponent, setActiveComponent] = useState("Web-Store");
  const [isVisible, setIsVisible] = useState(true);

  const handleItemClick = (componentName) => {
    setIsVisible(false);
    setActiveComponent(componentName);
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };
  return (
    <section className="overflow-hidden">
      <Navbar isVisible={true} />
      <AnimatedBackground />
      <div className={`${styles.containerScreenRow} `}>
        <div className="md:w-[50%] h-[70%] relative flex justify-center items-center">
          <ProjectCard isVisible={isVisible} projectTitle={activeComponent} />
        </div>
        <div className="md:w-[200px] p-4 relative z-30">
          <ul className="flex md:flex-col flex-wrap gap-2">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`transition-all duration-300 cursor-pointer leading-8 ${
                    activeComponent === link
                      ? "text-xl text-white"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleItemClick(link)}
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default transition(Projects);
