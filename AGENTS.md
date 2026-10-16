# AGENTS.md

## Qué es este repo
Línea de tiempo (2022–2026) sobre el impacto de la IA en desarrolladores e ingenieros de sistemas.
Migrado desde un HTML estático autocontenido (`linea-de-tiempo-ia-desarrollo.html`, conservado como referencia) a una app **Next.js 16 (App Router) + React 19 + TypeScript**, que vive en la subcarpeta **`web/`**.

## Registro de progreso (obligatorio)
- **Cada vez que se ejecute una tarea importante, guarda la información en `docs/docs.md`.**
- `docs/docs.md` es el registro de contexto del desarrollo: qué se hizo, decisiones tomadas, comandos, resultados y pendientes.
- Añade cada entrada **al final** (no borres las anteriores), con fecha `AAAA-MM-DD`, un título corto y viñetas concisas (**Hecho** / **Decisión** / **Pendiente**).
- Todo en español.

## Hechos clave (evitan errores)
- **La app está en `web/`.** Ejecuta los comandos **desde `web/`**: `npm run dev`, `npm run build`, `npm run start`. **No** hay tests ni linter configurados.
- Versiones: Next **16.4.0**, React **19.3.0**, TypeScript 5. Node >= 20.9 (probado con v24).
- `web/next.config.ts` activa `cacheComponents: true` y `partialPrefetching: true`.
- **No es un repositorio git.**
- `opencode.json` (raíz) es config de OpenCode: define el MCP `context7` (remoto, cabecera `{env:CONTEXT7_API_KEY}`). **No contiene secretos**: la clave la aporta el entorno del servicio de OpenCode (`opencode service set env …`; consultar con `opencode service get`).
- El diseño es **editorial y sin JavaScript**: papel/tinta, tipografías serif/mono locales (sin CDN), animación solo con CSS.

## Convenciones de contenido
- **Idioma: español**, con acentos/ñ en UTF-8.
- Al editar contenido, **actualiza la fecha** en dos sitios: el `.meta` del hero ("Actualizado el …") y el `<footer>`.
- Hechos hasta 2025 consolidados; lo de **2026** se redacta como tendencia (el pie de página lo advierte).
- Categoría de cada hito (define el color del nodo): `hit` (hito técnico), `tool` (herramienta), `job` (impacto laboral), `paradigm` (nuevo paradigma).

## Estructura (app en `web/`)
- `web/app/layout.tsx`: layout raíz (`lang="es"`, metadata en español, importa `globals.css`, sin fuentes externas).
- `web/app/globals.css`: CSS global = diseño editorial (eje como rail izquierdo mediante la variable `--rail`).
- `web/app/page.tsx`: composición de las secciones (Hero, navegación, Intro, Timeline, Comparativa, Cifras, Habilidades, Riesgos, Futuro, Pie).
- Datos en `web/lib/`; componentes de sección en `web/components/`.
- **Estado:** **migración completada.** `web/lib/` (datos), `web/components/` (secciones) y `web/app/page.tsx` creados; restos de la plantilla eliminados; `npm run build` (desde `web/`) genera `/` como estático. Todo son **Server Components** (el diseño no usa JavaScript, así que no hace falta `'use client'`).
- **En la raíz** (no mover dentro de `web/`): `AGENTS.md`, `opencode.json`, `docs/`, el HTML legacy y demás meta del proyecto.

## Estructura de la línea de tiempo
- Año: `<div class="year"><span class="epoch-year">AÑO</span><span class="epoch-sub">subtítulo</span></div>`.
- Hito: `<article class="item CATEGORIA">` con `.node`, `.date`, `h3`, `p` y `.tag`.
- Ya **no** se alterna `left`/`right`: el eje es un rail a la izquierda (`--rail`).
- Para una categoría nueva: define la variable de color en `:root` y añade la regla `.item.CAT .node`.

## Gotchas de edición
- Si tocas el diseño, hazlo en `web/app/globals.css` y en `web/components/`, **no** en el HTML legacy.
- Respeta `prefers-reduced-motion` (desactiva la animación `axisGrow` y el scroll suave); **no la elimines**.
- Breakpoint `@media (max-width:760px)`: `--rail` pasa a `3.6rem` y se oculta `.epoch-sub`.
