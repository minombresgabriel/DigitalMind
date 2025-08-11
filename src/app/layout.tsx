import "./globals.css";
import type { Metadata } from "next";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "Premium Landing",
  description: "High-converting landing page boilerplate"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-950 text-white antialiased">{children}</body>
      <WhatsAppBubble />
    </html>
  );
}
