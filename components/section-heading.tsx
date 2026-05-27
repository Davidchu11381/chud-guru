export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 tracking-tight mb-8 italic font-medium">
      {children}
    </h2>
  );
}
