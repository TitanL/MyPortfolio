import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import Window from "./components/Window";
import FolderIcon from "./components/FolderIcon";
import Projects from "./components/Projects";
import SkillBubbles from "./components/SkillBubbles";
import Contact from "./components/Contact";

type WindowId = "about" | "projects" | "contact";

export default function App() {
  const desktopRef = useRef<HTMLDivElement>(null);
  // Back-to-front order also guarantees only one instance of each window.
  const [openWindows, setOpenWindows] = useState<WindowId[]>([]);

  function bringToFront(id: WindowId) {
    setOpenWindows((windows) =>
      windows.at(-1) === id ? windows : [...windows.filter((window) => window !== id), id],
    );
  }

  function closeWindow(id: WindowId) {
    setOpenWindows((windows) => windows.filter((window) => window !== id));
  }

  return (
    <div
      ref={desktopRef}
      className="relative h-full w-full overflow-hidden bg-ocean-400"
    >
      {/* folder shortcuts down the side */}
      <nav aria-label="Desktop folders" className="absolute right-4 top-6 z-50 flex flex-col gap-4">
        <FolderIcon label="About me" onClick={() => bringToFront("about")} />
        <FolderIcon label="Projects" onClick={() => bringToFront("projects")} />
        <FolderIcon label="Contact" onClick={() => bringToFront("contact")} />
      </nav>

      <AnimatePresence>
        {openWindows.includes("contact") && (
          <Window
            key="contact"
            title="Contact"
            onClose={() => closeWindow("contact")}
            onFocus={() => bringToFront("contact")}
            zIndex={openWindows.indexOf("contact") + 1}
            constraintsRef={desktopRef}
            className="!left-auto !right-6 !top-auto !bottom-6 !ml-0 max-w-[calc(100%-3rem)]"
          >
            <Contact />
          </Window>
        )}
        {openWindows.includes("about") && (
          <Window
            key="about"
            title="About me"
            onClose={() => closeWindow("about")}
            onFocus={() => bringToFront("about")}
            zIndex={openWindows.indexOf("about") + 1}
            constraintsRef={desktopRef}
            className="about-window"
            decorations={<SkillBubbles />}
          >
            <div className="space-y-4 py-5">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-ocean-600 bg-ocean-200/40 text-sm">Your photo</div>
              <h1 className="text-center text-xl font-semibold">Hi, I'm Titan!</h1>
              <p className="text-sm leading-relaxed">My bio will go here — a little about me, what I enjoy building, and what I'm learning.</p>
              <p className="text-sm text-ocean-600">A few of my skills & tools</p>
            </div>
          </Window>
        )}
        {openWindows.includes("projects") && (
          <Window
            key="projects"
            title="Projects"
            onClose={() => closeWindow("projects")}
            onFocus={() => bringToFront("projects")}
            zIndex={openWindows.indexOf("projects") + 1}
            constraintsRef={desktopRef}
            className="!left-4 !top-40 !ml-0 !w-[calc(100%-2rem)] sm:!left-[8%] sm:!top-32 sm:!w-[min(42rem,calc(100%-9rem))]"
          >
            <Projects />
          </Window>
        )}
      </AnimatePresence>
    </div>
  );
}
