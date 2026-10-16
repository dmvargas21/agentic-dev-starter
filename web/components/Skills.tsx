import { skillsGroups } from "@/lib/content";
import SkillGrid from "./SkillGrid";

export default function Skills() {
  return (
    <section id="habilidades">
      <h2 className="section-title">Las habilidades que ganaron y perdieron peso</h2>
      <p className="section-sub">
        Qué dejó de ser ventaja competitiva y qué se volvió indispensable.
      </p>
      <SkillGrid groups={skillsGroups} />
    </section>
  );
}
