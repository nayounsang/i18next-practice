import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
//import koTranslation from "./locales/ko/translation.json";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    backend: {
      crossDomain: true,
      withCredentials: false,
      loadPath: "http://localhost:3001/api/locales/{{lng}}/{{ns}}.json",
    },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // resources: {
    //   ko: {
    //     translation: koTranslation,
    //   },
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next",
    //     },
    //   },
    // },
    lng: "ko", // if you're using a language detector, do not define the lng option
    fallbackLng: "ko",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
