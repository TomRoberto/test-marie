"use client";

import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "use-local-storage";

import { TLang } from "@/types";

type TLangContext = {
  lang: TLang;
  setLang: (lang: TLang) => void;
};
const LangContext = createContext<TLangContext>({
  lang: "fr",
  setLang: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useLocalStorage<TLang>("lang", "fr");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => useContext(LangContext);
