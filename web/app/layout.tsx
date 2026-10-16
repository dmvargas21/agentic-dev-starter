import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Línea de Tiempo: De ChatGPT al Ingeniero Aumentado (2022 – 2026)",
  description:
    "Cómo la inteligencia artificial generativa transformó el trabajo del desarrollador y del ingeniero de sistemas, desde el lanzamiento de ChatGPT hasta hoy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
