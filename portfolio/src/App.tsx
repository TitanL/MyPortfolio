import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import Window from "./components/Window";
import FolderIcon from "./components/FolderIcon";
import Projects from "./components/Projects";

type WindowId = "about" | "projects";

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
      </nav>

      <AnimatePresence>
        {openWindows.includes("about") && (
          <Window
            key="about"
            title="About me"
            onClose={() => closeWindow("about")}
            onFocus={() => bringToFront("about")}
            zIndex={openWindows.indexOf("about") + 1}
            constraintsRef={desktopRef}
          >
            <p>Hi! Placeholder bio goes here.</p>
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
