import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vanitasvanitatis.com"),
  title: {
    default: "Vanitas Vanitatis | Clinica Estetica en Santander",
    template: "%s | Vanitas Vanitatis",
  },
  description:
    "Clinica de medicina estetica avanzada en Santander. Diagnostico personalizado, tecnologia de vanguardia y resultados naturales.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
