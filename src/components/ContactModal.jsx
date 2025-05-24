"use client"

import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import ContactForm from "./ContactForm"
import styles from "./ContactModal.module.css"

const ContactModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation()
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto" // Re-enable scrolling when modal is closed
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{t("contact.title")}</h2>
        <ContactForm onSuccess={onClose} />
      </div>
    </div>
  )
}

export default ContactModal
