import { useTranslation } from "react-i18next"
import styles from "./Services.module.css"

const Services = () => {
  const { t } = useTranslation()

  const services = [
    {
      id: 1,
      title: t("services.service1"),
      icon: "🔧",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: t("services.service2"),
      icon: "🎨",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: t("services.service3"),
      icon: "⚒️",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      title: t("services.service4"),
      icon: "🛡️",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      id: 5,
      title: t("services.service5"),
      icon: "🔩",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    },
    {
      id: 6,
      title: t("services.service6"),
      icon: "⚡",
      description: "Qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 7,
      title: t("services.service7"),
      icon: "💧",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>{t("services.title")}</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
