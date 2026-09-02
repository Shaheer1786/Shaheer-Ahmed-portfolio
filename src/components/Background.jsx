export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 grid-veil" />
      <div className="absolute left-1/2 top-[-10%] h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-signal-blue/10 blur-[140px]" />
      <div className="absolute right-[-10%] top-[38%] h-[420px] w-[420px] rounded-full bg-signal-cyan/[0.07] blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[-8%] h-[480px] w-[480px] rounded-full bg-signal-deep/[0.08] blur-[150px]" />
    </div>
  );
}
