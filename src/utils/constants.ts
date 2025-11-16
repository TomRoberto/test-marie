export enum Paths {
  contacts = "/contacts",
  expertise = "/expertise",
  expertiseCriminalCourt = `${Paths.expertise}/criminal-court`,
  expertiseCustodyAudition = `${Paths.expertise}/custody-audition`,
  expertiseFamilyLaw = `${Paths.expertise}/family-law`,
  expertiseInstruction = `${Paths.expertise}/instruction`,
  expertiseOtherCourts = `${Paths.expertise}/other-courts`,
  expertisePersonalInjuryLaw = `${Paths.expertise}/personal-injury-law`,
  fees = "/fees",
  firm = "/firm",
  home = "/",
  news = "/news",
}

export const pathsList: Paths[] = Object.values(Paths);

export enum MainPaths {
  contacts = Paths.contacts,
  expertise = Paths.expertise,
  fees = Paths.fees,
  firm = Paths.firm,
  home = Paths.home,
  news = Paths.news,
}
