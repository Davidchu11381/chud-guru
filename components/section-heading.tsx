export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl text-ink-900 tracking-tight mb-6 italic font-medium">
      {children}
    </h2>
  );
}
