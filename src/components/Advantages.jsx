import { useTranslation } from "react-i18next"
import styles from "./Advantages.module.css"

const Advantages = () => {
  const { t } = useTranslation()

  const advantages = [
    {
      id: 1,
      title: t("advantages.advantage1"),
      icon: "✓",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: t("advantages.advantage2"),
      icon: "🔍",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: t("advantages.advantage3"),
      icon: "👨‍🔧",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      title: t("advantages.advantage4"),
      icon: "🤝",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      id: 5,
      title: t("advantages.advantage5"),
      icon: "📝",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    },
  ]

  return (
    <section id="advantages" className={styles.advantages}>
      <div className={styles.container}>
        <h2>{t("advantages.title")}</h2>
        <div className={styles.grid}>
          {advantages.map((advantage) => (
            <div key={advantage.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{advantage.icon}</span>
              </div>
              <div className={styles.content}>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
