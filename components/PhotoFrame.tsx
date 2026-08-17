import Image from "next/image";

/** Gerahmtes Foto mit optionaler Bildunterschrift, im Kartenstil der Seite. */
export function PhotoFrame({
  src,
  alt,
  width,
  height,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto w-full object-cover"
      />
      {caption ? (
        <figcaption className="px-5 py-3 text-xs text-slate-600">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
