import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section id="datos">
      <h2 className="section-title">Cifras que marcan el cambio</h2>
      <p className="section-sub">
        Indicadores representativos del giro de la profesión entre 2022 y 2026.
      </p>
      <div className="stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.num}>
            <div className="num">{stat.num}</div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </div>
      <p className="section-sub" style={{ marginTop: 18, fontSize: "0.8rem" }}>
        Las cifras son aproximadas y buscan ilustrar la tendencia; el ritmo de cambio hace que se
        actualicen con frecuencia.
      </p>
    </section>
  );
}
