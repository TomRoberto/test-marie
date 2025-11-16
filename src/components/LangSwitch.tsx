"use client";

import { useLangContext } from "@/contexts/LangContext";

const LangSwitch = () => {
  const { lang, setLang } = useLangContext();
  return (
    <div className="">
      {lang === "en" ? (
        <button onClick={() => setLang("fr")}>🇫🇷</button>
      ) : (
        <button onClick={() => setLang("en")}>🇬🇧</button>
      )}
    </div>
  );
};

export default LangSwitch;
