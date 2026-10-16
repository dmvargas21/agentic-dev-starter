export interface ComparisonRow {
  dimension: string;
  before: string;
  now: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Escribir código",
    before: "Manual, línea por línea, con autocompletado básico.",
    now: "Se delega a agentes; el humano revisa, ajusta y aprueba.",
  },
  {
    dimension: "Búsqueda de soluciones",
    before: "Google + Stack Overflow + documentación.",
    now: "Asistente conversacional con contexto del propio repositorio.",
  },
  {
    dimension: "Depuración",
    before: "Inspección manual, logs, prueba y error.",
    now: "La IA explica el error, propone la causa y ejecuta la corrección.",
  },
  {
    dimension: "Revisión de código",
    before: "Compañeros revisan cada pull request a mano.",
    now: "La IA hace una primera revisión; el humano valida lo importante.",
  },
  {
    dimension: "Pruebas",
    before: "Se escriben según el tiempo disponible.",
    now: "Se generan y ejecutan de forma casi automática dentro del flujo del agente.",
  },
  {
    dimension: "Rol principal",
    before: "Implementador: saber lenguajes, frameworks y síndromes de sintaxis.",
    now: "Arquitecto y verificador: saber diseñar, integrar, juzgar y asegurar.",
  },
  {
    dimension: "Infraestructura / operaciones",
    before: "Scripts, runbooks y automatización clásica.",
    now: "Agentes que diagnostican incidentes, leen logs y proponen cambios en IaC.",
  },
  {
    dimension: "Productividad",
    before: "Medida en líneas y horas.",
    now: "Medida en resultados entregados y fiabilidad del sistema.",
  },
];

export interface Stat {
  num: string;
  label: string;
}

export const stats: Stat[] = [
  {
    num: "100M",
    label:
      "usuarios de ChatGPT en sus primeros 2 meses (2023), el crecimiento de adopción más rápido registrado hasta entonces.",
  },
  {
    num: "≈90%",
    label:
      "de desarrolladores en EE. UU. usa herramientas de IA a diario en su flujo de trabajo (2026).",
  },
  {
    num: "2–3",
    label:
      "herramientas de IA por desarrollador en su flujo habitual: editor + agente + revisor.",
  },
  {
    num: "1M",
    label:
      "tokens de contexto en los modelos actuales: una base de código completa de una sola vez.",
  },
  {
    num: "80%+",
    label:
      "de tareas resueltas de forma autónoma por los mejores agentes en benchmarks de ingeniería real.",
  },
  {
    num: "2026",
    label: "año en que la delegación a agentes se volvió práctica estándar, no novedad.",
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillsGroups: SkillGroup[] = [
  {
    title: "Ganan peso",
    items: [
      "Diseño de arquitectura y de sistemas.",
      "Ingeniería de prompts y de contexto.",
      "Revisión crítica de código generado por IA.",
      "Seguridad, privacidad y cumplimiento.",
      "Orquestación de agentes y automatización.",
      "Especificar bien problemas y contratos (SDD).",
    ],
  },
  {
    title: "Pierden peso",
    items: [
      "Memorizar sintaxis y APIs.",
      "Escribir código repetitivo a mano.",
      "Buscar en foros la solución trivial.",
      "Tareas de “traducción” de requisitos a boilerplate.",
    ],
  },
  {
    title: "Siguen siendo clave",
    items: [
      "Modelado de datos y algoritmos.",
      "Fundamentos de sistemas, redes y rendimiento.",
      "Comunicación y trabajo en equipo.",
      "Criterio para decidir qué vale la pena construir.",
    ],
  },
];

export const riskGroups: SkillGroup[] = [
  {
    title: "Calidad y seguridad",
    items: [
      "Vulnerabilidades introducidas por código generado sin revisión.",
      "Alucinaciones: APIs o comportamientos que no existen.",
      "Deuda técnica silenciosa y difícil de rastrear.",
    ],
  },
  {
    title: "Habilidad humana",
    items: [
      "Riesgo de atrofiar fundamentos por sobre-dependencia.",
      "Menos comprensión profunda del código propio.",
      "Presión sobre perfiles junior y de entrada.",
    ],
  },
  {
    title: "Coste y gobernanza",
    items: [
      "Coste de tokens a escala y dependencia de proveedores.",
      "Privacidad de datos y propiedad intelectual del código.",
      "Necesidad de políticas claras de uso de IA en la empresa.",
    ],
  },
];
