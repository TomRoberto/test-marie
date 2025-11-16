"use client";

import Container from "@/components/Container";
import { useLangContext } from "@/contexts/LangContext";
import { i18n } from "@/utils/i18n";

const Page = () => {
  const { lang } = useLangContext();

  return (
    <main className="flex flex-1 flex-col">
      <Container className="flex flex-1 py-24">
        <div className="flex-1"></div>
        <div className="flex-2 justify-between text-xl">
          <p className="mb-10">{i18n("firm_firstParagraph", lang)}</p>
          <p className="mb-10">{i18n("firm_secondParagraph", lang)}</p>
          <p className="mb-10">{i18n("firm_thirdParagraph", lang)}</p>
          <p className="mb-10">{i18n("firm_fourthParagraph", lang)}</p>
          <p className="mb-10">{i18n("firm_fifthParagraph", lang)}</p>
        </div>
      </Container>
    </main>
  );
};

export default Page;
