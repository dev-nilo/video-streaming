// src/app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video App",
  description: "Minha aplicação de streaming estilo YouTube",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  );
}
