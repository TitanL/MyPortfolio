// Replace each placeholder icon and label with your own skill or program later.
const skills = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  label: `Skill ${index + 1}`,
}));

export default function SkillBubbles() {
  return (
    <ul className="skill-bubbles" aria-label="Skills, languages, and programs">
      {skills.map((skill, index) => (
        <li key={skill.id} className={`skill-bubble-position bubble-${skill.id}`}>
          <div className="skill-bubble" style={{ animationDelay: `${index * -0.65}s`, animationDuration: `${3.6 + (index % 3) * 0.5}s` }}>
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
              <rect x="4" y="4" width="24" height="24" rx="6" strokeDasharray="3 3" />
              <path d="m12 12-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" />
            </svg>
            <span className="text-[11px] font-semibold">{skill.label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
