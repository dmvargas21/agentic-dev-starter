import { riskGroups } from "@/lib/content";
import SkillGrid from "./SkillGrid";

export default function Risks() {
  return (
    <section id="riesgos">
      <h2 className="section-title">Los riesgos que no desaparecen</h2>
      <SkillGrid groups={riskGroups} />
    </section>
  );
}
