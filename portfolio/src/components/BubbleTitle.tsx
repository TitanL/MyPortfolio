import { motion, useReducedMotion } from "motion/react";

// Closed outlines keep each letter readable without changing the title size.
const letters = [
  {
    "x": 10,
    "path": "M14 8 H76 Q89 8 89 22 V30 Q89 43 76 43 H64 V125 Q64 140 49 140 H41 Q26 140 26 125 V43 H14 Q1 43 1 30 V22 Q1 8 14 8 Z",
    "shine": "M13 20 Q29 17 42 19"
  },
  {
    "x": 112,
    "path": "M17 8 H47 Q58 8 58 20 Q58 31 47 31 H45 V117 H47 Q58 117 58 129 Q58 140 47 140 H17 Q6 140 6 129 Q6 117 17 117 H19 V31 H17 Q6 31 6 20 Q6 8 17 8 Z",
    "shine": "M16 19 H39"
  },
  {
    "x": 200,
    "path": "M14 8 H76 Q89 8 89 22 V30 Q89 43 76 43 H64 V125 Q64 140 49 140 H41 Q26 140 26 125 V43 H14 Q1 43 1 30 V22 Q1 8 14 8 Z",
    "shine": "M13 20 Q29 17 42 19"
  },
  {
    "x": 302,
    "path": "M29 20 Q33 8 45 8 Q57 8 61 20 L88 122 Q93 140 77 140 Q65 140 62 128 L58 111 H32 L28 128 Q25 140 13 140 Q-3 140 2 122 Z M45 49 L35 86 H55 Z",
    "shine": "M35 28 Q40 17 47 20"
  },
  {
    "x": 405,
    "path": "M1 125 V24 Q1 8 16 8 Q26 8 32 20 L62 82 V23 Q62 8 76 8 Q90 8 90 23 V124 Q90 140 75 140 Q65 140 59 128 L29 66 V125 Q29 140 15 140 Q1 140 1 125 Z",
    "shine": "M11 38 V24 Q11 18 17 18 M73 22 V38"
  },
  {
    "x": 555,
    "path": "M3 24 Q3 8 20 8 Q37 8 37 24 V106 H72 Q88 106 88 123 Q88 140 72 140 H20 Q3 140 3 123 Z",
    "shine": "M14 38 V25 Q14 18 22 18"
  },
  {
    "x": 650,
    "path": "M29 20 Q33 8 45 8 Q57 8 61 20 L88 122 Q93 140 77 140 Q65 140 62 128 L58 111 H32 L28 128 Q25 140 13 140 Q-3 140 2 122 Z M45 49 L35 86 H55 Z",
    "shine": "M35 28 Q40 17 47 20"
  },
  {
    "x": 755,
    "path": "M0 125 V25 Q0 8 15 8 Q25 8 30 22 L45 62 L60 22 Q65 8 75 8 Q90 8 90 25 V125 Q90 140 76 140 Q62 140 62 125 V71 L56 87 Q52 98 45 98 Q38 98 34 87 L28 71 V125 Q28 140 14 140 Q0 140 0 125 Z",
    "shine": "M10 38 V25 Q10 18 16 19 M72 20 Q79 18 80 30"
  }
];

export default function BubbleTitle() {
  const reduceMotion = useReducedMotion();

  return (
    <h1 className="pointer-events-none absolute inset-0 flex select-none items-center justify-center px-5" aria-label="Titan Lam">
      <motion.svg
        animate={{ y: reduceMotion ? 0 : [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true" viewBox="0 0 865 150" className="h-auto w-full max-w-4xl overflow-visible">
        {letters.map((letter, index) => (
          <g key={index} transform={`translate(${letter.x} 5)`} strokeLinecap="round" strokeLinejoin="round">
            <path d={letter.path} fill="rgb(210 250 255 / 58%)" fillRule="evenodd" stroke="rgb(42 169 194 / 80%)" strokeWidth="4" />
            <path d={letter.shine} fill="none" stroke="rgb(255 255 255 / 85%)" strokeWidth="5" />
          </g>
        ))}
      </motion.svg>
    </h1>
  );
}
