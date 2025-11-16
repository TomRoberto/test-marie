"use client";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { useLangContext } from "@/contexts/LangContext";
import { i18n } from "@/utils/i18n";

const Page = () => {
  const { lang } = useLangContext();

  return (
    <main>
      <Container className="py-24">
        <section className="flex gap-20">
          <div className="flex-1">
            <Title level={3}>
              {i18n("expertise_individualizedCriminalDefense", lang)}
            </Title>
            <p className="whitespace-pre-line">
              {i18n("expertise_individualizedCriminalDefense_paragraph", lang)}
            </p>
          </div>
          <div className="flex-1">
            <Title level={3}>
              {i18n("expertise_expertiseInBusinessCriminalLaw", lang)}
            </Title>
            <p className="whitespace-pre-line">
              {i18n("expertise_expertiseInBusinessCriminalLaw_paragraph", lang)}
            </p>
          </div>
        </section>
        <section></section>
      </Container>
    </main>
  );
};

export default Page;
