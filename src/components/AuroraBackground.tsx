const AuroraBackground = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div
      className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-[120px] opacity-25"
      style={{
        background: "radial-gradient(circle, hsl(var(--np-blue) / 0.7), transparent 60%)",
        animation: "aurora 22s ease-in-out infinite",
      }}
    />
    <div
      className="absolute top-1/3 -right-40 w-[44rem] h-[44rem] rounded-full blur-[140px] opacity-20"
      style={{
        background: "radial-gradient(circle, hsl(var(--np-red) / 0.6), transparent 60%)",
        animation: "aurora 26s ease-in-out infinite",
        animationDelay: "6s",
      }}
    />
    <div
      className="absolute bottom-0 left-1/4 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-15"
      style={{
        background: "radial-gradient(circle, hsl(265 85% 60% / 0.6), transparent 60%)",
        animation: "aurora 30s ease-in-out infinite",
        animationDelay: "12s",
      }}
    />
    <div className="absolute inset-0 noise opacity-[0.025]" />
  </div>
);

export default AuroraBackground;
