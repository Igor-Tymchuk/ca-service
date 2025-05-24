"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Gallery.module.css"

const Gallery = () => {
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      before: "/images/before1.jpg",
      after: "/images/after1.jpg",
      title: "Car Repair 1",
    },
    {
      id: 2,
      before: "/images/before2.jpg",
      after: "/images/after2.jpg",
      title: "Car Repair 2",
    },
    {
      id: 3,
      before: "/images/before3.jpg",
      after: "/images/after3.jpg",
      title: "Car Repair 3",
    },
  ]

  const openModal = (image) => {
    setActiveImage(image)
  }

  const closeModal = () => {
    setActiveImage(null)
  }

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2>{t("gallery.title")}</h2>
        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <h3>{item.title}</h3>
              <div className={styles.comparison}>
                <div className={styles.imageContainer}>
                  <span className={styles.label}>{t("gallery.before")}</span>
                  <img
                    src={item.before || "/placeholder.svg"}
                    alt={`${item.title} before`}
                    onClick={() => openModal(item.before)}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <span className={styles.label}>{t("gallery.after")}</span>
                  <img
                    src={item.after || "/placeholder.svg"}
                    alt={`${item.title} after`}
                    onClick={() => openModal(item.after)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <img src={activeImage || "/placeholder.svg"} alt="Gallery" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
