import { Fragment } from "react";
import { timeline } from "@/lib/timeline";

export default function Timeline() {
  return (
    <section id="tiempo">
      <h2 className="section-title">Línea de tiempo</h2>
      <p className="section-sub">
        Hitos clave desde el lanzamiento de ChatGPT hasta hoy. Los hechos de 2026 se actualizan
        constantemente: el ritmo de lanzamientos de modelos y agentes es semanal.
      </p>
      <div className="timeline" id="timeline">
        {timeline.map((group) => (
          <Fragment key={group.year}>
            <div className="year">
              <span className="epoch-year">{group.year}</span>
              <span className="epoch-sub">{group.epoch}</span>
            </div>
            {group.entries.map((entry) => (
              <article
                key={`${group.year}-${entry.date}-${entry.title}`}
                className={`item ${entry.category}`}
              >
                <div className="node"></div>
                <div className="card">
                  <span className="date">{entry.date}</span>
                  <h3>{entry.title}</h3>
                  <p>{entry.body}</p>
                  <span className="tag">{entry.tag}</span>
                </div>
              </article>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
