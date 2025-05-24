import { useTranslation } from "react-i18next"
import styles from "./ContactInfo.module.css"

const ContactInfo = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>{t("contact.info.title")}</h3>
            <div className={styles.infoItem}>
              <strong>{t("contact.info.phone")}:</strong>
              <a href="tel:780528471">780 528 471</a>
            </div>
            <div className={styles.infoItem}>
              <strong>{t("contact.info.hours")}:</strong>
              <p>{t("contact.info.weekdays")}</p>
              <p>{t("contact.info.saturday")}</p>
              <p>{t("contact.info.sunday")}</p>
            </div>
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon}>
                <span>FB</span>
              </a>
              <a href="#" className={styles.socialIcon}>
                <span>IG</span>
              </a>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3054414582584!2d21.01180511579157!3d52.23082097976201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1621436761136!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
