import clsx from "clsx";
import s from "./Contacts.module.css";
import Location from "../Location/Location.tsx";
import { FaDownload, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={clsx("section", s.contacts)} id="contacts">
      <div className={clsx("container", s.container)}>
        <h2>{t("my_contacts")}</h2>
        <div className={s.content}>
          <div className={s.info}>
            <ul>
              <li className={s.item}>
                <p>
                  <SiGmail className={s.icon} />
                  {t("email")}
                </p>
                <a
                  href="mailto:tymchuk.developer@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tymchuk.developer@gmail.com
                </a>
              </li>
              <li className={s.item}>
                <p>
                  <FaPhoneAlt className={s.icon} />
                  {t("phone")}
                </p>
                <a
                  href="tel:+380961312245"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +38 (096) 131-22-45
                </a>
              </li>
              <li className={s.item}>
                <p>
                  <FaLinkedinIn className={s.icon} />
                  LinkedIn:
                </p>
                <a
                  href="https://www.linkedin.com/in/ihor-tymchuk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/ihor-tymchuk
                </a>
              </li>
              <li className={s.item}>
                <p>
                  <FaTelegramPlane className={s.icon} />
                  Telegram:
                </p>
                <a
                  href="https://t.me/Tymchuk_Developer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Tymchuk_Developer
                </a>
              </li>
              <li className={s.item}>
                <p>
                  <FaGithub className={s.icon} />
                  GitHub:
                </p>
                <a
                  href="https://github.com/Igor-Tymchuk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Igor-Tymchuk
                </a>
              </li>
            </ul>
          </div>
          <Location />
        </div>
        <div className={s.resume}>
          <span>{t("get_my_resume")}</span>
          <button className="button">
            <FaDownload className={s.icon} />
            {t("download")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
