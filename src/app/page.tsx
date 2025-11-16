"use client";

import Image from "next/image";

import building from "@/assets/images/building.png";
import Container from "@/components/Container";
import { useLangContext } from "@/contexts/LangContext";
import { i18n } from "@/utils/i18n";

export default function Page() {
  const { lang } = useLangContext();

  return (
    <main className="flex flex-1 items-center justify-center">
      <Image
        alt="building"
        className="absolute top-0 bottom-0 h-screen w-screen object-cover"
        src={building}
      />
      <Container className="relative z-20 text-3xl font-bold text-white">
        <p>{i18n("generalCriminalLaw", lang)}</p>
        <p>{i18n("criminalBusinessLaw", lang)}</p>
        <p>{i18n("familyLawAndPersonalInjuryLaw", lang)}</p>
      </Container>
    </main>
  );
}
