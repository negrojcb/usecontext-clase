// App.js
import React from "react";
import { LanguageProvider } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Greetings from "./Greeting";

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>Language selector App</h1>
        <LanguageSelector />
        <Greetings />
      </div>
    </LanguageProvider>
  );
};

export default App;
