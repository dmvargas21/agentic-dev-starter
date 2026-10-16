# Línea de tiempo IA · desarrollo (Next.js)

App que renderiza la línea de tiempo **"De ChatGPT al ingeniero aumentado" (2022–2026)** sobre el impacto de la IA en desarrolladores e ingenieros de sistemas.

- **Next.js 16** (App Router) + **React 19** + **TypeScript**.
- Contenido en **español**.
- Diseño **editorial y sin JavaScript**: animación solo con CSS (no usa `next/font` ni fuentes externas).
- Todo son **Server Components**; la ruta `/` se prerenderiza como HTML **estático**.

## Comandos

Ejecuta los comandos **desde esta carpeta** (`web/`):

```bash
npm run dev     # desarrollo en http://localhost:3000
npm run build   # build de producción
npm run start   # servir el build
```

## Estructura

- `app/layout.tsx` — layout raíz (`lang="es"`, metadata en español, importa `globals.css`).
- `app/page.tsx` — compone todas las secciones.
- `app/globals.css` — CSS global (reproduce el diseño editorial original).
- `components/` — secciones: `Hero`, `TocNav`, `Intro`, `Timeline`, `Comparison`, `Stats`, `Skills`, `Risks`, `Future`, `SiteFooter`; compartidos: `Callout`, `SkillGrid`.
- `lib/` — datos: `timeline.tsx` (31 hitos, 5 años) y `content.ts` (comparativa, cifras, habilidades, riesgos).

> El resto del proyecto (documentación, config de OpenCode y el HTML legacy) vive en la carpeta padre.
