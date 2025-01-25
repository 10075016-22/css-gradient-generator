import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generador de Gradientes CSS",
  description: "Una herramienta para generar gradientes CSS fácilmente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
