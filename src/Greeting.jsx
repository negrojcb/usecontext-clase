import { useLanguage } from "./LanguageContext";

const Greetings = () => {
  const { language } = useLanguage();

  const greetings = {
    en: "Hello",
    es: "Hola",
    fr: "bonjour",
  };
  return (
    <>
      <h2>{greetings[language]}</h2>
    </>
  );
};

export default Greetings;
