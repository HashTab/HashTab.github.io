import transition from "../utils/transitions";
import Contacts from "./Contacts";
import AnimatedBackground from "./AnimatedBackground";
import Education from "./Education";
import AboutMe from "./AboutMe";
import styles from "../styles/styles";
import Language from "./Language";
import { useState } from "react";
import Skills from "./Skills";
import Versions from "./Versions";
import Navbar from "./Navbar";

const links = ["Skills", "Education", "Language"];

const About = () => {
  const [activeComponent, setActiveComponent] = useState("Skills");
  const handleItemClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <section className="relative">
      <Navbar isVisible={true} />
      <AnimatedBackground />
      <div className={`${styles.containerScreenCol} relative gap-4`}>
        <code className="whitespace-pre text-[#212121] absolute left-0 top-[60%] pl-16">{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>About me</title>
  </head>
  <body>
    <div">About me background</div>
  </body>
</html>`}</code>
        <code className="whitespace-pre text-[#212121] absolute right-0 lg:top-[10%] top-[20%] pr-16">{`
export const SKILLS = [
  { title: "Html 5", icon: <TbBrandHtml5 /> },
  { title: "Css 3", icon: <TbBrandCss3 /> },
  { title: "Java Script", icon: <TbBrandJavascript /> },
  { title: "Sass/Scss", icon: <TbBrandSass /> },
  { title: "Tailwind", icon: <TbBrandTailwind /> },
  { title: "Bootstrap", icon: <TbBrandBootstrap /> },
  { title: "Gulp", icon: <DiGulp /> },
  { title: "Git", icon: <TbBrandGit /> },
  { title: "React", icon: <TbBrandReact /> },
  { title: "Redux", icon: <TbBrandRedux /> },
  { title: "Framer Motion", icon: <TbBrandFramer /> },
];`}</code>
        <div className="lg:w-[50%] w-full h-full">
          <AboutMe />
        </div>
        <div className="w-full h-full flex mobile:flex-row flex-col-reverse xl:items-end items-center xl:justify-end justify-start relative">
          <ul className="md:w-full min-w-[120px] w-auto h-full flex mobile:flex-col flex-row mobile:gap-0 gap-2 justify-center mobile:items-end items-center p-4">
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
          <div className="w-full min-h-[250px] h-full relative flex items-center">
            <Education
              isVisible={activeComponent === "Education" ? true : false}
            />
            <Language
              isVisible={activeComponent === "Language" ? true : false}
            />
            <Skills isVisible={activeComponent === "Skills" ? true : false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(About);
