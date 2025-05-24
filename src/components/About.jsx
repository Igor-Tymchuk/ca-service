import { useTranslation } from "react-i18next"
import styles from "./About.module.css"

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>{t("about.title")}</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>{t("about.description")}</p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.number}>15+</span>
                <span className={styles.label}>{t("about.experience")}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>1000+</span>
                <span className={styles.label}>{t("about.clients")}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.number}>100%</span>
                <span className={styles.label}>{t("about.quality")}</span>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/images/workshop.jpg" alt="CA Serwis workshop" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
