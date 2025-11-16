"use client";

import { usePathname } from "next/navigation";

import { useLangContext } from "@/contexts/LangContext";
import { MainPaths, Paths } from "@/utils/constants";
import { i18n } from "@/utils/i18n";

import Title from "./Title";

const PageName = () => {
  const { lang } = useLangContext();
  const pathname = usePathname() as Paths;

  const isExpertisePage: boolean = pathname.includes(MainPaths.expertise);

  const mainPath = isExpertisePage
    ? MainPaths.expertise
    : (pathname as unknown as Exclude<
        MainPaths,
        MainPaths.expertise | MainPaths.home
      >);

  const pageNames: { [key in Exclude<MainPaths, MainPaths.home>]: string } = {
    [MainPaths.contacts]: i18n("contacts", lang),
    [MainPaths.expertise]: i18n("expertise", lang),
    [MainPaths.fees]: i18n("fees", lang),
    [MainPaths.firm]: i18n("firm", lang),
    [MainPaths.news]: i18n("news", lang),
  } as const;

  const pageName = pageNames[mainPath];

  return (
    <Title className="font-bold" level={1}>
      {pageName.toUpperCase()}
    </Title>
  );
};

export default PageName;
