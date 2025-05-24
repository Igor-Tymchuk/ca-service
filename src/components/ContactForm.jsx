"use client"

import { useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ContactForm.module.css"

const ContactForm = ({ onSuccess }) => {
  const { t } = useTranslation()
  const fileInputRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [fileError, setFileError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) {
      setImageFile(null)
      setImagePreview(null)
      return
    }

    // Check if file is an image
    if (!file.type.match("image.*")) {
      setFileError("Please select an image file (jpg, png, gif, etc.)")
      setImageFile(null)
      setImagePreview(null)
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFileError("Image size should be less than 5MB")
      setImageFile(null)
      setImagePreview(null)
      return
    }

    setFileError(null)
    setImageFile(file)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create FormData object for file upload
    const formDataToSend = new FormData()
    formDataToSend.append("name", formData.name)
    formDataToSend.append("phone", formData.phone)
    formDataToSend.append("message", formData.message)
    if (imageFile) {
      formDataToSend.append("image", imageFile)
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        phone: "",
        message: "",
      })
      setImageFile(null)
      setImagePreview(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      // Reset status after 3 seconds and close modal if provided
      setTimeout(() => {
        setSubmitStatus(null)
        if (onSuccess) onSuccess()
      }, 3000)
    }, 1500)
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t("contact.form.name")}</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">{t("contact.form.phone")}</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">{t("contact.form.message")}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">{t("contact.form.image")}</label>
          <div className={styles.fileInputWrapper}>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              className={styles.fileInput}
            />
            <button type="button" className={styles.fileButton} onClick={() => fileInputRef.current.click()}>
              {t("contact.form.selectImage")}
            </button>
            <span className={styles.fileName}>{imageFile ? imageFile.name : t("contact.form.noFileSelected")}</span>
          </div>
          {fileError && <div className={styles.fileError}>{fileError}</div>}

          {imagePreview && (
            <div className={styles.imagePreview}>
              <img src={imagePreview || "/placeholder.svg"} alt="Preview" />
              <button type="button" className={styles.removeImageBtn} onClick={handleRemoveImage}>
                ×
              </button>
            </div>
          )}
        </div>
        <button type="submit" className={styles.submitButton} disabled={isSubmitting || fileError}>
          {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
        </button>

        {submitStatus === "success" && <div className={styles.successMessage}>{t("contact.form.success")}</div>}
      </form>
    </div>
  )
}

export default ContactForm
