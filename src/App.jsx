"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import "./i18n"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Advantages from "./components/Advantages"
import Gallery from "./components/Gallery"
import ContactInfo from "./components/ContactInfo"
import ContactModal from "./components/ContactModal"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const { t } = useTranslation()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="container">
      <Header openContactModal={openContactModal} />
      <main className="main">
        <Hero openContactModal={openContactModal} />
        <About />
        <Services />
        <Advantages />
        <Gallery />
        <ContactInfo />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  )
}

export default App
