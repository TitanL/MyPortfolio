import project1Preview from "../assets/Project1Preview.png";
import project2Preview from "../assets/Project2.gif";

// Add the physical project's photo here; it will be included on the next build.
const cookingTimerPhoto = Object.values(
  import.meta.glob<string>("../assets/KBBQPreview.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  }),
)[0];

const projects = [
  {
    id: 1,
    title: "Family of Slush",
    description: "A front-end application to show group dynamics and individual personalities in a creative way! Worked on the design of my button and the slush lever. Both have animations and are hand-drawn.",
    repoUrl: "https://github.com/zakisalam223/CPSC581Group6Project1",
    previewUrl: "https://zakisalam223.github.io/CPSC581Group6Project1/",
    preview: project1Preview,
    previewAlt: "Family of Slush: illustrated fruit flavors, a layered drink, and a receipt",
    previewAction: "Open Family of Slush live website",
  },
  {
    id: 2,
    title: "Wee Model",
    description: "An application to show expertise sharing of 3D modeling between a game master and apprentice in a creative way - using embodied input/output! Designed the look of the application on Figma and developed the level selection screen.",
    repoUrl: "https://github.com/zakisalam223/CPSC581Group6Project2",
    previewUrl: "https://zakisalam223.github.io/CPSC581Group6Project2/",
    preview: project2Preview,
    previewAlt: "Wee Model: animated preview of the Apprentice and Game Master application",
    previewAction: "Open Wee Model live website",
  },
  {
    id: 3,
    title: "K-BBQ Cooking Timer",
    description: "A short description of this project will go here.",
    repoUrl: "https://github.com/zakisalam223/CPSC581Project3",
    previewUrl: "https://www.youtube.com/watch?v=VABHzoFOO8U",
    preview: cookingTimerPhoto,
    previewAlt: "K-BBQ Cooking Timer physical project",
    previewAction: "Watch K-BBQ Cooking Timer demo video",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8 p-2 sm:p-4">
      {projects.map((project) => (
        <article
          key={project.id}
          className="flex flex-col items-center gap-5 sm:flex-row sm:even:flex-row-reverse"
        >
          <a
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.previewAction} (opens in a new tab)`}
            title={project.previewAction}
            className="group block aspect-video w-full max-w-56 shrink-0 overflow-hidden rounded-lg border-2 border-ink bg-ocean-50 transition-colors hover:border-ocean-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean-600"
          >
            {project.preview ? (
              <img
                src={project.preview}
                alt={project.previewAlt}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-ocean-200/40">
                <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="h-12 w-12 text-ocean-600">
                  <rect x="5" y="7" width="38" height="34" rx="4" />
                  <circle cx="16" cy="18" r="4" />
                  <path d="m7 35 12-11 8 7 6-6 9 10" />
                </svg>
                <span className="text-xs text-ocean-600">Watch demo video</span>
              </div>
            )}
          </a>
          <div className="w-full min-w-0 space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
                title={`View ${project.title} on GitHub`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5c6bc0] text-white transition-colors hover:bg-[#4654a1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean-600"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 .3a12 12 0 0 0-3.793 23.385c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23A11.5 11.5 0 0 1 12 6.101c1.02.005 2.047.138 3.007.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922.43.372.823 1.102.823 2.222v3.292c0 .32.216.694.825.576A12 12 0 0 0 12 .3Z" />
                </svg>
              </a>
            </div>
            <p className="text-sm leading-relaxed">{project.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
