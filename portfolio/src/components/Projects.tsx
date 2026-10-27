import project1Preview from "../assets/Project1Preview.png";

const projects = [1, 2, 3];

export default function Projects() {
  return (
    <div className="space-y-8 p-2 sm:p-4">
      {projects.map((number) => (
        <article
          key={number}
          className="flex flex-col items-center gap-5 sm:flex-row sm:even:flex-row-reverse"
        >
          <div className="w-full max-w-56 shrink-0 rounded-lg border-2 border-ink bg-white p-3 pb-7 shadow-[3px_3px_0_0_rgba(30,41,59,0.15)]">
            {number === 1 ? (
              <img
                src={project1Preview}
                alt="Project 1: illustrated slush mixer with fruit flavors, a layered drink, and a receipt"
                className="h-auto w-full rounded border border-ocean-200"
                loading="lazy"
                decoding="async"
              />
            ) : (
            <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded border-2 border-dashed border-ocean-600 bg-ocean-200/40">
              <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="h-12 w-12 text-ocean-600">
                {number === 2 ? (
                  <>
                    <rect x="5" y="10" width="38" height="28" rx="4" />
                    <path d="m20 18 11 6-11 6Z" />
                  </>
                ) : (
                  <>
                    <rect x="5" y="7" width="38" height="34" rx="4" />
                    <circle cx="16" cy="18" r="4" />
                    <path d="m7 35 12-11 8 7 6-6 9 10" />
                  </>
                )}
              </svg>
              <span className="text-xs text-ocean-600">{number === 2 ? "Short video" : "Screenshot"} placeholder</span>
            </div>
            )}
          </div>
          <div className="w-full space-y-2">
            <h2 className="text-xl font-semibold">Project {number}</h2>
            <p className="text-sm leading-relaxed">A short description of this project will go here.</p>
          </div>
        </article>
      ))}
    </div>
  );
}
