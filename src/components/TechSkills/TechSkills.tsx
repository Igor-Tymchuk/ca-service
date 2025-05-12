import Marquee from "react-fast-marquee";
import s from "./TechSkills.module.css";
import { Item } from "../../assets/techSkills.ts";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface TechSkills {
  base: Item[];
  additional: Item[];
}

const TechSkills: React.FC<TechSkills> = ({ base, additional }) => {
  const { t } = useTranslation();
  return (
    <div className={clsx("section", s.section)}>
      <h2 className={s.title}>{t("soft_skills")}</h2>
      <ul className={clsx("container", s.list)}>
        <li>{t("soft1")}</li>
        <li>{t("soft2")}</li>
        <li>{t("soft3")}</li>
        <li>{t("soft4")}</li>
        <li>{t("soft5")}</li>
        <li>{t("soft6")}</li>
        <li>{t("soft7")}</li>
        <li>{t("soft8")}</li>
      </ul>

      <h2 className={s.title}>{t("tech_skills")}</h2>
      <Marquee speed={50} pauseOnHover className={s.marquee}>
        {base.map((item, index) => (
          <div key={index} className={s.subBox1}>
            <img src={item.img} alt={item.title} width="80" className={s.img} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} pauseOnHover direction="right" className={s.marquee}>
        {additional.map((item, index) => (
          <div key={index} className={clsx(s.subBox1, s.subBox2)}>
            <img src={item.img} alt={item.title} width="80" className={s.img} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default TechSkills;
