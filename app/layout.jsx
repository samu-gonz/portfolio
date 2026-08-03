import "../styles/globals.css";

export const metadata = {
  title: "SG Labs Studio | Desarrollo & Diseño Web",
  description:
    "Estudio digital B2B. Diseñamos páginas web ultra rápidas que convierten visitas en clientes para PYMEs y empresas.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "SG Labs Studio | Desarrollo & Diseño Web",
    description:
      "Sitios web de alto rendimiento, diseño premium y enfocados 100% en ventas.",
    url: "https://sglabsstudio.com",
    siteName: "SG Labs Studio",
    locale: "es_ES",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 antialiased">{children}</body>
    </html>
  );
}
