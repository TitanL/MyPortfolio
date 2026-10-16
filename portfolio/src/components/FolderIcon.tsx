type FolderIconProps = {
  label: string;
  onClick: () => void;
};

export default function FolderIcon({ label, onClick }: FolderIconProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-1 rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-ocean-600"
    >
      <svg
        viewBox="0 0 64 52"
        className="h-14 w-16 transition-transform group-hover:-rotate-3 group-hover:scale-110"
        fill="white"
        stroke="#1e293b"
        strokeWidth="3"
        strokeLinejoin="round"
      >
        <path d="M4 10a4 4 0 0 1 4-4h16l6 7h26a4 4 0 0 1 4 4v27a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      </svg>
      <span className="text-sm">{label}</span>
    </button>
  );
}
