import { TLang } from "@/types";

type TLangKeys =
  | "contacts"
  | "criminalBusinessLaw"
  | "criminalCourt"
  | "custodyAudition"
  | "expertise_expertiseInBusinessCriminalLaw_paragraph"
  | "expertise_expertiseInBusinessCriminalLaw"
  | "expertise_individualizedCriminalDefense_paragraph"
  | "expertise_individualizedCriminalDefense"
  | "expertise"
  | "familyLaw"
  | "familyLawAndPersonalInjuryLaw"
  | "fees"
  | "firm_fifthParagraph"
  | "firm_firstParagraph"
  | "firm_fourthParagraph"
  | "firm_secondParagraph"
  | "firm_thirdParagraph"
  | "firm"
  | "generalCriminalLaw"
  | "home"
  | "instruction"
  | "lawAttorney"
  | "news"
  | "otherCourts"
  | "personalInjuryLaw";

const frTranslations: { [key in TLangKeys]: string } = {
  contacts: "Contacts",
  criminalBusinessLaw: "Droit pénal des affaires",
  criminalCourt: "Cour d'assises",
  custodyAudition: "Audition de la garde",
  expertise: "Expertise",
  expertise_expertiseInBusinessCriminalLaw:
    "Compétence en droit pénal des affaires",
  expertise_expertiseInBusinessCriminalLaw_paragraph: `Me Marie Bélézy est également compétente en droit pénal des affaires 
  et intervient dans des dossiers sensibles et complexes tels que :
  • blanchiment de capitaux
  • escroquerie, abus de confiance
  • abus de biens sociaux (y compris pour les personnes morales)`,
  expertise_individualizedCriminalDefense: "Une défense pénale sur mesure",
  expertise_individualizedCriminalDefense_paragraph: `Le cabinet de Maître Marie Bélézy vous accompagne à tous les stades de la procédure pénale, que vous soyez mis en cause, mis en examen ou victime, dans le cadre d’affaires délictuelles ou criminelles. Elle intervient  dans tous types d’infractions pénales :
  • Crimes : assassinat, meurtre, viol, terrorisme
  • Délits : vol, recel, extorsion, agression sexuelle, trafic de stupéfiants`,
  familyLaw: "Droit de la famille",
  familyLawAndPersonalInjuryLaw: "Droit de la famille et des personnes",
  fees: "Honoraires",
  firm: "Cabinet",
  firm_fifthParagraph:
    "Au-delà de son activité en matière pénale, elle intervient également avec rigueur et précision en droit de la famille et en droit du préjudice corporel.",
  firm_firstParagraph:
    "Diplômée en 2022 d’un Master 2 en droit pénal international et des affaires (Paris Panthéon-Sorbonne) et d’un LL.M. à l’Université d’Édimbourg, Maître Marie Bélézy associe exigence juridique et vision internationale.",
  firm_fourthParagraph:
    "Ayant la conviction que chaque dossier est unique, Maître Marie Bélézy construit une stratégie claire et défend vos droits avec force et conviction.",
  firm_secondParagraph:
    " Bilingue français / anglais, elle accompagne particuliers et entreprises à chaque étape : de l’enquête ou l’instruction à la plaidoirie devant le Tribunal Correctionnel ou la Cour d’Assises.",
  firm_thirdParagraph:
    "Après huit années passées dans des cabinets pénalistes de renom, elle a fondé à sa prestation de serment en 2026 son propre cabinet pour offrir une défense sur mesure, humaine et combative.",
  generalCriminalLaw: "Droit pénal",
  home: "Accueil",
  instruction: "Instruction",
  lawAttorney: "Avocate à la cour",
  news: "Actualités",
  otherCourts: "Autres cours",
  personalInjuryLaw: "Droit de la responsabilité civile",
} as const;

// @ts-expect-error - This is a workaround to avoid type errors
const enTranslations: { [key in TLangKeys]: string } = {
  contacts: "Contacts",
  criminalBusinessLaw: "Criminal Business Law",
  criminalCourt: "Criminal Court",
  custodyAudition: "Custody Audition",
  expertise: "Expertise",
  familyLaw: "Family Law",
  familyLawAndPersonalInjuryLaw: "Family Law & Personal Injury Law",
  fees: "Fees",
  firm: "Firm",
  generalCriminalLaw: "General Criminal Law",
  home: "Home",
  instruction: "Instruction",
  lawAttorney: "Law Attorney",
  news: "News",
  otherCourts: "Other Courts",
  personalInjuryLaw: "Personal Injury Law",
} as const;

export const i18n = (key: TLangKeys, lang: TLang): string => {
  if (lang === "fr") {
    return frTranslations[key];
  } else if (lang === "en") {
    return enTranslations[key];
  }
  return "";
};
