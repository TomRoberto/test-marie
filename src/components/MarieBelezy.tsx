"use client";

import { useLangContext } from "@/contexts/LangContext";
import { i18n } from "@/utils/i18n";

import Title from "./Title";

const MarieBelezy = () => {
  const { lang } = useLangContext();

  return (
    <Title level={1}>
      Marie Bélézy - <span className="italic">{i18n("lawAttorney", lang)}</span>
    </Title>
  );
};

export default MarieBelezy;
