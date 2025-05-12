import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { store } from "./redux/store.ts";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: "English",
        about_me: "About Me",
        my_projects: "My Projects",
        my_contacts: "My Contacts",
        hero_desc:
          "I will turn your ideas into functional and beautiful programs!",
        contact_me: "Contact Me",
        light: "Light",
        dark: "Dark",
        theme: "Theme",
        magic: "Magic",
        about_me_desc:
          "My name is Igor! I am junior fullstack developer. Now skills are HTML, CSS, JavaScript, React, Redux, SASS, TypeScript, Node.js. I have experience with some JS libraries.",
        about_myself:
          "About myself: Calm, attentive, optimistic, I have a sense of humor.",
        my_it_journey: "My IT Journey",
        years: "y",
        months: "m",
        days: "d",
        hours: "h",
        minutes: "min",
        seconds: "sec",
        soft_skills: "Soft Skills",
        soft1: "- Learned to make decisions faster.",
        soft2: "- Complex solution of complex problems",
        soft3: "- Creativity, originality and initiative",
        soft4: "- Adaptation to new conditions",
        soft5: "- Teamwork",
        soft6: "- Stress resistance and moral strength",
        soft7: "- Flexibility",
        soft8: "- Endurance",
        tech_skills: "Tech Skills",
        view_gh_btn: "View code on GitHub",
        live_btn: "Go live",
        show_more_btn: "Show more...",
        email: "E-mail:",
        phone: "Phone number:",
        get_my_resume: "Get My Resume in PDF-File",
        download: "Download",
        copyright: "All rights reserved",
      },
    },
    ua: {
      translation: {
        language: "Українська",
        about_me: "Про мене",
        my_projects: "Мої проєкти",
        my_contacts: "Контакти",
        hero_desc: "Я втілю ваші ідеї в функціональні та красиві програми!",
        contact_me: "Зв'язатись зі мною",
        light: "Світла",
        dark: "Темна",
        theme: "Тема",
        magic: "Магія",
        about_me_desc:
          "Мене звати Ігор! Я fullstack розробник початкового рівня. Зараз мої навички це HTML, CSS, JavaScript, React, Redux, SASS, TypeScript, Node.js. У мене є досвід роботи з деякими бібліотеками JS..",
        about_myself:
          "Про себе: Спокійний, уважний, оптимістичний, маю почуття гумору.",
        my_it_journey: "Моя IT-подорож:",
        years: "р",
        months: "м",
        days: "д",
        hours: "г",
        minutes: "хв",
        seconds: "сек",
        soft_skills: "Софт навички",
        soft1: "- Навчився швидше приймати рішення.",
        soft2: "- Комплексне вирішення складних завдань",
        soft3: "- Креативність, оригінальність та ініціативність",
        soft4: "- Адаптація до нових умов",
        soft5: "- Командна робота",
        soft6: "- Стресостійкість і моральна міцність",
        soft7: "- Гнучкість",
        soft8: "- Витривалість",
        tech_skills: "Технічні навички",
        view_gh_btn: "Код на GitHub",
        live_btn: "Жива сторінка",
        show_more_btn: "Показати більше...",
        email: "Електронна пошта:",
        phone: "Контактний телефон:",
        get_my_resume: "Отримати резюме PDF-файлом",
        download: "Завантажити",
        copyright: "Усі права захищені",
      },
    },
  },
  lng: "en",
  fallbackLng: "ua",
  interpolation: { escapeValue: false },
});
store.subscribe(() => {
  const state = store.getState();
  i18n.changeLanguage(state.language.lang);
});
export default i18n;
