import clsx from "clsx";
import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import SplashCursor from "../SplashCursor/SplashCursor.tsx";
import { useState } from "react";
import Atom from "../Atom/Atom.tsx";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [magicCursor, setMagicCursor] = useState<boolean>(false);

  const switchCursor = (): void => {
    setMagicCursor(!magicCursor);
  };

  return (
    <div className={clsx("section", s.hero)}>
      {magicCursor && <SplashCursor />}
      <div className={clsx("container", s.container)}>
        <Atom />
        <div>
          <h1 className={s.title}>
            <p>TYMCHUK</p> FULLSTACK DEVELOPER
          </h1>
          <h3 className={s.description}>{t("hero_desc")}</h3>
          <button className={clsx(s.heroBtn)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {t("contact_me")}
          </button>
          <button
            className={clsx(s.button, magicCursor && s.magic)}
            onClick={(e) => {
              switchCursor();
              e.currentTarget.blur();
            }}
          >
            <span>{t("magic")}</span>
            <div className={s.liquid}></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
