import { useTranslation } from "react-i18next"
import styles from "./Footer.module.css"

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="CA Serwis" />
        </div>
        <div className={styles.copyright}>
          <p>
            &copy; {currentYear} CA Serwis. {t("footer.rights")}
          </p>
        </div>
        <div className={styles.links}>
          <a href="#">{t("footer.privacy")}</a>
          <a href="#">{t("footer.terms")}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
