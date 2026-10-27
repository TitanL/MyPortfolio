// Hand-drawn vector lettering stays crisp at every screen size.
const letters = [
  { x: 25, path: "M5 28 Q32 24 61 28 M33 30 Q30 66 33 110", shine: "M7 20 Q24 17 39 19" },
  { x: 125, path: "M23 30 Q20 68 24 109", shine: "M16 30 Q13 44 14 53" },
  { x: 200, path: "M5 28 Q32 24 61 28 M33 30 Q30 66 33 110", shine: "M8 19 Q23 16 37 18" },
  { x: 305, path: "M3 110 Q12 58 31 27 Q49 57 60 110 M13 80 Q31 76 50 80", shine: "M17 53 Q22 36 29 26" },
  { x: 410, path: "M4 110 Q0 69 4 28 Q30 60 59 110 Q65 67 60 28", shine: "M-3 42 L-3 28 M51 23 Q55 34 54 45" },
  { x: 560, path: "M5 28 Q0 66 5 109 Q28 114 52 109", shine: "M-3 30 Q-6 44 -5 55" },
  { x: 655, path: "M3 110 Q12 58 31 27 Q49 57 60 110 M13 80 Q31 76 50 80", shine: "M18 49 Q23 33 29 26" },
  { x: 760, path: "M0 110 Q-2 70 6 28 Q22 53 30 72 Q40 48 55 28 Q65 68 63 110", shine: "M-2 37 L2 24 M49 25 Q56 24 58 38" },
];

export default function BubbleTitle() {
  return (
    <h1 className="pointer-events-none absolute inset-0 flex select-none items-center justify-center px-5" aria-label="Titan Lam">
      <svg aria-hidden="true" viewBox="0 0 865 150" className="h-auto w-full max-w-4xl overflow-visible">
        {letters.map((letter, index) => (
          <g key={index} transform={`translate(${letter.x} 5)`} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d={letter.path} stroke="rgb(42 169 194 / 65%)" strokeWidth="36" />
            <path d={letter.path} stroke="rgb(210 250 255 / 58%)" strokeWidth="29" />
            <path d={letter.shine} stroke="rgb(255 255 255 / 85%)" strokeWidth="5" />
          </g>
        ))}
      </svg>
    </h1>
  );
}
