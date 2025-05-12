import { FaTelegramPlane } from "react-icons/fa";
import s from "./SocialLinks.module.css";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import clsx from "clsx";

const SocialLinks: React.FC = () => {
  return (
    <div className={s.box}>
      <ul className={s.list}>
        <li className={s.item}>
          <a
            href=""
            className={clsx(s.link, s.linkedin)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i>
              <FaLinkedinIn className={s.icon} />
            </i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li className={s.item}>
          <a
            href=""
            className={clsx(s.link, s.github)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i>
              <FaGithub className={s.icon} />
            </i>
            <span>GitHub</span>
          </a>
        </li>
        <li className={s.item}>
          <a
            href=""
            className={clsx(s.link, s.telegram)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i>
              <FaTelegramPlane className={s.icon} />
            </i>
            <span>Telegram</span>
          </a>
        </li>
        <li className={s.item}>
          <a
            href=""
            className={clsx(s.link, s.facebook)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i>
              <FaFacebookF className={s.icon} />
            </i>
            <span>FaceBook</span>
          </a>
        </li>
        <li className={s.item}>
          <a
            href=""
            className={clsx(s.link, s.gmail)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i>
              <SiGmail className={s.icon} />
            </i>
            <span>GMail</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialLinks;
