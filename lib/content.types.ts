export type PageKey = "home" | "features" | "faq" | "about" | "appTesten";

export type NavItem = { page: PageKey; label: string };
export type FeatureItem = { id: string; icon: string; title: string; text: string };
export type StepItem = { title: string; text: string };
export type FaqItem = { question: string; answer: string };
export type StackItem = { label: string; note: string };

/**
 * Ein vollständiges Sprachpaket. `content.de.ts` und `content.en.ts` implementieren
 * diesen Typ – neue Texte immer in beiden Dateien ergänzen.
 */
export type Dictionary = {
  htmlLang: string;
  ogLocale: string;
  claim: string;
  description: string;
  nav: NavItem[];
  meta: Record<PageKey, { title: string; description: string }>;
  home: {
    badge: string;
    h1: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    problemTitle: string;
    problemText: string;
    solutionTitle: string;
    solutionText: string;
    photoAlt: string;
    photoCaption: string;
    highlightsEyebrow: string;
    highlightsTitle: string;
    highlightsLead: string;
    highlights: FeatureItem[];
    allFeaturesCta: string;
    stepsEyebrow: string;
    stepsTitle: string;
    steps: StepItem[];
  };
  features: {
    eyebrow: string;
    title: string;
    lead: string;
    photoAlt: string;
    photoCaption: string;
    items: FeatureItem[];
    notIncludedTitle: string;
    notIncludedText: string;
    ctaTitle: string;
    ctaText: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: FaqItem[];
    noAnswerText: string;
    noAnswerLinkLabel: string;
    ctaTitle: string;
    ctaText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    ideaTitle: string;
    ideaText1: string;
    ideaText2: string;
    targetGroupTitle: string;
    targetGroupText: string;
    detailsTitle: string;
    authorLabel: string;
    frameworkLabel: string;
    statusLabel: string;
    statusValue: string;
    stack: StackItem[];
    decisionsText: string;
    contactTitle: string;
    contactText: string;
    ctaTitle: string;
    ctaText: string;
  };
  appTesten: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    sidebarTitle: string;
    checks: string[];
    privacyNote: string;
    stepsTitle: string;
    walkthrough: StepItem[];
    finalTitle: string;
    finalText: string;
    finalCta: string;
  };
  footer: {
    appLinkLabel: string;
  };
  cta: {
    defaultTitle: string;
    defaultText: string;
    exploreLabel: string;
    secondaryLabel: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
};
