import Callout from "./Callout";

export default function Intro() {
  return (
    <section id="inicio">
      <h2 className="section-title">El punto de partida</h2>
      <p className="section-sub">
        Antes de noviembre de 2022, la IA en el desarrollo era puntual: autocompletado, análisis
        estático, scripts de CI/CD. La irrupción de ChatGPT puso un modelo de lenguaje conversacional
        —capaz de escribir y explicar código— al alcance de cualquiera. En menos de cuatro años, pasó
        de ser una curiosidad a definir cómo se construye el software.
      </p>
      <Callout label="Idea central">
        la IA no reemplazó al desarrollador ni al ingeniero de sistemas. Cambió <em>qué</em> hace y{" "}
        <em>dónde</em> aporta valor: menos escribir código repetitivo, más diseñar sistemas, revisar,
        integrar, y responsabilizarse por la calidad y la seguridad de lo que la IA produce.
      </Callout>
    </section>
  );
}
