import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/styles";
import { PROJECTS } from "../data/projects";
import { SKILLS } from "../data/skills";
import { SkillsItem } from "./Skills";
import { TbExternalLink, TbBrandGithub } from "react-icons/tb";

const ProjectCard = ({ isVisible, projectTitle }) => {
  const projectArray = PROJECTS.filter(
    (project) => project.title === projectTitle
  );

  const project = projectArray[0];

  if (projectArray.length > 0) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={projectTitle}
            initial={{ translateY: 1000, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: -1000, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`${styles.aboutWrapper} items-end justify-end absolute`}
          >
            <div className="w-full  outline outline-white bg-main-black z-20">
              <motion.h2
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${styles.header2}`}
              >
                <a
                  href={project.linkDemo}
                  className={`${styles.link} justify-end`}
                  target="_blank"
                >
                  {project.title}
                </a>
              </motion.h2>
            </div>
            <p className={`${styles.text} mt-4 text-right`}>
              {project.description}
            </p>
            <div className="flex gap-4 mt-12 py-2">
              {project.skillsTitle.map((skillTitle, index) => {
                const skill = SKILLS.find((s) => s.title === skillTitle);
                if (skill) {
                  return <SkillsItem {...skill} key={index} />;
                } else {
                  return (
                    <p className="text-white">{`Skill ${skillTitle} Not Found`}</p>
                  );
                }
              })}
            </div>
            <div className="w-full h-[2px] bg-white"></div>
            <div
              className={`flex w-full justify-between gap-4 mt-3 ${styles.text}`}
            >
              <a
                href={project.linkDemo}
                className={`${styles.link}`}
                target="_blank"
              >
                Live Demo <TbExternalLink />
              </a>
              <a
                href={project.linkGitHub}
                className={`${styles.link}`}
                target="_blank"
              >
                Github <TbBrandGithub />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return <p className="text-white">{`Project ${projectTitle} Not Found`}</p>;
  }
};

export default ProjectCard;
