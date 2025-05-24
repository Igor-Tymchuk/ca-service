"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Header.module.css"

const Header = ({ openContactModal }) => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#hero">
            <img src="/images/logo.png" alt="CA Serwis" />
          </a>
        </div>

        <div className={styles.mobileMenuButton} onClick={toggleMenu}>
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li>
              <a href="#hero" onClick={closeMenu}>
                {t("header.home")}
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                {t("header.about")}
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                {t("header.services")}
              </a>
            </li>
            <li>
              <a href="#advantages" onClick={closeMenu}>
                {t("header.advantages")}
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={closeMenu}>
                {t("header.gallery")}
              </a>
            </li>
            <li>
              <button
                className={styles.contactButton}
                onClick={() => {
                  openContactModal()
                  closeMenu()
                }}
              >
                {t("header.contact")}
              </button>
            </li>
          </ul>

          <div className={styles.langSwitcher}>
            <button onClick={() => changeLanguage("pl")} className={i18n.language === "pl" ? styles.active : ""}>
              PL
            </button>
            <button onClick={() => changeLanguage("en")} className={i18n.language === "en" ? styles.active : ""}>
              EN
            </button>
            <button onClick={() => changeLanguage("de")} className={i18n.language === "de" ? styles.active : ""}>
              DE
            </button>
            <button onClick={() => changeLanguage("ua")} className={i18n.language === "ua" ? styles.active : ""}>
              UA
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
