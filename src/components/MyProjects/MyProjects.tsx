import { MyProject } from "../../assets/myProjects.ts";
import s from "./MyProjects.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface MyProjectsProps {
  myProjects: MyProject[];
}

const MyProjects: React.FC<MyProjectsProps> = ({ myProjects }) => {
  const [visibleProjects, setVisibleProjects] = useState<number>(2);
  const lastItemRef = useRef<HTMLLIElement | null>(null);
  const reverseProjects = myProjects.slice().reverse();
  const { t } = useTranslation();

  const addItem = () => {
    if (visibleProjects < reverseProjects.length) {
      setVisibleProjects((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (visibleProjects === 2) return;
    if (lastItemRef.current) {
      const rect = lastItemRef.current.getBoundingClientRect();
      const offset = window.innerHeight / 2 - rect.height / 2;
      window.scrollTo({
        top: window.scrollY + rect.top - offset,
        behavior: "smooth",
      });
    }
  }, [visibleProjects]);
  return (
    <div className={clsx("section", s.projects)} id="my-projects">
      <div className={clsx("container", s.container)}>
        <h2 className={s.title}>{t("my_projects")}</h2>
        <ul className={s.list}>
          {reverseProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.li
              ref={index === visibleProjects - 1 ? lastItemRef : null}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              key={index + 1}
              className={s.project}
            >
              <div className={s.textBlock}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.urlGit} className="button" target="_blank">
                  {t("view_gh_btn")}
                </a>
              </div>
              <div className={s.imgBlock}>
                <img src={project.img} alt={project.title} />
                <a
                  href={project.urlLive}
                  className={clsx("button", s.button)}
                  target="_blank"
                >
                  {t("live_btn")}
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
        {visibleProjects !== reverseProjects.length && (
          <button onClick={addItem} className="button">
            {t("show_more_btn")}
          </button>
        )}
      </div>
    </div>
  );
};
export default MyProjects;
