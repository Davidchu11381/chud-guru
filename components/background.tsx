export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 1000px 400px at 50% -10%, rgba(212, 165, 116, 0.18), transparent 70%)",
        }}
      />
    </div>
  );
}
