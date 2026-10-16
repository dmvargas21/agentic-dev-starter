import Callout from "./Callout";

export default function Future() {
  return (
    <section id="futuro">
      <h2 className="section-title">El rol del desarrollador y del ingeniero en 2026</h2>
      <p className="section-sub">De dónde venimos y hacia dónde apunta la profesión.</p>
      <Callout>
        <strong>2022:</strong> el desarrollador escribía. <strong>2026:</strong> el desarrollador
        define el problema, diseña la solución, orquesta agentes y responde por la calidad. La IA
        cubre lo repetitivo; el criterio humano cubre lo que importa.
      </Callout>
      <p>
        El ingeniero de sistemas, en particular, pasó de ser quien configura servidores y despliega a
        mano, a ser quien <strong>diseña plataformas y guardarraíles</strong> para que la IA trabaje
        de forma segura: límites de acceso, revisión obligatoria, observabilidad, control de costes y
        trazabilidad de lo que el agente hizo y por qué.
      </p>
      <Callout warn label="Conclusión abierta">
        la tecnología cambió en meses; las profesiones, en años. Quienes integraron la IA como una
        herramienta más —manteniendo fundamentos fuertes y juicio crítico— son quienes están
        capitalizando el cambio. La ventaja competitiva ya no es saber escribir código más rápido,
        sino saber <em>decidir qué código vale la pena y por qué</em>.
      </Callout>
    </section>
  );
}
