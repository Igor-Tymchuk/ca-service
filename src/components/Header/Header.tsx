import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.tsx";
import Logo from "../Logo/Logo.tsx";
import s from "./Header.module.css";
import clsx from "clsx";
import ChangeTheme from "../ChangeTheme/ChangeTheme.tsx";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className={clsx("section", s.header)}>
      <div className={clsx("container", s.headerContainer)}>
        <Logo />
        <div className={s.navBox}>
          <nav className={s.navList}>
            <a className="button" href="#about-me">
              {t("about_me")}
            </a>
            <a className="button" href="#my-projects">
              {t("my_projects")}
            </a>
            <a className="button" href="#contacts">
              {t("my_contacts")}
            </a>
          </nav>
        </div>{" "}
        <div className={s.settings}>
          <ChangeTheme />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
export default Header;
