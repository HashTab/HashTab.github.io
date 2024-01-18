import transition from "../../utils/transitions";
import AnimatedBackground from "../AnimatedBackground";
import Education from "../Education";
import AboutMe from "../AboutMe";
import styles from "../../styles/styles";
import Language from "../Language";
import Skills from "../Skills";
import AboutMePromo from "./AboutMePromo";
import EducationPromo from "./EducationPromo";
import LanguagePromo from "./LanguagePromo";
import SkillsPromo from "./SkillsPromo";

const links = ["Skills", "Education", "Language"];

const AboutPromo = () => {
  return (
    <section className="relative">
      <AnimatedBackground />
      <div
        className={`${styles.containerScreenCol} relative gap-4 max-w-[1150px]`}
      >
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
        <div className="w-full h-auto">
          <h1 className="text-4xl text-white p-4 leading-[0px]">Вадим Джима</h1>
          <h2 className="text-2xl text-white p-4">Фронтенд розробник</h2>
        </div>
        <div className="w-full h-full flex mobile:flex-row flex-col-reverse xl:items-end items-center xl:justify-end justify-start relative">
          <div className="w-[50%] h-full">
            <AboutMePromo />
          </div>
          <div className="w-[50%] h-full relative">
            <EducationPromo isVisible={true} />
          </div>
        </div>

        <div className="w-full h-full flex mobile:flex-row flex-col-reverse xl:items-end items-center xl:justify-end justify-start relative">
          <div className="w-[50%] h-full relative">
            <LanguagePromo isVisible={true} />
          </div>
          <div className="w-[50%] h-full relative">
            <SkillsPromo isVisible={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(AboutPromo);
