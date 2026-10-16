const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#tiempo", label: "Línea de tiempo" },
  { href: "#antes-ahora", label: "Antes vs. Ahora" },
  { href: "#datos", label: "Cifras" },
  { href: "#habilidades", label: "Nuevas habilidades" },
  { href: "#riesgos", label: "Riesgos" },
  { href: "#futuro", label: "El rol en 2026" },
];

export default function TocNav() {
  return (
    <nav className="toc">
      <div className="wrap">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
