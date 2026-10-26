export default function Contact() {
  return (
    <div className="space-y-6 py-6 text-center">
      <h1 className="text-3xl font-bold">Contact me</h1>
      <a
        href="mailto:titanlam917@gmail.com"
        className="inline-block break-all rounded text-sm underline decoration-ocean-600 underline-offset-4 hover:text-ocean-600 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        titanlam917@gmail.com
      </a>
      <div className="flex items-center justify-around gap-6 pt-2">
        <a
          href="https://github.com/TitanL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Titan on GitHub (opens in a new tab)"
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#5c6bc0] text-white shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink motion-reduce:transition-none"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16">
            <path d="M12 .3a12 12 0 0 0-3.793 23.385c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23A11.5 11.5 0 0 1 12 6.101c1.02.005 2.047.138 3.007.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.292c0 .32.216.694.825.576A12 12 0 0 0 12 .3Z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/titan-lam-ab5806268"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Titan on LinkedIn (opens in a new tab)"
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#007eb5] text-white shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink motion-reduce:transition-none"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14">
            <path d="M5.372 24H.398V7.982h4.974ZM2.882 5.797A2.898 2.898 0 1 1 2.882 0a2.898 2.898 0 0 1 0 5.797ZM24 24h-4.965v-7.797c0-1.858-.038-4.249-2.589-4.249-2.589 0-2.986 2.025-2.986 4.115V24H8.49V7.982h4.771v2.185h.069c.664-1.26 2.286-2.589 4.706-2.589C23.07 7.578 24 10.892 24 15.197Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
