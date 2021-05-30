const Norsk = [
  "Live sensordata",
  "Historiske sensordata",
  "Funksjoner",
  "Prissetting",
  "Login",
];
const English = [
  "Live Sensor Data",
  "Historical Sensor Data",
  "Features",
  "Pricing",
  "Logg Inn",
];

const ReturnTranslation = (text, language) => {
  if (typeof language === "undefined" || language === "en") {
    return text;
  } else if (language.toLowerCase() === "no") {
    const englishIndex = English.indexOf(text);
    if (englishIndex !== -1) {
      return Norsk[englishIndex];
    }
  } else {
    return null;
  }

  return null;
};

console.log(ReturnTranslation("Login", "NO"));
