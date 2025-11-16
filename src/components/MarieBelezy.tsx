"use client";

import { useLangContext } from "@/contexts/LangContext";
import { i18n } from "@/utils/i18n";

const MarieBelezy = () => {
  const { lang } = useLangContext();

  return (
    <p className="text-4xl">
      Marie Bélézy - <span className="italic">{i18n("lawAttorney", lang)}</span>
    </p>
  );
};

export default MarieBelezy;
