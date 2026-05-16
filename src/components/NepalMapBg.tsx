const NepalMapBg = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 800 360"
    className={`pointer-events-none ${className}`}
    fill="none"
  >
    <defs>
      <linearGradient id="np-map-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(0 84% 60%)" stopOpacity="0.7" />
        <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.7" />
      </linearGradient>
      <radialGradient id="np-map-fade" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#000" stopOpacity="1" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <mask id="np-map-mask">
        <rect width="800" height="360" fill="url(#np-map-fade)" />
      </mask>
    </defs>
    <g mask="url(#np-map-mask)" stroke="url(#np-map-grad)" strokeWidth="1.4" fill="none" opacity="0.55">
      <path d="M40 240 C 110 150, 220 100, 330 130 C 430 155, 520 110, 620 150 C 700 180, 750 220, 760 260 C 720 280, 620 300, 500 290 C 380 280, 260 310, 160 295 C 90 285, 50 270, 40 240 Z" />
      <path d="M120 220 C 200 170, 320 160, 420 180 C 520 200, 600 180, 680 210" opacity="0.6" />
      <path d="M180 250 C 280 220, 400 230, 520 240 C 600 246, 660 240, 700 240" opacity="0.4" />
    </g>
  </svg>
);

export default NepalMapBg;
