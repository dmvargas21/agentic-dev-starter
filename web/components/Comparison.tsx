import { comparisonRows } from "@/lib/content";
import Callout from "./Callout";

export default function Comparison() {
  return (
    <section id="antes-ahora">
      <h2 className="section-title">Antes vs. Ahora</h2>
      <p className="section-sub">
        Qué cambió concretamente en el día a día del desarrollador y del ingeniero de sistemas.
      </p>
      <div className="compare">
        <table>
          <thead>
            <tr>
              <th>Dimensión</th>
              <th>Antes de ChatGPT (2022)</th>
              <th>Hoy (2026)</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.dimension}>
                <td className="dim">{row.dimension}</td>
                <td>{row.before}</td>
                <td className="now">{row.now}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Callout warn label="Matiz importante">
        más velocidad no significa automáticamente mejor software. La deuda técnica, las
        vulnerabilidades y las alucinaciones en código generado obligan a que el juicio humano siga
        siendo el último filtro.
      </Callout>
    </section>
  );
}
