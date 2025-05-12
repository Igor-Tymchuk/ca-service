import s from "./AboutMe.module.css";
import photo from "../../images/photo.webp";
import clsx from "clsx";
import ITTimeCounter from "../ITTimeCounter/ITTimeCounter.tsx";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={clsx("section", s.about)} id="about-me">
      <div className={clsx("container", s.container)}>
        <h2 className={s.title}>{t("about_me")}</h2>
        <div className={s.content}>
          <div className={s.textBlock}>
            <p>{t("about_me_desc")}</p>
            <p>{t("about_myself")}</p>
            <ITTimeCounter />
            <div className={s.chart}>
              <img
                src="https://ghchart.rshah.org/Igor-Tymchuk"
                alt="GitHub chart"
                width={663}
                height={104}
              />
            </div>
          </div>
          <img
            src={photo}
            className={s.img}
            alt="Igor Tymchuk Developer Photo"
            width={380}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
