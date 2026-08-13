/**
 * Next.js erlaubt nur ein <html>-Element (im Root-Layout). Deshalb bekommt
 * der englische Teilbaum sein `lang="en"` hier auf einem <div> gesetzt –
 * Browser, Screenreader und Übersetzungstools werten das genauso aus.
 * Die eigentliche Spracherkennung für Suchmaschinen läuft über die
 * hreflang-Angaben in den Metadaten (siehe lib/metadata.ts).
 */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}
