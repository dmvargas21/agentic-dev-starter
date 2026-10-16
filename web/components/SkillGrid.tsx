import type { SkillGroup } from "@/lib/content";

export default function SkillGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="skills">
      {groups.map((group) => (
        <div className="skill" key={group.title}>
          <h4>{group.title}</h4>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
