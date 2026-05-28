import "../styles/globals.css";

export const metadata = {
  title: "Portfolio Full-Stack",
  description:
    "Desarrollo de soluciones web Full-Stack para agencias y negocios locales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
