const en = {
  // header
  navProjects: "Projects",
  navSkills: "Skills",
  navAbout: "About",
  navContact: "Contact",
  switchToLight: "Switch to light theme",
  switchToDark: "Switch to dark theme",

  // hero
  heroBadge: "Open to work · Bucharest",
  heroTitle: "Madra Adil, frontend developer.",
  heroSubtitle: "React, TypeScript, and attention to details.",
  heroIntro: "I build web apps with React and TypeScript, from the first component to the tests that run before every deploy. Based in Bucharest, open to frontend roles.",
  heroSeeWork: "See my work",
  heroGetInTouch: "Get in touch",
  statExperience: "years of experience",
  statLiveApps: "React apps in production",
  statProjects: "projects shipped",

  // sections
  sectionFeatured: "Featured project",
  sectionHistory: "Project history",
  sectionSkills: "Skills",
  sectionAbout: "About",
  sectionContact: "Contact",

  // project links and badges
  viewDetails: "View details",
  details: "Details",
  live: "Live",
  source: "Source",
  opensInNewTab: "(opens in a new tab)",
  builtSolo: "built solo",
  statusLive: "live",
  statusWip: "in progress",
  statusArchived: "archived",

  // filter
  filterByTechnology: "Filter by technology",
  selected: "selected",

  // about
  aboutLead: "I'm Adil, a frontend developer in Bucharest.",
  aboutText: "I work in React and TypeScript, and I care about the parts people only notice when they're missing: a search that survives a refresh, a modal you can close with Escape, a site that works without a mouse.",
  aboutBackground: "Before code, I spent a few years as a courier. I'm studying programming, for now, i work towards adding Angular and Java to my stack.",

  // contact
  contactTitle: "Hiring for a frontend role? Let's talk.",

  // project page
  allProjects: "All projects",
  whatItDoes: "What it does",
  howItsBuilt: "How it's built",
  liveDemo: "live demo",
  projectNotFound: "Project not found",

  // meta
  metaHomeTitle: "Madra Adil · Frontend developer",
  metaHomeDescription: "Frontend developer in Bucharest building with React and TypeScript. Projects with live demos and source code.",
}

export type SiteText = typeof en

const ro: SiteText = {
  // header
  navProjects: "Proiecte",
  navSkills: "Competente",
  navAbout: "Despre mine",
  navContact: "Contact",
  switchToLight: "Treci pe tema deschisa",
  switchToDark: "Treci pe tema inchisa",

  // hero
  heroBadge: "Disponibil · Bucuresti",
  heroTitle: "Madra Adil, frontend developer.",
  heroSubtitle: "React, TypeScript si atentie la detalii.",
  heroIntro: "Construiesc aplicatii web cu React si TypeScript, de la prima componenta pana la testele care ruleaza inainte de fiecare deploy. Sunt in Bucuresti si caut un rol de frontend.",
  heroSeeWork: "Vezi proiectele",
  heroGetInTouch: "Scrie-mi",
  statExperience: "ani de experienta",
  statLiveApps: "aplicatii React in productie",
  statProjects: "proiecte terminate",

  // sections
  sectionFeatured: "Proiect principal",
  sectionHistory: "Toate proiectele",
  sectionSkills: "Competente",
  sectionAbout: "Despre mine",
  sectionContact: "Contact",

  // project links and badges
  viewDetails: "Vezi detalii",
  details: "Detalii",
  live: "Live",
  source: "Cod sursa",
  opensInNewTab: "(se deschide intr-un tab nou)",
  builtSolo: "facut singur",
  statusLive: "live",
  statusWip: "in lucru",
  statusArchived: "arhivat",

  // filter
  filterByTechnology: "Filtreaza dupa tehnologie",
  selected: "selectate",

  // about
  aboutLead: "Sunt Adil, frontend developer in Bucuresti.",
  aboutText: "Lucrez cu React si TypeScript si tin la lucrurile pe care oamenii le observa doar cand lipsesc: o cautare care ramane dupa refresh, un modal care se inchide cu Escape, un site care merge si fara mouse.",
  aboutBackground: "Inainte de cod am fost curier cativa ani. Studiez programarea, in prezent invat Angular si Java.",

  // contact
  contactTitle: "Cautati un frontend developer? Sa vorbim.",

  // project page
  allProjects: "Toate proiectele",
  whatItDoes: "Ce face",
  howItsBuilt: "Cum e facut",
  liveDemo: "demo live",
  projectNotFound: "Proiectul nu exista",

  // meta
  metaHomeTitle: "Madra Adil · Frontend developer",
  metaHomeDescription: "Frontend developer in Bucuresti, lucrez cu React si TypeScript. Proiecte cu demo live si cod sursa.",
}

export const siteText = { en, ro }