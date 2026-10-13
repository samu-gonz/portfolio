import { bodyFont } from "../lib/fonts";
import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://sglabsstudio.com"),
  title: "SG Labs Studio | Desarrollo & Diseño Web",
  description:
    "Diseño y desarrollo web a medida para PYMEs y empresas. Aumenta tus llamadas, reservas y ventas con una presencia digital profesional.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "páginas web para empresas",
    "web para PYMEs",
    "reservas online",
    "SG Labs Studio",
  ],
  alternates: {
    canonical: "https://sglabsstudio.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "SG Labs Studio | Desarrollo & Diseño Web",
    description:
      "Sitios web rápidos, diseño premium y una experiencia pensada para convertir visitas en clientes.",
    url: "https://sglabsstudio.com",
    siteName: "SG Labs Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SG Labs Studio — Desarrollo y Diseño Web",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SG Labs Studio | Desarrollo & Diseño Web",
    description:
      "Sitios web rápidos, diseño premium y una experiencia pensada para convertir visitas en clientes.",
    images: ["/og.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SG Labs Studio",
    url: "https://sglabsstudio.com",
    logo: "https://sglabsstudio.com/icon.png",
    image: "https://sglabsstudio.com/og.png",
    description:
      "Estudio de desarrollo y diseño web para PYMEs y empresas, especializado en webs rápidas y orientadas a conversión.",
    areaServed: "Worldwide",
    serviceType: [
      "Diseño web",
      "Desarrollo web",
      "Reservas online",
      "Automatización para negocios",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "samuelg@sglabsstudio.com",
      availableLanguage: ["Spanish"],
    },
  };

  return (
    <html lang="es" className={bodyFont.variable}>
      <body className={`${bodyFont.className} bg-[#05070f] antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
