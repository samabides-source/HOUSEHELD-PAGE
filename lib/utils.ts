/** Fügt Klassennamen zusammen und ignoriert falsy Werte. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
