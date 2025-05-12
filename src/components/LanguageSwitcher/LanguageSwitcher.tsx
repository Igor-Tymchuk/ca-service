import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store.ts";
import { setLanguage, setAnimating } from "../../redux/language/slice.ts";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import s from "./LanguageSwitcher.module.css";
import { selectLang } from "../../redux/language/selectors.ts";

const LanguageSwitcher = () => {
  const dispatch: AppDispatch = useDispatch();
  const { lang, isAnimating } = useSelector(selectLang);

  const changeLanguage = (newLang: "ua" | "en") => {
    if (lang === newLang) return;
    const bodyElement = document.body;
    bodyElement.classList.remove("fadeIn");
    bodyElement.classList.add("animating");
    dispatch(setAnimating(true));
    setTimeout(() => {
      dispatch(setLanguage(newLang));
      dispatch(setAnimating(false));
    }, 250);
    setTimeout(() => {
      bodyElement.classList.remove("animating");
      bodyElement.classList.add("fadeIn");
    }, 250);
  };

  const { t } = useTranslation();
  return (
    <div className={s.box}>
      <span className={clsx({ fadeIn: !isAnimating, animating: isAnimating })}>
        {t("language")}
      </span>
      <button
        className={clsx(s.lang, {
          [s.active]: lang === "ua",
        })}
        onClick={() => {
          changeLanguage("ua");
        }}
      >
        <img src="/icons/ua.png" alt="UA Flag" />
      </button>
      <button
        className={clsx(s.lang, {
          [s.active]: lang === "en",
        })}
        onClick={() => {
          changeLanguage("en");
        }}
      >
        <img src="/icons/en.png" alt="EN Flag" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
