/* ============================================================
   Editorial placeholder compositions for Kelly Entertainment.
   No photography — abstract SVG shapes evoking the four divisions
   (stage lights, vinyl, architecture, partnerships) and event
   posters. Built from a consistent palette so they read as a
   coherent visual system, not random gradients.
   ============================================================ */

const K_COLORS = {
  canvas: "#F4EFE6",
  canvas2: "#EDE5D6",
  canvas3: "#E4D9C2",
  ink: "#15110D",
  ink2: "#3A332B",
  accent: "#E63E11",
  accentDeep: "#B82A05",
  gold: "#D4A14A",
  plum: "#3A1B2E",
  olive: "#4A4D2B",
};

/* ---- Hero composition: layered stage-light disc with concentric rings ---- */
function HeroArt() {
  return (
    <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* deep ink ground */}
      <rect width="600" height="600" fill={K_COLORS.ink} />

      {/* concentric "spotlight" rings */}
      <g transform="translate(310 320)">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle
            key={i}
            r={60 + i * 38}
            fill="none"
            stroke={i % 2 === 0 ? K_COLORS.accent : K_COLORS.gold}
            strokeWidth={i === 0 ? 0 : 1.5}
            opacity={1 - i * 0.11}
          />
        ))}
        <circle r="60" fill={K_COLORS.accent} />
        <circle r="18" fill={K_COLORS.canvas} />
      </g>

      {/* angled marquee bars - bottom left */}
      <g transform="translate(-30 460) rotate(-12)">
        <rect width="240" height="14" fill={K_COLORS.accent} />
        <rect y="24" width="180" height="14" fill={K_COLORS.gold} />
        <rect y="48" width="120" height="14" fill={K_COLORS.canvas} opacity="0.85" />
      </g>

      {/* top tag block */}
      <g transform="translate(40 40)">
        <rect width="120" height="3" fill={K_COLORS.gold} />
        <text x="0" y="24" fill={K_COLORS.canvas} fontFamily="Bricolage Grotesque, sans-serif" fontWeight="600" fontSize="13" letterSpacing="2">
          KE / 2026 SEASON
        </text>
      </g>

      {/* subtle bottom grid texture */}
      <g opacity="0.18">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={50 * i} y1="540" x2={50 * i} y2="600" stroke={K_COLORS.canvas} strokeWidth="0.5" />
        ))}
      </g>

      {/* tiny accent dot */}
      <circle cx="540" cy="80" r="6" fill={K_COLORS.accent} />
    </svg>
  );
}

/* ---- Division 1: Live Entertainment — stage with overhead lights ---- */
function LiveArt() {
  return (
    <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="liveCone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={K_COLORS.accent} stopOpacity="0.85" />
          <stop offset="100%" stopColor={K_COLORS.accent} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="liveCone2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={K_COLORS.gold} stopOpacity="0.65" />
          <stop offset="100%" stopColor={K_COLORS.gold} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill={K_COLORS.ink} />
      {/* light cones from above */}
      <polygon points="180,0 240,0 300,360 60,360" fill="url(#liveCone2)" />
      <polygon points="320,0 380,0 460,360 240,360" fill="url(#liveCone)" />
      <polygon points="460,0 520,0 580,360 380,360" fill="url(#liveCone2)" />

      {/* stage line */}
      <rect y="300" width="600" height="2" fill={K_COLORS.gold} opacity="0.7" />
      <rect y="296" width="600" height="2" fill={K_COLORS.accent} opacity="0.5" />

      {/* silhouette crowd */}
      <g fill={K_COLORS.ink} opacity="0.92">
        {[40, 90, 140, 210, 260, 330, 380, 440, 500, 560].map((x, i) => (
          <circle key={i} cx={x} cy={330 + (i % 3) * 4} r={14 + (i % 4) * 2} />
        ))}
      </g>

      {/* light fixtures */}
      {[210, 350, 490].map((x, i) => (
        <g key={i} transform={`translate(${x} 4)`}>
          <rect width="20" height="6" fill={K_COLORS.ink2} />
          <circle cx="10" cy="8" r="4" fill={i === 1 ? K_COLORS.accent : K_COLORS.gold} />
        </g>
      ))}
    </svg>
  );
}

/* ---- Division 2: Media/Streaming — vinyl + waveform ---- */
function MediaArt() {
  return (
    <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="360" fill={K_COLORS.canvas2} />
      {/* vinyl record offset right */}
      <g transform="translate(440 180)">
        <circle r="180" fill={K_COLORS.ink} />
        {[140, 120, 100, 80, 60, 40].map((r, i) => (
          <circle key={i} r={r} fill="none" stroke={K_COLORS.ink2} strokeWidth="0.6" opacity="0.6" />
        ))}
        <circle r="38" fill={K_COLORS.accent} />
        <circle r="6" fill={K_COLORS.ink} />
        {/* highlight slice */}
        <path d="M -180 0 A 180 180 0 0 1 -120 -134" fill="none" stroke={K_COLORS.gold} strokeWidth="2" opacity="0.5" />
      </g>

      {/* waveform on left */}
      <g transform="translate(40 180)">
        {Array.from({ length: 22 }).map((_, i) => {
          const h = 20 + Math.abs(Math.sin(i * 0.9) * 70) + (i % 3) * 6;
          return (
            <rect
              key={i}
              x={i * 14}
              y={-h / 2}
              width="6"
              height={h}
              fill={i % 4 === 0 ? K_COLORS.accent : K_COLORS.ink}
              rx="3"
            />
          );
        })}
      </g>

      {/* play triangle floating */}
      <g transform="translate(220 60)">
        <circle r="22" fill={K_COLORS.accent} />
        <path d="M -6 -10 L 10 0 L -6 10 Z" fill={K_COLORS.canvas} />
      </g>
    </svg>
  );
}

/* ---- Division 3: Real Estate — architectural blocks ---- */
function RealEstateArt() {
  return (
    <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="360" fill={K_COLORS.gold} />
      {/* skyline blocks */}
      <g>
        <rect x="40"  y="120" width="80"  height="240" fill={K_COLORS.ink} />
        <rect x="140" y="180" width="60"  height="180" fill={K_COLORS.canvas} />
        <rect x="220" y="60"  width="100" height="300" fill={K_COLORS.ink} />
        <rect x="340" y="140" width="70"  height="220" fill={K_COLORS.plum} />
        <rect x="430" y="100" width="90"  height="260" fill={K_COLORS.canvas} />
        <rect x="540" y="200" width="40"  height="160" fill={K_COLORS.ink} />
      </g>

      {/* windows */}
      <g fill={K_COLORS.gold} opacity="0.85">
        {[
          [60, 160], [60, 200], [60, 240], [60, 280], [60, 320],
          [88, 160], [88, 200], [88, 240], [88, 280], [88, 320],
          [240, 100], [240, 140], [240, 180], [240, 220], [240, 260], [240, 300],
          [280, 100], [280, 140], [280, 180], [280, 220], [280, 260], [280, 300],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="8" height="20" />
        ))}
      </g>
      {/* accent block */}
      <rect x="220" y="60" width="100" height="20" fill={K_COLORS.accent} />
      {/* baseline */}
      <rect y="358" width="600" height="2" fill={K_COLORS.ink} />
    </svg>
  );
}

/* ---- Division 4: Partnerships — overlapping shapes / venn ---- */
function PartnershipsArt() {
  return (
    <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="360" fill={K_COLORS.plum} />
      {/* overlapping circles with mix-blend */}
      <g style={{ mixBlendMode: "screen" }}>
        <circle cx="240" cy="180" r="130" fill={K_COLORS.accent} opacity="0.85" />
        <circle cx="360" cy="180" r="130" fill={K_COLORS.gold} opacity="0.85" />
      </g>
      {/* central highlight */}
      <ellipse cx="300" cy="180" rx="30" ry="60" fill={K_COLORS.canvas} opacity="0.95" />
      {/* labels */}
      <g fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700" fontSize="18" letterSpacing="-0.4" fill={K_COLORS.canvas} textAnchor="middle">
        <text x="160" y="80">BRAND</text>
        <text x="440" y="80">CULTURE</text>
        <text x="300" y="320">AMPLIFY</text>
      </g>
      {/* connection lines */}
      <g stroke={K_COLORS.canvas} strokeWidth="1" opacity="0.4" fill="none">
        <line x1="160" y1="90" x2="240" y2="180" />
        <line x1="440" y1="90" x2="360" y2="180" />
        <line x1="300" y1="310" x2="300" y2="240" />
      </g>
    </svg>
  );
}

/* ---- Experience cards: distinct poster compositions ---- */
function ExpArtConcert() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill={K_COLORS.ink} />
      {/* radial light burst */}
      <g transform="translate(200 220)">
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return (
            <line
              key={i}
              x1="0" y1="0"
              x2={Math.cos(a) * 280}
              y2={Math.sin(a) * 280}
              stroke={i % 2 === 0 ? K_COLORS.accent : K_COLORS.gold}
              strokeWidth="2"
              opacity="0.4"
            />
          );
        })}
        <circle r="38" fill={K_COLORS.accent} />
      </g>
      {/* big title block */}
      <text x="200" y="80" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="56" letterSpacing="-3" fill={K_COLORS.canvas} textAnchor="middle">
        ENCORE
      </text>
      <text x="200" y="118" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize="12" letterSpacing="4" fill={K_COLORS.gold} textAnchor="middle">
        AN EVENING OF LIVE SOUND
      </text>
    </svg>
  );
}

function ExpArtFilm() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill={K_COLORS.canvas3} />
      {/* film strip frames */}
      <g transform="translate(50 70)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 100} 0)`}>
            <rect width="90" height="120" fill={K_COLORS.ink} rx="4" />
            <rect x="6" y="6" width="78" height="108" fill={K_COLORS.plum} rx="2" />
            {/* abstract scene */}
            <circle cx="45" cy="40" r="14" fill={K_COLORS.gold} />
            <rect x="6" y="80" width="78" height="34" fill={K_COLORS.accent} />
          </g>
        ))}
        {/* film perforations */}
        {Array.from({ length: 16 }).map((_, j) => (
          <rect key={j} x={j * 20} y={-12} width="8" height="6" fill={K_COLORS.ink} />
        ))}
        {Array.from({ length: 16 }).map((_, j) => (
          <rect key={j} x={j * 20} y={128} width="8" height="6" fill={K_COLORS.ink} />
        ))}
      </g>
      <text x="200" y="260" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700" fontSize="24" letterSpacing="-1" fill={K_COLORS.ink} textAnchor="middle">
        Black Lens · Vol. 3
      </text>
    </svg>
  );
}

function ExpArtPanel() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill={K_COLORS.accent} />
      {/* big quote shape */}
      <text x="36" y="180" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="260" letterSpacing="-12" fill={K_COLORS.canvas} opacity="0.18">
        “
      </text>
      <g transform="translate(36 70)">
        <rect width="30" height="3" fill={K_COLORS.ink} />
        <text x="0" y="22" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11" letterSpacing="3" fill={K_COLORS.ink}>
          BUILDERS SUMMIT
        </text>
        <text x="0" y="78" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700" fontSize="38" letterSpacing="-2" fill={K_COLORS.canvas}>
          Equity in
        </text>
        <text x="0" y="118" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700" fontSize="38" letterSpacing="-2" fill={K_COLORS.canvas} fontStyle="italic">
          motion.
        </text>
      </g>
      {/* avatar stack */}
      <g transform="translate(36 230)">
        {[K_COLORS.gold, K_COLORS.plum, K_COLORS.ink, K_COLORS.canvas].map((c, i) => (
          <circle key={i} cx={i * 22} cy={0} r="16" fill={c} stroke={K_COLORS.accent} strokeWidth="2" />
        ))}
        <text x="110" y="5" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="12" fill={K_COLORS.canvas}>
          + 8 SPEAKERS
        </text>
      </g>
    </svg>
  );
}

/* ---- Impact band texture ---- */
function ImpactBgArt() {
  return (
    <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {Array.from({ length: 30 }).map((_, i) => (
          <line
            key={i}
            x1={i * 50}
            y1="0"
            x2={i * 50 + 200}
            y2="400"
            stroke={K_COLORS.accent}
            strokeWidth="0.5"
          />
        ))}
      </g>
      <circle cx="1080" cy="80" r="160" fill="none" stroke={K_COLORS.gold} strokeWidth="1" />
      <circle cx="1080" cy="80" r="120" fill="none" stroke={K_COLORS.accent} strokeWidth="1" />
      <circle cx="120" cy="340" r="100" fill="none" stroke={K_COLORS.gold} strokeWidth="1" />
    </svg>
  );
}

/* ---- Mission card art (right side) ---- */
function MissionArt() {
  return (
    <svg viewBox="0 0 600 480" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="480" fill={K_COLORS.plum} />
      {/* arc patterns */}
      <g fill="none" stroke={K_COLORS.gold} strokeWidth="1.5" opacity="0.85">
        <path d="M -50 240 A 240 240 0 0 1 430 240" />
        <path d="M -50 280 A 280 280 0 0 1 470 280" />
        <path d="M -50 320 A 320 320 0 0 1 510 320" />
      </g>
      {/* accent quarter circle */}
      <path d="M 600 0 A 220 220 0 0 0 380 220 L 600 220 Z" fill={K_COLORS.accent} />
      {/* big serif K */}
      <text
        x="60"
        y="320"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="800"
        fontSize="340"
        letterSpacing="-12"
        fill={K_COLORS.canvas}
        opacity="0.95"
      >
        K
      </text>
      {/* tiny dots */}
      <circle cx="500" cy="380" r="4" fill={K_COLORS.gold} />
      <circle cx="540" cy="400" r="6" fill={K_COLORS.accent} />
    </svg>
  );
}

Object.assign(window, {
  HeroArt, LiveArt, MediaArt, RealEstateArt, PartnershipsArt,
  ExpArtConcert, ExpArtFilm, ExpArtPanel, ImpactBgArt, MissionArt,
  K_COLORS,
});
