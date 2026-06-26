import "../styles/globals.css";

export const metadata = {
  title: "SG Labs Studio | Desarrollo Web Profesional",
  description:
    "Portafolio de Samuel González. Diseño y creación de aplicaciones web modernas, rápidas y a medida en Málaga.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "SG Labs Studio | Desarrollo Web Profesional",
    description: "Diseño y desarrollo de aplicaciones web a medida.",
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
