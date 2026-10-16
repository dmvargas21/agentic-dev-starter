# docs.md — Registro de progreso del proyecto

Registro de contexto del proyecto **"De ChatGPT al ingeniero aumentado" (2022–2026)**, una línea de tiempo sobre el impacto de la IA en desarrolladores e ingenieros de sistemas.

- Se actualiza **cada vez que se completa una tarea importante** (regla definida en `AGENTS.md`).
- Las entradas se **añaden al final**, de la más antigua a la más reciente. No se reescribe el historial.
- Idioma: **español**.

## Formato de cada entrada
`## AAAA-MM-DD — Título corto`, seguido de viñetas con **Hecho** / **Decisión** / **Pendiente**.

---

## 2026-10 — Entregable inicial: línea de tiempo en HTML
- **Hecho:** `linea-de-tiempo-ia-desarrollo.html`, documento **autocontenido** (CSS y JS en línea, sin dependencias ni CDN) con la línea de tiempo 2022–2026.
  - Categorías por hito: `hit`, `tool`, `job`, `paradigm`.
  - Alternancia visual izquierda/derecha y aparición animada con `IntersectionObserver`.
- **Hecho:** el usuario **rediseñó** el archivo a un estilo **editorial** (papel/tinta, serif + mono, eje como rail izquierdo, **sin JavaScript**; animación solo CSS `axisGrow`). Existe una copia de trabajo: `linea-de-tiempo-ia-desarrollo copy.html`.
- **Decisión:** mantener el documento autocontenido (abrible con doble clic, sin internet).

## 2026-10 — Documentación del repo: AGENTS.md
- **Hecho:** `AGENTS.md` con las convenciones del proyecto (idioma español, estructura de la línea de tiempo, actualización de fechas, categorías).

## 2026-10 — MCP Context7 a nivel de proyecto
- **Hecho:** `opencode.json` (raíz) con el MCP `context7` remoto: `type: remote`, `url: https://mcp.context7.com/mcp`, `oauth: false`, cabecera `CONTEXT7_API_KEY: {env:CONTEXT7_API_KEY}`.
- **Decisión:** usar la forma de configuración de OpenCode V2 (`mcp.servers.<nombre>`) y **no** incrustar la clave en el repositorio.

## 2026-10-14 — Gestión de la API key de Context7
- **Hecho:** se probaron varias vías (`.env` del proyecto y variable de entorno de usuario de Windows) y se descartaron.
- **Decisión:** guardar la clave **solo** en el entorno del servicio de OpenCode: `opencode service set env CONTEXT7_API_KEY <valor>` (consultable con `opencode service get`). Se eliminaron el `.env` del proyecto y la variable de usuario.
- **Aprendizaje:** `opencode service restart` **no** propaga variables del SO; hay que usar `opencode service set env`. Context7 también responde **sin** clave (con límites menores), así que "connected" no demuestra por sí solo que la clave se envía.
- **Pendiente / recomendado:** rotar la clave (estuvo en texto plano dentro del proyecto).

## 2026-10-14 — Verificación del MCP y aviso del editor
- **Hecho:** `opencode mcp list` → `context7 connected`. Llamadas reales a `resolve-library-id` y `query-docs` devolvieron documentación actualizada (p. ej. Tailwind, Vue).
- **Hecho (diagnóstico):** el aviso `Unable to load schema from 'https://opencode.ai/config.json': … is untrusted` proviene de **VS Code/Cursor**, no de OpenCode; se resuelve con `json.schemaDownload.trustedDomains` (la opción **no** es aditiva).

## 2026-10-14 — Migración a Next.js (en curso)
- **Objetivo:** reescribir la estructura de la web como app **Next.js + React**, dividida en componentes, **manteniendo el diseño y el contenido** actuales. Se consultan las versiones actuales de la documentación con Context7.
- **Hecho:** scaffold con `create-next-app` (TypeScript, App Router, **sin** Tailwind, **sin** ESLint, **sin** git) en una carpeta temporal, movido a la raíz; se conservó el `AGENTS.md` propio.
- **Hecho:** `npm install` → Next **16.4.0**, React **19.3.0**, TypeScript 5.
- **Hecho:** `app/globals.css` con el CSS editorial exacto; `app/layout.tsx` (`lang="es"`, metadata en español, sin fuentes externas).
- **Decisión:** el `AGENTS.md` generado por Next avisa de **cambios rompedores** en la v16 y remite a `node_modules/next/dist/docs/`; se usa esa documentación local.
- **Pendiente:**
  - `lib/` con los datos (línea de tiempo y resto de secciones).
  - `components/` con las secciones (Hero, nav, Intro, Timeline, Comparativa, Cifras, Habilidades, Riesgos, Futuro, Pie).
  - `app/page.tsx` que las compone.
  - Eliminar restos de la plantilla: `app/page.module.css` y los SVG de `public/`.
  - Verificar con `npm run build` (y `npm run dev`).
- **Notas:**
  - `lib/timeline.tsx` se redactó en un intento previo pero **no persistió**; hay que recrearlo.
  - **Corrección detectada:** el subtítulo de 2023 en el HTML real es **"La adopción"**. Migrar el contenido **leyéndolo del HTML**, no de memoria.

## 2026-10-14 — Regla de registro de progreso
- **Hecho:** se añadió a `AGENTS.md` la regla de **guardar cada tarea importante en `docs/docs.md`**.
- **Hecho:** este archivo, con el historial consolidado del proyecto.
- **Decisión:** las entradas se **añaden al final**; no se reescribe el historial.

## 2026-10-14 — Migración a Next.js completada
- **Hecho:** `lib/timeline.tsx` con los datos de la línea de tiempo (31 hitos, 5 años; categorías `hit`/`tool`/`job`/`paradigm`) y `lib/content.ts` (comparativa, cifras, habilidades, riesgos).
- **Hecho:** componentes de sección en `components/`: `Hero`, `TocNav`, `Callout` (compartido), `Intro`, `Timeline`, `Comparison`, `Stats`, `SkillGrid` (compartido), `Skills`, `Risks`, `Future`, `SiteFooter`.
- **Hecho:** `app/page.tsx` compone todas las secciones. Todo son **Server Components**: no hizo falta `'use client'` porque el diseño no tiene JavaScript.
- **Hecho:** limpieza de restos de la plantilla: eliminados `app/page.module.css` y los SVG de `public/` (`file`, `globe`, `next`, `vercel`, `window`).
- **Hecho:** `npm run build` → **éxito** (compila, pasa TypeScript y prerenderiza `/` como HTML **estático**).
- **Verificación del HTML generado** (`.next/server/app/index.html`): 31 `.item`, 5 años, 6 cifras, 8 filas de tabla, 4 callouts; acentos, `≈` y `–` correctos; y el punto tras `</strong>` sin espacio.
- **Decisión:** migrar el contenido **leyendo el HTML real**, no de memoria. Ej.: el subtítulo de 2023 es **"La adopción"** y varios textos diferían de borradores previos.
- **Nota de fidelidad:** `app/globals.css` reproduce el `<style>` del HTML **línea por línea**, así que el diseño es idéntico.
- **Pendiente / recomendado:** rotar la API key de Context7.

## 2026-10-14 — Reorganización del proyecto: app movida a `web/`
- **Hecho:** toda la app Next.js se movió a la subcarpeta **`web/`**: `app/`, `components/`, `lib/`, `public/`, `package.json`, `package-lock.json`, `next.config.ts`, `next-env.d.ts`, `tsconfig.json`, `.gitignore`, `README.md` y `node_modules/`.
- **Hecho:** se eliminó `.next/` antes de mover (se regenera) y se ejecutó `npm run build` **desde `web/`** → **éxito**; `/` sigue prerenderizándose como estático.
- **Decisión:** la raíz queda para el meta del proyecto (`AGENTS.md`, `opencode.json`, `docs/`, HTML legacy). Los comandos se ejecutan **desde `web/`**.
- **Hecho:** actualizados `AGENTS.md` (rutas `web/…` y desde dónde se ejecutan los comandos) y `web/README.md` (reescrito en español; corregido: ya no menciona `next/font`/Geist, que no se usan).
- **Nota:** apareció una carpeta `spec/` en la raíz ajena a esta tarea; **no** se tocó.

---

## Estado actual y pendientes
- **App Next.js (entregable activo):** en `web/`. Comandos **desde `web/`**: `npm run dev`, `npm run build`, `npm run start`. `/` se sirve como estático.
- **Raíz:** `AGENTS.md`, `opencode.json`, `docs/` y el HTML legacy (`linea-de-tiempo-ia-desarrollo.html` + copia).
- **Pendiente / recomendado:** rotar la API key de Context7.
