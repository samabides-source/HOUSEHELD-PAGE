import type { Dictionary } from "@/lib/content.types";

/**
 * English translation. Mirrors `content.de.ts` field for field – keep both
 * files in sync when adding new copy.
 */
export const en: Dictionary = {
  htmlLang: "en",
  ogLocale: "en_US",
  claim: "Household chores for families and shared flats, in one place.",
  description:
    "Hausheld is a household chore tracker for families and shared flats: document tasks with photos, assign people, organise with tags.",
  nav: [
    { page: "home", label: "Home" },
    { page: "features", label: "Features" },
    { page: "faq", label: "FAQ" },
    { page: "about", label: "About" },
    { page: "appTesten", label: "Try the app" },
  ],
  mockup: {
    headerLabel: "All tasks",
    newLabel: "New",
    filterOpen: "Open",
    filterDone: "Done",
    filterAll: "All",
    tasks: [
      {
        title: "Wipe the kitchen floor",
        priorityLabel: "urgent",
        tags: ["Kitchen", "Cleaning"],
        due: "Today",
      },
      {
        title: "Clean the washing machine filter",
        priorityLabel: "medium",
        tags: ["Basement", "Technical"],
        due: "Fri, Aug 14",
      },
      {
        title: "Water the balcony plants",
        priorityLabel: "low",
        tags: ["Outdoor"],
        due: "Sat, Aug 15",
      },
    ],
  },
  meta: {
    home: {
      title: "Hausheld – Household chores, sorted",
      description:
        "Hausheld is a household chore tracker for families and shared flats: document tasks with photos, assign people, organise with tags.",
    },
    features: {
      title: "Features",
      description:
        "All Hausheld features: tasks with photos, assignment to people, global tags, priorities, filters, board view – no account, no cloud.",
    },
    faq: {
      title: "FAQ",
      description:
        "Frequently asked questions about Hausheld: cost, accounts, data storage, multi-device use, photos and deleting tasks.",
    },
    about: {
      title: "About",
      description:
        "Background on Hausheld: built as a student project for the CAS module «Viben und Coden» – with Next.js, React, Tailwind CSS and TypeScript.",
    },
    appTesten: {
      title: "Try the app",
      description:
        "Try Hausheld in a few minutes: open the app, load sample data, create your own task – no account, no install.",
    },
  },
  home: {
    badge: "No account · No cloud · Free",
    h1: "Household chores for families and shared flats, in one place",
    lead: "Who does what, by when and where exactly? Hausheld collects every task in one clear place – documented with photos, assigned to people, organised with tags.",
    ctaPrimary: "Open the app ↗",
    ctaSecondary: "See the features",
    note: "Runs directly in the browser. No install, no sign-up.",
    problemTitle: "The problem",
    problemText:
      "Household chores get handed out verbally or buried in chat threads – and get lost along the way. There's no single, simple place to see what needs doing, where exactly, and who's responsible.",
    solutionTitle: "The solution",
    solutionText:
      "A simple web app where tasks are captured with photos, assignment and tags, and displayed clearly. Visible to everyone in the household.",
    photoAlt: "A person photographs houseplants in the living room with a smartphone",
    photoCaption: "A photo shows exactly what's meant – no long description needed.",
    highlightsEyebrow: "Core idea",
    highlightsTitle: "Three things that make the difference",
    highlightsLead: "Not a project management tool – just the minimum that actually helps day to day.",
    highlights: [
      {
        id: "fotos",
        icon: "📸",
        title: "Photos instead of words",
        text: "Up to 10 photos per task show exactly what's meant – the cellar, the stain, the empty shelf. No more guessing.",
      },
      {
        id: "personen",
        icon: "🙋",
        title: "Clearly assigned",
        text: "Every task can go to one or several people. Who's responsible is right there on the card – not buried in a chat.",
      },
      {
        id: "tags",
        icon: "🏷️",
        title: "Sorted by room and type",
        text: "Global tags for rooms, outdoor areas, task type or technical jobs. Colour carries meaning, not decoration.",
      },
    ],
    allFeaturesCta: "All features",
    stepsEyebrow: "In three steps",
    stepsTitle: "How it works",
    steps: [
      {
        title: "Add people",
        text: "Enter everyone in the household once. Names are enough.",
      },
      {
        title: "Capture a task",
        text: "Write a title, snap a photo, set a tag and an owner. Takes under a minute.",
      },
      {
        title: "Stay on top of it",
        text: "Filter, search, check off. Once something's done, it's visibly done – for everyone in the household.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything a household needs – and nothing more",
    lead: "Hausheld deliberately skips the bloat. These features exist because they're actually needed day to day.",
    photoAlt: "Mop on a wooden floor",
    photoCaption: "A photo shows exactly what needs doing – no more guessing.",
    items: [
      {
        id: "aufgaben",
        icon: "✅",
        title: "Tasks captured in seconds",
        text: "A title is enough. Due date, priority, assignment, tags and photos are optional and can be added anytime.",
      },
      {
        id: "fotos",
        icon: "📸",
        title: "Photo documentation",
        text: "Up to 10 photos per task (JPG, PNG, WebP, HEIC). Images are resized and compressed in the browser before they're stored.",
      },
      {
        id: "personen",
        icon: "🙋",
        title: "People and assignments",
        text: "Multiple people per task. Each person gets an initials circle with a stable colour – recognisable at a glance.",
      },
      {
        id: "tags",
        icon: "🏷️",
        title: "Global tags with categories",
        text: "Tags apply to the whole household and are unique. Deleting a tag that's in use warns you first, with the number of affected tasks.",
      },
      {
        id: "prioritaet",
        icon: "🔥",
        title: "Priorities and status",
        text: "Low, medium or urgent – shown as a coloured stripe on the card. Status can always be changed freely, even back from \"done\" to \"open\".",
      },
      {
        id: "filter",
        icon: "🔎",
        title: "Filters and full-text search",
        text: "Filter by status, priority, person and tag: OR within a category, AND across categories. Plus a search across all tasks.",
      },
      {
        id: "ansichten",
        icon: "🗂️",
        title: "List or board",
        text: "The list view for a quick overview, the board view to see progress. Switch with a single click.",
      },
      {
        id: "lokal",
        icon: "🔒",
        title: "No account, no cloud",
        text: "All data – including photos – stays in the browser (IndexedDB). No login, no sign-up, nothing sent to a server.",
      },
    ],
    notIncludedTitle: "Deliberately not included",
    notIncludedText:
      "To keep the app simple, a few things are missing on purpose: no login and no user accounts, no AI features, no push notifications, no multi-language support and no trash bin. Deleted is deleted for good – that's why the app asks first.",
    ctaTitle: "Best experienced hands-on",
    ctaText: "The sample data fills the app in seconds with 6 people and 14 tasks.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    lead: "The most important answers about usage, data and the app's limits.",
    items: [
      {
        question: "What does Hausheld cost?",
        answer:
          "Nothing. Hausheld was built as a student project and is free to use. There are no paid features and no ads.",
      },
      {
        question: "Do I need an account?",
        answer:
          "No. The app opens directly and is ready to use immediately – no login, no email address, no sign-up.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Exclusively on your device, in the browser (IndexedDB), photos included. There is no server and no cloud that anything gets sent to.",
      },
      {
        question: "Does everyone in the household see the same tasks?",
        answer:
          "Not currently. Because data is stored per browser, every device has its own set of tasks. For shared use, a shared device – like a tablet in the kitchen – currently works best. Cross-device sync is the most obvious next step.",
      },
      {
        question: "What happens if I clear my browser storage?",
        answer:
          "Then the tasks and photos are gone. Private/incognito mode or blocked browser storage also prevent the app from working – in that case, the app shows a corresponding notice.",
      },
      {
        question: "Does Hausheld work on mobile?",
        answer:
          "Yes. The app is built for small screens and can be added to your home screen from the browser. Photos can be taken directly with the camera.",
      },
      {
        question: "How many photos fit on one task?",
        answer:
          "Up to 10 photos, each up to 10 MB. On upload, photos are resized to 1600 px on the longest side and compressed as WebP, so browser storage doesn't fill up.",
      },
      {
        question: "Can I restore a deleted task?",
        answer:
          "No, there's deliberately no trash bin. That's why deleting requires a second click to confirm – after that, the task and its photos are permanently removed.",
      },
      {
        question: "Is there sample data to try out?",
        answer:
          "Yes. Under «Settings → Load sample data», the app fills up with 6 people and 14 tasks. A reset clears everything again.",
      },
    ],
    noAnswerText: "Question not answered here? Send a message using the contact details on the",
    noAnswerLinkLabel: "About page",
    ctaTitle: "Questions answered?",
    ctaText: "Then the fastest next step is a quick try in your browser.",
  },
  about: {
    eyebrow: "About",
    title: "Born from a very ordinary annoyance",
    lead: "Hausheld is a student project – and, at the same time, an attempt to solve a real problem as simply as possible.",
    ideaTitle: "The idea",
    ideaText1:
      "In most households, chores get handed out verbally or mentioned in a chat – and get lost between appointments, links and voice messages. Who's doing what is rarely written down, and \"clean the bathroom\" means something different to everyone.",
    ideaText2:
      "Hausheld starts exactly there: a task only needs a title. Everything else – photo, person, tag, date, priority – is optional and makes the task clearer, step by step. The photo replaces the long explanation.",
    targetGroupTitle: "Who it's for",
    targetGroupText:
      "Families and shared flats who want to capture and split household chores together – without first agreeing on a project management tool.",
    detailsTitle: "Project details",
    authorLabel: "Author",
    frameworkLabel: "Context",
    statusLabel: "Last updated",
    statusValue: "August 2026",
    stack: [
      { label: "Next.js 15", note: "App Router, statically served" },
      { label: "React 19", note: "Components and state" },
      { label: "Tailwind CSS v4", note: "Design tokens instead of stylesheet sprawl" },
      { label: "TypeScript", note: "Strict types, no any shortcuts" },
      { label: "IndexedDB", note: "Local persistence, photos included" },
      { label: "Vercel", note: "Deployment with zero configuration" },
    ],
    decisionsText:
      "Data lives in the browser rather than on a server by design: it makes the app usable without a login, costs nothing to run, and keeps photos out of anyone else's hands. Syncing with a database for cross-device use is currently in development.",
    contactTitle: "Contact",
    contactText: "Feedback, bug reports and ideas are welcome.",
    ctaTitle: "Prefer to try it than read about it?",
    ctaText: "The app runs directly in your browser – no account, no install.",
  },
  appTesten: {
    eyebrow: "Try the app",
    title: "The whole app in five minutes",
    lead: "No account, no install, no request for test data. Open it, try it, reset it.",
    ctaPrimary: "Open the app ↗",
    ctaSecondary: "First: the features",
    sidebarTitle: "Before you start",
    checks: [
      "A modern browser (Chrome, Edge, Firefox or Safari)",
      "No private/incognito mode – local storage is blocked there",
      "Phone, tablet or desktop; the interface adapts",
    ],
    privacyNote:
      "Everything you enter stays on your device. Nothing gets uploaded, nothing gets analysed.",
    stepsTitle: "Step by step",
    walkthrough: [
      {
        title: "Open the app",
        text: "The link goes straight to the task overview. No sign-in and no consent prompt appears – the app starts empty.",
      },
      {
        title: "Load sample data",
        text: "Under «Settings → Load sample data», 6 people and 14 tasks (photos included) get added. That way you can look around without typing anything yourself.",
      },
      {
        title: "Filter and search",
        text: "On the home screen, filter by status, priority, person or tag, and switch between list and board view.",
      },
      {
        title: "Create your own task",
        text: "Use «New» to add a task: enter a title, add a photo, assign a person, set a tag. On mobile, the photo can be taken directly with the camera.",
      },
      {
        title: "Clean up again",
        text: "Under «Settings», reset clears everything. After that, the app is empty again – no leftovers.",
      },
    ],
    finalTitle: "Let's go",
    finalText:
      "The app opens in a new tab – this page stays open in case you want to re-read the steps.",
    finalCta: "Open Hausheld ↗",
  },
  footer: {
    appLinkLabel: "Open the app ↗",
  },
  cta: {
    defaultTitle: "Ready for a tidier household?",
    defaultText: "Hausheld starts with no account and no install – right in your browser.",
    exploreLabel: "Open the app ↗",
    secondaryLabel: "How to try it",
  },
  notFound: {
    eyebrow: "404",
    title: "This page doesn't exist",
    text: "The link may have been renamed. The way back leads through the home page.",
    cta: "Back to home",
  },
};
