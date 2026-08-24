import type { Dictionary } from "@/lib/content.types";

/**
 * Deutsches Sprachpaket (Standard, Schweizer Schreibweise). Alle Texte der
 * deutschen Seiten stehen hier – die Seiten selbst rendern nur, was hier steht.
 */
export const de: Dictionary = {
  htmlLang: "de-CH",
  ogLocale: "de_CH",
  claim: "Haushaltsaufgaben für Familien und WGs an einem Ort.",
  description:
    "Househeld ist ein Haushaltsaufgaben-Tracker für Familien und WGs: Aufgaben mit Fotos dokumentieren, Personen zuweisen, mit Tags kategorisieren.",
  nav: [
    { page: "home", label: "Home" },
    { page: "features", label: "Features" },
    { page: "faq", label: "FAQ" },
    { page: "about", label: "About" },
    { page: "appTesten", label: "App testen" },
  ],
  mockup: {
    headerLabel: "Alle Aufgaben",
    newLabel: "Neu",
    filterOpen: "Offen",
    filterDone: "Erledigt",
    filterAll: "Alle",
    tasks: [
      {
        title: "Küchenboden wischen",
        priorityLabel: "dringend",
        tags: ["Küche", "Putzen"],
        due: "Heute",
      },
      {
        title: "Filter der Waschmaschine reinigen",
        priorityLabel: "mittel",
        tags: ["Keller", "Technik"],
        due: "Fr, 14.8.",
      },
      {
        title: "Balkonpflanzen giessen",
        priorityLabel: "niedrig",
        tags: ["Aussenbereich"],
        due: "Sa, 15.8.",
      },
    ],
  },
  meta: {
    home: {
      title: "Househeld – Haushaltsaufgaben im Griff",
      description:
        "Househeld ist ein Haushaltsaufgaben-Tracker für Familien und WGs: Aufgaben mit Fotos dokumentieren, Personen zuweisen, mit Tags kategorisieren.",
    },
    features: {
      title: "Features",
      description:
        "Alle Funktionen von Househeld: Aufgaben mit Fotos, Zuweisung an Personen, globale Tags, Prioritäten, Filter, Board-Ansicht – ohne Konto und ohne Cloud.",
    },
    faq: {
      title: "FAQ",
      description:
        "Häufige Fragen zu Househeld: Kosten, Konto, Datenspeicherung, Nutzung auf mehreren Geräten, Fotos und Löschen von Aufgaben.",
    },
    about: {
      title: "About",
      description:
        "Hintergrund zu Househeld: entstanden als Übungsprojekt im CAS-Modul «Viben und Coden» – mit Next.js, React, Tailwind CSS und TypeScript.",
    },
    appTesten: {
      title: "App testen",
      description:
        "Househeld in wenigen Minuten ausprobieren: App öffnen, Beispieldaten laden, eigene Aufgabe erfassen – ohne Konto und ohne Installation.",
    },
  },
  home: {
    badge: "Ohne Konto · Ohne Cloud · Kostenlos",
    h1: "Haushaltsaufgaben für Familien und WGs an einem Ort",
    lead: "Househeld ist ein kostenloser Haushaltsaufgaben-Tracker für Familien und WGs. Er sammelt alle Aufgaben an einem Ort – dokumentiert mit Fotos, zugewiesen an Personen, kategorisiert mit Tags –, damit klar ist, wer was bis wann und wo erledigt.",
    ctaPrimary: "App öffnen ↗",
    ctaSecondary: "Funktionen ansehen",
    note: "Läuft direkt im Browser. Keine Installation, keine Registrierung.",
    problemTitle: "Das Problem",
    problemText:
      "Haushaltsaufgaben werden mündlich oder in Chats verteilt – und gehen dabei unter. Es fehlt ein zentraler, einfacher Ort, um zu sehen, was zu tun ist, wo genau und wer zuständig ist.",
    solutionTitle: "Die Lösung",
    solutionText:
      "Eine einfache Web-App, in der Aufgaben mit Fotos, Zuweisung und Tags erfasst und übersichtlich dargestellt werden. Sichtbar für alle, die mitmachen.",
    photoAlt: "Eine Person fotografiert Zimmerpflanzen im Wohnzimmer mit dem Smartphone",
    photoCaption: "Ein Foto zeigt genau, worum es geht – keine lange Beschreibung nötig.",
    highlightsEyebrow: "Kernidee",
    highlightsTitle: "Drei Dinge, die den Unterschied machen",
    highlightsLead: "Kein Projektmanagement-Tool, sondern das Minimum, das im Alltag wirklich hilft.",
    highlights: [
      {
        id: "fotos",
        icon: "📸",
        title: "Mit Fotos statt mit Worten",
        text: "Bis zu 10 Bilder pro Aufgabe zeigen, was gemeint ist – der Keller, der Fleck, das leere Regal. Kein Rätselraten mehr.",
      },
      {
        id: "personen",
        icon: "🙋",
        title: "Klar zugewiesen",
        text: "Jede Aufgabe kann an eine oder mehrere Personen gehen. Wer zuständig ist, steht auf der Karte – nicht irgendwo im Chatverlauf.",
      },
      {
        id: "tags",
        icon: "🏷️",
        title: "Nach Räumen und Typ sortiert",
        text: "Globale Tags für Räume, Aussenbereich, Aufgabentyp oder Technik. Farbe trägt Bedeutung, nicht Dekoration.",
      },
    ],
    allFeaturesCta: "Alle Funktionen",
    stepsEyebrow: "In drei Schritten",
    stepsTitle: "So funktioniert's",
    steps: [
      {
        title: "Personen anlegen",
        text: "Alle, die im Haushalt mitmachen, einmal eintragen. Namen genügen.",
      },
      {
        title: "Aufgabe erfassen",
        text: "Titel schreiben, Foto knipsen, Tag und Zuständigkeit setzen. Dauert weniger als eine Minute.",
      },
      {
        title: "Überblick behalten",
        text: "Filtern, suchen, abhaken. Was erledigt ist, ist sichtbar erledigt – für alle im Haushalt.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Alles, was ein Haushalt braucht – und nichts mehr",
    lead: "Househeld verzichtet bewusst auf Ballast. Diese Funktionen sind da, weil sie im Alltag gebraucht werden.",
    photoAlt: "Wischmopp auf Holzboden",
    photoCaption: "Ein Foto zeigt genau, was zu tun ist – kein Rätselraten mehr.",
    gridTitle: "Funktionen im Überblick",
    items: [
      {
        id: "aufgaben",
        icon: "✅",
        title: "Aufgaben in Sekunden erfasst",
        text: "Ein Titel genügt. Fälligkeitsdatum, Priorität, Zuweisung, Tags und Fotos sind optional und lassen sich jederzeit nachtragen.",
      },
      {
        id: "fotos",
        icon: "📸",
        title: "Fotodokumentation",
        text: "Bis zu 10 Fotos pro Aufgabe (JPG, PNG, WebP, HEIC). Bilder werden im Browser verkleinert und komprimiert, bevor sie gespeichert werden.",
      },
      {
        id: "personen",
        icon: "🙋",
        title: "Personen und Zuweisungen",
        text: "Mehrere Personen pro Aufgabe. Jede Person bekommt einen Initialen-Kreis mit einer stabilen Farbe – auf einen Blick erkennbar.",
      },
      {
        id: "tags",
        icon: "🏷️",
        title: "Globale Tags mit Kategorien",
        text: "Tags sind für den ganzen Haushalt gültig und eindeutig. Wird ein verwendeter Tag gelöscht, warnt die App vorher mit der Anzahl betroffener Aufgaben.",
      },
      {
        id: "prioritaet",
        icon: "🔥",
        title: "Prioritäten und Status",
        text: "Niedrig, mittel oder dringend – sichtbar als farbiger Streifen an der Karte. Der Status ist jederzeit frei änderbar, auch zurück von «erledigt» auf «offen».",
      },
      {
        id: "filter",
        icon: "🔎",
        title: "Filter und Volltextsuche",
        text: "Nach Status, Priorität, Person und Tag filtern: innerhalb einer Kategorie ODER, zwischen den Kategorien UND. Dazu eine Suche über alle Aufgaben.",
      },
      {
        id: "ansichten",
        icon: "🗂️",
        title: "Liste oder Board",
        text: "Die Listenansicht für den schnellen Überblick, die Board-Ansicht für den Blick auf den Fortschritt. Umschalten mit einem Klick.",
      },
      {
        id: "lokal",
        icon: "🔒",
        title: "Ohne Konto, ohne Cloud",
        text: "Alle Daten – inklusive Fotos – bleiben im Browser (IndexedDB). Kein Login, keine Registrierung, keine Übertragung an einen Server.",
      },
    ],
    notIncludedTitle: "Bewusst nicht dabei",
    notIncludedText:
      "Damit die App einfach bleibt, fehlen einige Dinge mit Absicht: kein Login und keine Benutzerkonten, keine KI-Funktionen, keine Push-Benachrichtigungen, keine Mehrsprachigkeit und kein Papierkorb. Gelöschtes ist endgültig gelöscht – deshalb fragt die App vorher nach.",
    ctaTitle: "Am besten selbst ausprobieren",
    ctaText: "Die Beispieldaten füllen die App in Sekunden mit 6 Personen und 14 Aufgaben.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    lead: "Die wichtigsten Antworten zu Nutzung, Daten und Grenzen der App.",
    items: [
      {
        question: "Was kostet Househeld?",
        answer:
          "Nichts. Househeld ist im Rahmen eines Studienprojekts entstanden und frei nutzbar. Es gibt keine Bezahlfunktionen und keine Werbung.",
      },
      {
        question: "Brauche ich ein Konto?",
        answer:
          "Nein. Die App öffnet sich direkt und ist sofort einsatzbereit – kein Login, keine E-Mail-Adresse, keine Registrierung.",
      },
      {
        question: "Wo werden meine Daten gespeichert?",
        answer:
          "Ausschliesslich lokal im Browser (IndexedDB), Fotos inklusive. Es gibt keinen Server und keine Cloud, an die etwas übertragen wird.",
      },
      {
        question: "Sehen alle im Haushalt dieselben Aufgaben?",
        answer:
          "Aktuell nicht. Weil die Daten pro Browser gespeichert werden, hat jedes Gerät seinen eigenen Bestand. Für den gemeinsamen Einsatz eignet sich derzeit ein geteiltes Gerät, etwa ein Tablet in der Küche. Eine geräteübergreifende Synchronisation ist die naheliegendste Erweiterung.",
      },
      {
        question: "Was passiert, wenn ich den Browserspeicher lösche?",
        answer:
          "Dann sind die Aufgaben und Fotos weg. Der private Modus oder blockierter Browserspeicher verhindern die Nutzung ebenfalls – in dem Fall zeigt die App einen entsprechenden Hinweis.",
      },
      {
        question: "Funktioniert Househeld auf dem Handy?",
        answer:
          "Ja. Die App ist für kleine Bildschirme gebaut und lässt sich über den Browser zum Startbildschirm hinzufügen. Fotos können direkt mit der Kamera aufgenommen werden.",
      },
      {
        question: "Wie viele Fotos passen an eine Aufgabe?",
        answer:
          "Maximal 10 Fotos, je bis 10 MB. Beim Hochladen wird auf 1600 px längste Kante verkleinert und als WebP komprimiert, damit der Browserspeicher nicht überläuft.",
      },
      {
        question: "Kann ich gelöschte Aufgaben wiederherstellen?",
        answer:
          "Nein, es gibt bewusst keinen Papierkorb. Deshalb verlangt das Löschen einen zweiten Klick zur Bestätigung – danach sind die Aufgabe und ihre Fotos endgültig entfernt.",
      },
      {
        question: "Gibt es Beispieldaten zum Ausprobieren?",
        answer:
          "Ja. Unter «Einstellungen → Beispieldaten laden» füllt sich die App mit 6 Personen und 14 Aufgaben. Über den Reset lässt sich alles wieder leeren.",
      },
    ],
    noAnswerText: "Frage nicht dabei? Schreib eine Nachricht über die Kontaktangaben auf der",
    noAnswerLinkLabel: "About-Seite",
    ctaTitle: "Fragen geklärt?",
    ctaText: "Dann ist der schnellste Weg ein kurzer Test im Browser.",
  },
  about: {
    eyebrow: "About",
    title: "Aus einem ganz alltäglichen Ärgernis entstanden",
    lead: "Househeld ist ein Übungsprojekt – und gleichzeitig der Versuch, ein echtes Problem so klein wie möglich zu lösen.",
    ideaTitle: "Die Idee",
    ideaText1:
      "In den meisten Haushalten werden Aufgaben mündlich verteilt oder in einem Chat erwähnt – und gehen dort zwischen Terminen, Links und Sprachnachrichten unter. Wer was übernimmt, ist selten schriftlich festgehalten, und «das Bad putzen» meint für alle etwas anderes.",
    ideaText2:
      "Househeld ist die Antwort darauf – ein Haushaltsaufgaben-Tracker für Familien und WGs, bei dem eine Aufgabe nur einen Titel braucht. Alles andere – Foto, Person, Tag, Datum, Priorität – ist optional und macht die Aufgabe Schritt für Schritt eindeutiger. Das Foto ersetzt dabei die lange Erklärung.",
    targetGroupTitle: "Zielgruppe",
    targetGroupText:
      "Familien und WGs, die anfallende Haushaltsaufgaben gemeinsam erfassen und verteilen wollen – ohne sich vorher auf ein Projektmanagement-Tool einigen zu müssen.",
    detailsTitle: "Projektdetails",
    authorLabel: "Autor",
    frameworkLabel: "Rahmen",
    statusLabel: "Stand",
    statusValue: "August 2026",
    stack: [
      { label: "Next.js 16", note: "App Router, statisch ausgeliefert" },
      { label: "React 19", note: "Komponenten und Zustand" },
      { label: "Tailwind CSS v4", note: "Design-Tokens statt Stylesheet-Wildwuchs" },
      { label: "TypeScript", note: "Strikte Typen, keine any-Abkürzungen" },
      { label: "IndexedDB", note: "Lokale Persistenz inklusive Fotos" },
      { label: "Vercel", note: "Deployment ohne Konfiguration" },
    ],
    decisionsText:
      "Die Daten liegen bewusst im Browser statt auf einem Server: Das macht die App ohne Login nutzbar, verursacht keine Kosten und gibt keine Fotos aus der Hand. Eine Synchronisation mit einer Datenbank zur geräteübergreifenden Nutzung ist aktuell in Entwicklung.",
    contactTitle: "Kontakt",
    contactText: "Rückmeldungen, Fehler und Ideen sind willkommen.",
    ctaTitle: "Lieber ausprobieren als lesen?",
    ctaText: "Die App läuft direkt im Browser – ohne Konto, ohne Installation.",
  },
  appTesten: {
    eyebrow: "App testen",
    title: "In fünf Minuten durch die ganze App",
    lead: "Kein Konto, keine Installation, keine Testdaten-Anfrage. Öffnen, ausprobieren, zurücksetzen.",
    ctaPrimary: "App öffnen ↗",
    ctaSecondary: "Vorher: Funktionen",
    sidebarTitle: "Kurz vorab",
    checks: [
      "Moderner Browser (Chrome, Edge, Firefox oder Safari)",
      "Kein privater Modus – dort ist der lokale Speicher gesperrt",
      "Handy, Tablet oder Desktop; die Oberfläche passt sich an",
    ],
    privacyNote:
      "Alles, was du eingibst, bleibt auf deinem Gerät. Es wird nichts hochgeladen und nichts ausgewertet.",
    stepsTitle: "Schritt für Schritt",
    walkthrough: [
      {
        title: "App öffnen",
        text: "Der Link führt direkt in die Aufgabenübersicht. Es erscheint keine Anmeldung und keine Einwilligungsabfrage – die App startet leer.",
      },
      {
        title: "Beispieldaten laden",
        text: "Unter «Einstellungen → Beispieldaten laden» füllen sich 6 Personen und 14 Aufgaben inklusive Fotos ein. So lässt sich die App ansehen, ohne selbst tippen zu müssen.",
      },
      {
        title: "Filtern und suchen",
        text: "Auf der Startseite nach Status, Priorität, Person oder Tag filtern und zwischen Listen- und Board-Ansicht wechseln.",
      },
      {
        title: "Eigene Aufgabe erfassen",
        text: "Über «Neu» eine Aufgabe anlegen: Titel eingeben, Foto hinzufügen, eine Person zuweisen, Tag setzen. Am Handy lässt sich das Foto direkt mit der Kamera aufnehmen.",
      },
      {
        title: "Wieder aufräumen",
        text: "Unter «Einstellungen» setzt der Reset alles zurück. Danach ist die App wieder leer – ohne Rückstände.",
      },
    ],
    finalTitle: "Los geht's",
    finalText:
      "Die App öffnet sich in einem neuen Tab – diese Seite bleibt geöffnet, falls du die Schritte nachlesen willst.",
    finalCta: "Househeld öffnen ↗",
  },
  footer: {
    appLinkLabel: "Zur App ↗",
  },
  cta: {
    defaultTitle: "Bereit für einen aufgeräumten Haushalt?",
    defaultText: "Househeld startet ohne Konto und ohne Installation – direkt im Browser.",
    exploreLabel: "App öffnen ↗",
    secondaryLabel: "So testest du",
  },
  notFound: {
    eyebrow: "404",
    title: "Diese Seite gibt es nicht",
    text: "Vielleicht wurde der Link umbenannt. Der Weg zurück führt über die Startseite.",
    cta: "Zur Startseite",
  },
};
