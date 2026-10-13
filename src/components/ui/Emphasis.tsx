/** Renders *asterisk-wrapped* segments of a string as italic accent text. */
export function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part))}
    </>
  );
}
