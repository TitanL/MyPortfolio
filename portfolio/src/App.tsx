import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import Window from "./components/Window";
import FolderIcon from "./components/FolderIcon";

export default function App() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div
      ref={desktopRef}
      className="relative h-full w-full overflow-hidden bg-ocean-400"
    >
      {/* folder shortcuts down the side */}
      <nav className="absolute right-4 top-6 flex flex-col gap-4">
        <FolderIcon label="About me" onClick={() => setAboutOpen(true)} />
      </nav>

      <AnimatePresence>
        {aboutOpen && (
          <Window
            title="About me"
            onClose={() => setAboutOpen(false)}
            constraintsRef={desktopRef}
          >
            <p>Hi! Placeholder bio goes here.</p>
          </Window>
        )}
      </AnimatePresence>
    </div>
  );
}
