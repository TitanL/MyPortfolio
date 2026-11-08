import { motion, useReducedMotion } from "motion/react";

// Wide letter skeletons leave room inside A, N, and M for round bubble strokes.
const letters = [
  {
    "x": 40,
    "path": "M5 30 Q35 25 65 30 M35 32 Q31 85 35 140",
    "shine": "M8 10 Q28 5 45 9"
  },
  {
    "x": 180,
    "path": "M0 32 Q-4 84 0 139",
    "shine": "M-12 31 Q-15 46 -14 58"
  },
  {
    "x": 270,
    "path": "M5 30 Q35 25 65 30 M35 32 Q31 85 35 140",
    "shine": "M8 10 Q28 5 45 9"
  },
  {
    "x": 410,
    "path": "M0 140 Q10 70 55 30 Q100 70 110 140 M12 125 Q55 122 98 125",
    "shine": "M29 57 Q41 36 53 24"
  },
  {
    "x": 600,
    "path": "M0 140 Q-3 85 0 30 Q48 74 110 140 Q115 84 110 30",
    "shine": "M-15 48 Q-16 34 -12 23 M96 26 Q101 39 98 51"
  },
  {
    "x": 800,
    "path": "M0 30 Q-5 83 0 140 Q32 144 65 140",
    "shine": "M-15 31 Q-18 48 -16 60"
  },
  {
    "x": 930,
    "path": "M0 140 Q10 70 55 30 Q100 70 110 140 M12 125 Q55 122 98 125",
    "shine": "M29 57 Q41 36 53 24"
  },
  {
    "x": 1110,
    "path": "M0 140 Q-4 86 0 30 Q34 61 65 94 Q96 61 130 30 Q137 87 130 140",
    "shine": "M-15 40 L-12 23 M114 24 Q124 27 125 42"
  }
];

export default function BubbleTitle() {
  const reduceMotion = useReducedMotion();

  return (
    <h1 className="pointer-events-none absolute inset-0 flex select-none items-center justify-center px-5" aria-label="Titan Lam">
      <motion.svg
        animate={{ y: reduceMotion ? 0 : [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        viewBox="0 0 1280 200"
        className="h-auto w-full max-w-[72rem] overflow-visible"
      >
        {letters.map((letter, index) => (
          <g key={index} transform={`translate(${letter.x} 10)`} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d={letter.path} stroke="rgb(42 169 194 / 65%)" strokeWidth="60" />
            <path d={letter.path} stroke="rgb(210 250 255 / 58%)" strokeWidth="52" />
            <path d={letter.shine} stroke="rgb(255 255 255 / 85%)" strokeWidth="7" />
          </g>
        ))}
      </motion.svg>
    </h1>
  );
}
