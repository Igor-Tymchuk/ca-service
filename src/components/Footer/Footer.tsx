import clsx from "clsx";
import Logo from "../Logo/Logo.tsx";
import s from "./Footer.module.css";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="section">
      <div className={clsx("container", s.container)}>
        <Logo />
        <SocialLinks />
        <p>{t("copyright")} &copy; 2025</p>
      </div>
    </footer>
  );
};
export default Footer;
