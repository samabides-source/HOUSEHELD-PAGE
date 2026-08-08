/**
 * Sämtliche Inhalte der Marketingseite an einem Ort. Neue Features, FAQ-Einträge
 * oder Schritte hier ergänzen – die Seiten rendern nur, was hier steht.
 */

export type Feature = {
  /** Kurzer Anker, auch als React-Key genutzt. */
  id: string;
  icon: string;
  title: string;
  text: string;
};

/** Die drei Kernversprechen – erscheinen auf der Startseite. */
export const highlights: Feature[] = [
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
];

/** Vollständige Feature-Liste – erscheint auf /features. */
export const features: Feature[] = [
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
];

export type Step = {
  title: string;
  text: string;
};

/** «So funktioniert's» – erscheint auf der Startseite. */
export const steps: Step[] = [
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
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Was kostet Hausheld?",
    answer:
      "Nichts. Hausheld ist im Rahmen eines Studienprojekts entstanden und frei nutzbar. Es gibt keine Bezahlfunktionen und keine Werbung.",
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
    question: "Funktioniert Hausheld auf dem Handy?",
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
];
