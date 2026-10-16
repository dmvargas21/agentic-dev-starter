import type { ReactNode } from "react";

export type Category = "hit" | "tool" | "job" | "paradigm";

export interface TimelineEntry {
  date: string;
  title: string;
  body: ReactNode;
  tag: string;
  category: Category;
}

export interface TimelineGroup {
  year: string;
  epoch: string;
  entries: TimelineEntry[];
}

export const timeline: TimelineGroup[] = [
  {
    year: "2022",
    epoch: "La chispa",
    entries: [
      {
        date: "30 nov 2022",
        title: "Lanzamiento de ChatGPT",
        body: (
          <>
            OpenAI publica ChatGPT basado en GPT-3.5. En su primera semana supera el millón de
            usuarios. Por primera vez el gran público —y miles de desarrolladores— pueden generar y
            depurar código conversando.
          </>
        ),
        tag: "Hito fundacional",
        category: "hit",
      },
      {
        date: "dic 2022",
        title: "Stack Overflow reacciona",
        body: (
          <>
            La comunidad prohíbe temporalmente respuestas generadas por ChatGPT por su alta tasa de
            errores plausibles. Nace el debate sobre calidad, verificación y confianza en el código
            generado.
          </>
        ),
        tag: "Impacto en la comunidad",
        category: "job",
      },
    ],
  },
  {
    year: "2023",
    epoch: "La adopción",
    entries: [
      {
        date: "23 ene 2023",
        title: "100 millones de usuarios en 2 meses",
        body: (
          <>
            ChatGPT se convierte en la aplicación de consumo de más rápido crecimiento de la
            historia. GitHub Copilot (GA desde 2022) acelera la percepción de que la IA escribe
            código &quot;de verdad&quot;.
          </>
        ),
        tag: "Adopción masiva",
        category: "tool",
      },
      {
        date: "14 mar 2023",
        title: "GPT-4",
        body: (
          <>
            Salto notable de razonamiento y capacidad de código. Mejora en exámenes profesionales y
            en resolución de problemas complejos. Se vuelve el motor de asistentes de programación.
          </>
        ),
        tag: "Capacidad",
        category: "hit",
      },
      {
        date: "22 mar 2023",
        title: "GitHub Copilot X",
        body: (
          <>
            Copilot Chat llega al IDE, junto a soporte de pull requests, documentación y CLI. El
            asistente deja de ser solo autocompletado y empieza a integrarse en todo el flujo de
            trabajo.
          </>
        ),
        tag: "Herramienta en el IDE",
        category: "tool",
      },
      {
        date: "jul 2023",
        title: "Llama 2 y Code Llama",
        body: (
          <>
            Meta libera modelos abiertos y una variante especializada en código. Se habilita el
            autoalojamiento y la personalización: la IA deja de depender solo de la nube de un
            proveedor.
          </>
        ),
        tag: "Modelos abiertos",
        category: "hit",
      },
      {
        date: "6 nov 2023",
        title: 'OpenAI DevDay: GPT-4 Turbo y "GPTs"',
        body: (
          <>
            Ventana de contexto ampliada, generación de JSON, GPTs personalizados y Assistants API.
            Los desarrolladores empiezan a <strong>construir sobre</strong> los modelos, no solo a
            usarlos.
          </>
        ),
        tag: "Plataforma para developers",
        category: "paradigm",
      },
      {
        date: "2023",
        title: "Primeros temores y ajustes en el mercado",
        body: (
          <>
            Cae el tráfico a Stack Overflow, se discute el impacto en perfiles junior y muchas
            empresas de tecnología ajustan plantillas. Simultáneamente, se dispara la demanda de
            perfiles de IA/ML.
          </>
        ),
        tag: "Mercado laboral",
        category: "job",
      },
    ],
  },
  {
    year: "2024",
    epoch: "Del asistente al agente",
    entries: [
      {
        date: "feb 2024",
        title: "Ventanas de contexto gigantes (Gemini 1.5)",
        body: (
          <>
            Aparecen modelos capaces de &quot;leer&quot; bases de código enteras de una sola vez
            (hasta 1M de tokens). El contexto pasa a ser un recurso de arquitectura, no solo un
            límite técnico.
          </>
        ),
        tag: "Contexto masivo",
        category: "hit",
      },
      {
        date: "4 mar 2024",
        title: "Claude 3 (Opus / Sonnet / Haiku)",
        body: (
          <>
            Anthropic entra fuerte en el código. La competencia entre proveedores se acelera y los
            desarrolladores ganan opciones, precios y calidad.
          </>
        ),
        tag: "Competencia",
        category: "hit",
      },
      {
        date: "12 mar 2024",
        title: 'Devin: "el primer ingeniero de software de IA"',
        body: (
          <>
            Se presenta un agente autónomo capaz de planificar, escribir, ejecutar y depurar en una
            terminal. Marca simbólicamente el paso de &quot;sugerir código&quot; a &quot;ejecutar
            tareas&quot;.
          </>
        ),
        tag: "Agentes autónomos",
        category: "paradigm",
      },
      {
        date: "13 may 2024",
        title: "GPT-4o",
        body: (
          <>
            Interacción multimodal en tiempo real (texto, voz, visión). La IA se vuelve más natural
            de usar dentro del trabajo diario del ingeniero.
          </>
        ),
        tag: "Multimodalidad",
        category: "hit",
      },
      {
        date: "jun 2024",
        title: 'Auge de los editores "IA-first"',
        body: (
          <>
            Cursor y herramientas similares popularizan el flujo donde la IA conoce todo el
            repositorio. Claude 3.5 Sonnet se vuelve favorito para programar. La edición asistida se
            vuelve estándar.
          </>
        ),
        tag: "Nuevos editores",
        category: "tool",
      },
      {
        date: "12 sep 2024",
        title: 'OpenAI o1: modelos que "razonan"',
        body: (
          <>
            Cadena de pensamiento explícita antes de responder. Mejora la resolución de problemas
            complejos y sienta la base de los agentes que planifican varios pasos.
          </>
        ),
        tag: "Razonamiento",
        category: "hit",
      },
      {
        date: "oct 2024",
        title: "Copilot se vuelve multiproveedor",
        body: (
          <>
            GitHub abre Copilot a varios modelos (Anthropic, Google, OpenAI). El modelo deja de ser
            el diferenciador único: importan la integración y el flujo de trabajo.
          </>
        ),
        tag: "Independencia del modelo",
        category: "tool",
      },
    ],
  },
  {
    year: "2025",
    epoch: "La era agéntica",
    entries: [
      {
        date: "20 ene 2025",
        title: "DeepSeek R1 sacude el mercado",
        body: (
          <>
            Un modelo de razonamiento abierto y muy económico demuestra que la frontera no es
            exclusiva de unos pocos laboratorios. Presiona a la baja los precios de la IA para
            todos.
          </>
        ),
        tag: "Apertura y costes",
        category: "hit",
      },
      {
        date: "feb 2025",
        title: 'Claude 3.7 Sonnet y los "modos de agente"',
        body: (
          <>
            Razonamiento híbrido (respuesta rápida o pensada) y modo agente en Copilot. La IA empieza
            a trabajar con herramientas, terminal y múltiples archivos de forma autónoma.
          </>
        ),
        tag: "Agentic coding",
        category: "tool",
      },
      {
        date: "feb 2025",
        title: 'Nace el término "vibe coding"',
        body: (
          <>
            Se populariza la idea de programar describiendo en lenguaje natural lo que se quiere.
            Cambia el perfil de quién puede construir software… y abre el debate sobre calidad y
            comprensión del código.
          </>
        ),
        tag: "Nuevo paradigma",
        category: "paradigm",
      },
      {
        date: "abr 2025",
        title: "GPT-4.1 y la familia o3 / o4-mini",
        body: (
          <>
            Modelos optimizados para código, instrucciones largas y uso de herramientas. La mezcla
            &quot;modelo rápido + modelo que razona&quot; se vuelve la arquitectura estándar de los
            asistentes.
          </>
        ),
        tag: "Tool use",
        category: "hit",
      },
      {
        date: "22 may 2025",
        title: "Claude 4 (Opus y Sonnet)",
        body: (
          <>
            Enfocados en código, razonamiento con herramientas y flujos prolongados. Los agentes de
            programación pasan de demostración a herramienta de producción.
          </>
        ),
        tag: "Producción agéntica",
        category: "hit",
      },
      {
        date: "may 2025",
        title: "Conferencias: la IA como plataforma",
        body: (
          <>
            Google I/O y Microsoft Build giran en torno a agentes, MCP (Model Context Protocol) y
            desarrollo asistido. Las grandes nubes integran la IA en toda la cadena de despliegue.
          </>
        ),
        tag: "Ecosistema",
        category: "tool",
      },
      {
        date: "jun–sep 2025",
        title: "Claude Code, Gemini CLI y agentes en terminal",
        body: (
          <>
            Los asistentes de línea de comandos se generalizan: leen el repositorio, ejecutan
            pruebas, hacen commits y proponen cambios. El &quot;pair programming&quot; se convierte
            en &quot;delegación&quot;.
          </>
        ),
        tag: "CLI y automatización",
        category: "tool",
      },
      {
        date: "ago 2025",
        title: "GPT-5",
        body: (
          <>
            Razonamiento adaptativo y enrutamiento interno de modelos. Menos alucinaciones y mejor
            desempeño en tareas largas de ingeniería. Base para agentes que trabajan solos durante
            horas.
          </>
        ),
        tag: "Frontera",
        category: "hit",
      },
      {
        date: "sep 2025",
        title: "Claude Sonnet 4.5 y el Agent SDK",
        body: (
          <>
            Modelo centrado en agentes y uso de computadora, junto a un SDK para construir agentes.
            La industria adopta MCP como estándar para conectar la IA con datos y herramientas.
          </>
        ),
        tag: "Estándar de agentes",
        category: "hit",
      },
      {
        date: "nov 2025",
        title: "GPT-5.1, Gemini 3 y Claude Opus 4.5",
        body: (
          <>
            Competencia máxima entre proveedores: contexto enorme, razonamiento avanzado y agentes
            de larga duración, a precios cada vez menores. La frontera se mueve cada pocas semanas.
          </>
        ),
        tag: "Carrera de la frontera",
        category: "hit",
      },
    ],
  },
  {
    year: "2026",
    epoch: "Delegación y madurez",
    entries: [
      {
        date: "2026",
        title: 'De "asistir" a "delegar"',
        body: (
          <>
            Los flujos agénticos se vuelven la norma: el equipo define objetivos, contexto y
            restricciones, y los agentes ejecutan tareas completas (leer el código, planificar,
            modificar varios archivos, correr pruebas e iterar).
          </>
        ),
        tag: "Cambio de paradigma",
        category: "paradigm",
      },
      {
        date: "2026",
        title: "Multi-agente y orquestación",
        body: (
          <>
            Los desarrolladores combinan varias herramientas a la vez (editor + agente de terminal +
            asistente de revisión + IDE). Aparecen equipos de agentes especializados que colaboran
            en una misma tarea.
          </>
        ),
        tag: "Orquestación",
        category: "tool",
      },
      {
        date: "2026",
        title: "Modelos que superan umbrales de ingeniería real",
        body: (
          <>
            Las nuevas generaciones (GPT-5.x, Claude 4.6/4.7/5, Gemini 3.x y modelos abiertos
            potentes) superan en benchmarks de ingeniería de software el rendimiento humano de
            referencia en tareas acotadas. El benchmark pasa a guiar decisiones de compra.
          </>
        ),
        tag: "Capacidad medida",
        category: "hit",
      },
      {
        date: "2026",
        title: "Desarrollo guiado por especificaciones (SDD)",
        body: (
          <>
            Crece el &quot;spec-driven development&quot;: primero una especificación clara y
            validable; luego el agente implementa. El rol se corre hacia definir bien el problema,
            los contratos y las pruebas.
          </>
        ),
        tag: "Metodología",
        category: "paradigm",
      },
      {
        date: "2026",
        title: 'Del "10x" al ingeniero que orquesta',
        body: (
          <>
            El valor no está en teclear rápido, sino en coordinar agentes, validar resultados y
            tomar decisiones de arquitectura. Se demandan perfiles que sepan{" "}
            <strong>revisar</strong> y <strong>asegurar</strong> código generado por IA.
          </>
        ),
        tag: "Nuevo perfil",
        category: "job",
      },
      {
        date: "hoy · oct 2026",
        title: "La IA es infraestructura, no un experimento",
        body: (
          <>
            La mayoría de los desarrolladores usa asistencia de IA a diario y una parte creciente
            del código nuevo se genera con IA bajo supervisión. El reto ya no es <em>adoptar</em>{" "}
            la herramienta, sino gobernar bien la calidad, el coste y la seguridad.
          </>
        ),
        tag: "Estado actual",
        category: "job",
      },
    ],
  },
];
