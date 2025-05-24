"use client"

import { useTranslation } from "react-i18next"
import styles from "./Hero.module.css"

const Hero = ({ openContactModal }) => {
  const { t } = useTranslation()

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>CA Serwis</h1>
        <p className={styles.slogan}>{t("hero.slogan")}</p>
        <div className={styles.buttons}>
          <button onClick={openContactModal} className={styles.primaryBtn}>
            {t("hero.appointment")}
          </button>
          <a href="tel:780528471" className={styles.secondaryBtn}>
            {t("hero.call")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
