import { motion, useDragControls } from "motion/react";
import type { ReactNode, RefObject } from "react";

type WindowProps = {
  title: string;
  onClose: () => void;
  constraintsRef: RefObject<HTMLElement | null>;
  children: ReactNode;
  className?: string;
};

export default function Window({
  title,
  onClose,
  constraintsRef,
  children,
  className = "",
}: WindowProps) {
  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false} // only the title bar starts a drag
      dragConstraints={constraintsRef}
      dragMomentum={false}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`absolute left-1/2 top-24 -ml-40 w-80 rounded-2xl border-2 border-ink bg-ocean-50 shadow-[6px_6px_0_0_rgba(30,41,59,0.25)] ${className}`}
    >
      <div
        onPointerDown={(e) => controls.start(e)}
        className="flex cursor-grab touch-none select-none items-center justify-between rounded-t-2xl border-b-2 border-ink bg-ocean-200 px-3 py-2 active:cursor-grabbing"
      >
        <span className="font-semibold">{title}</span>
        <button
          onClick={onClose}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label={`Close ${title}`}
          className="flex h-6 w-6 items-center justify-center rounded border-2 border-ink bg-white leading-none hover:bg-shark-pink"
        >
          ×
        </button>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
}
