import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Castle Solutions | Software, Cloud & AI Engineering",
  description:
    "Consultoría e ingeniería tecnológica especializada en desarrollo de software de alto impacto, plataformas cloud escalables e inteligencia artificial aplicada.",
  keywords: [
    "Castle Solutions",
    "Ingeniería de Software",
    "Inteligencia Artificial",
    "Cloud Computing",
    "Consultoría Tecnológica",
    "Colombia",
  ],
  authors: [{ name: "Castle Solutions" }],
  metadataBase: new URL("https://castlesolutions.com.co"),
  openGraph: {
    title: "Castle Solutions | Software, Cloud & AI Engineering",
    description:
      "Ingeniería de Software, Arquitectura Cloud y Soluciones de Inteligencia Artificial.",
    url: "https://castlesolutions.com.co",
    siteName: "Castle Solutions",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle Solutions | Software, Cloud & AI Engineering",
    description:
      "Ingeniería de Software, Arquitectura Cloud y Soluciones de Inteligencia Artificial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
