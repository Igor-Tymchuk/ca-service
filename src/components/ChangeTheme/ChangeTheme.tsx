import { useTranslation } from "react-i18next";
import s from "./ChangeTheme.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/theme/selectors.ts";
import { setTheme, ThemeState } from "../../redux/theme/slice.ts";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store.ts";

const ChangeTheme: React.FC = () => {
  const { t } = useTranslation();
  const theme = useSelector<RootState, ThemeState>(selectTheme);
  const dispatch = useDispatch();
  const changeTheme = (): void => {
    const newTheme = theme.theme === "light" ? "dark" : "light";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${newTheme}-theme`);
    dispatch(setTheme(newTheme));
  };

  return (
    <div className={s.themeBox}>
      {t("theme")}:
      <label className={s.label}>
        <input
          type="checkbox"
          onChange={changeTheme}
          checked={theme.theme === "dark"}
        />
        <span>
          <span className={s.dot}>
            {theme.theme === "light" ? t("light") : t("dark")}
          </span>
        </span>
      </label>
    </div>
  );
};
export default ChangeTheme;
